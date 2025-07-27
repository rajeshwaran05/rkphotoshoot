import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Booking, Package as PackageType } from '../types';

const mockPackages: PackageType[] = [
  {
    id: '1',
    name: 'Wedding Essential',
    description: 'Perfect for intimate weddings',
    price: 1500,
    duration: '6 hours',
    features: ['Professional photographer', 'Digital gallery', '100+ edited photos', 'Online gallery'],
    image: 'images/wed2.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Portrait Session',
    description: 'Individual or family portraits',
    price: 300,
    duration: '2 hours',
    features: ['Professional photographer', '30+ edited photos', 'Multiple outfit changes', 'Digital delivery'],
    image: 'images/prod2.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Event Coverage',
    description: 'Corporate and special events',
    price: 800,
    duration: '4 hours',
    features: ['Event photographer', 'Candid moments', '150+ photos', 'Same-day highlights'],
    image: 'images/cor1.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  }
];

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      try {
        const bookingsRef = collection(db, 'bookings');
        const q = query(
          bookingsRef,
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        })) as Booking[];

        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.displayName || user?.email}!
          </h1>
          <p className="text-gray-600 mt-2">Manage your bookings and explore our photography packages.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/order"
            className="bg-blue-800 text-white p-6 rounded-xl shadow-lg hover:bg-blue-900 transition-all transform hover:scale-105"
          >
            <Calendar className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book New Session</h3>
            <p className="text-blue-100">Schedule your next photography session</p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Package className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Active Bookings</h3>
            <p className="text-gray-600">
              {bookings.filter(b => b.status === 'approved' || b.status === 'pending').length} bookings
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Completed</h3>
            <p className="text-gray-600">
              {bookings.filter(b => b.status === 'completed').length} sessions
            </p>
          </div>
        </div>

        {/* Available Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-800">Rs.{pkg.price}</span>
                    <span className="text-gray-500">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/order?package=${pkg.id}`}
                    className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors text-center block"
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Bookings</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading your bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Bookings Yet</h3>
              <p className="text-gray-600 mb-6">
                You haven't made any bookings yet. Book your first photography session!
              </p>
              <Link
                to="/order"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Book Now
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {booking.customerName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.location}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(booking.eventDate).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.eventTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(booking.status)}
                            <span className="ml-2 text-sm font-medium text-gray-900">
                              {getStatusText(booking.status)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Rs.{booking.totalAmount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
