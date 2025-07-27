export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  image: string;
}

export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  eventDate: string;
  eventTime: string;
  location: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests?: string;
  createdAt: Date;
  totalAmount: number;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
}