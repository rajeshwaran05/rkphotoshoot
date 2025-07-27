import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data();
        
        // Check if this is the admin email and assign admin role
        const isAdmin = firebaseUser.email === 'admin@gmail.com';
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email!,
          displayName: firebaseUser.displayName || '',
          role: isAdmin ? 'admin' : (userData?.role || 'user'),
          createdAt: userData?.createdAt?.toDate() || new Date()
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, displayName: string) => {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(firebaseUser, { displayName });
    
    // Determine role based on email
    const isAdmin = email === 'admin@gmail.com';
    
    // Create user document in Firestore
    await setDoc(doc(db, 'users', firebaseUser.uid), {
      email,
      displayName,
      role: isAdmin ? 'admin' : 'user',
      createdAt: new Date()
    });
  };

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  // Function to create admin account if it doesn't exist
  const createAdminAccount = async () => {
    try {
      const adminEmail = 'admin@gmail.com';
      const adminPassword = 'admin123';
      
      // Check if admin already exists
      const adminDoc = await getDoc(doc(db, 'users', 'admin'));
      if (!adminDoc.exists()) {
        const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
        await updateProfile(firebaseUser, { displayName: 'PhotoStudio Admin' });
        
        // Create admin document in Firestore
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          email: adminEmail,
          displayName: 'PhotoStudio Admin',
          role: 'admin',
          createdAt: new Date()
        });
        
        console.log('Admin account created successfully');
      }
    } catch (error) {
      console.log('Admin account may already exist or there was an error:', error);
    }
  };

  // Create admin account on app initialization
  useEffect(() => {
    createAdminAccount();
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};