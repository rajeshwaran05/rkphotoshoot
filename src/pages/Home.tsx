import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Star, Users, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('images/pic16.webp?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Capturing Life's
              <span className="text-yellow-400"> Beautiful Moments</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional photography services that transform your special occasions into timeless memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
                >
                  View Dashboard
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
                >
                  Book Your Session
                </Link>
              )}
              <Link
                to="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Camera className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Photos Captured</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Star className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate portraits to grand celebrations, we offer comprehensive photography services 
              tailored to capture your unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('images/wed1.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Wedding Photography</h3>
                <p className="text-gray-600 mb-4">
                  Capture every precious moment of your special day with our expert wedding photography services.
                </p>
                <div className="text-blue-800 font-semibold">Starting at RS.1,500</div>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('images/port1.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Portrait Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Professional portrait photography for individuals, couples, families, and corporate headshots.
                </p>
                <div className="text-blue-800 font-semibold">Starting at Rs.300</div>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('images/cor1.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Event Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive event photography for corporate events, parties, and special celebrations.
                </p>
                <div className="text-blue-800 font-semibold">Starting at RS.800</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Beautiful Memories?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your photography needs and create something amazing together.
          </p>
          {user ? (
            <Link
              to="/order"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 inline-block"
            >
              Book Now
            </Link>
          ) : (
            <Link
              to="/signup"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 inline-block"
            >
              Get Started
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};