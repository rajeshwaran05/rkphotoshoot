import React from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About PhotoStudio</h1>
              <p className="text-xl text-blue-100 mb-6">
                For over a decade, we've been dedicated to capturing life's most precious moments 
                with artistic vision and technical excellence.
              </p>
              <p className="text-lg text-blue-200">
                Our passion for photography goes beyond just taking pictures – we create timeless 
                memories that tell your unique story.
              </p>
            </div>
            <div className="relative">
              <img
                src="images/photo1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Photographer at work"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To preserve life's beautiful moments through exceptional photography, 
              creating lasting memories that bring joy for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-600">
                We approach every project with genuine enthusiasm and love for the craft of photography.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every shot, ensuring the highest quality results for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connection</h3>
              <p className="text-gray-600">
                We build meaningful relationships with our clients to capture authentic, emotional moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="images/pandi.webp?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Lead Photographer"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pandi Muthueswaran</h3>
                <p className="text-blue-800 font-semibold mb-3">Lead Photographer</p>
                <p className="text-gray-600">
                  With 12 years of experience, pandimuthueswaran specializes in wedding and portrait photography.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="images/gps.webp?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Event Photographer"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Govinda prakash</h3>
                <p className="text-blue-800 font-semibold mb-3">Event Photographer</p>
                <p className="text-gray-600">
                  govinda prakash brings creativity and energy to every event, capturing candid moments beautifully.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="images/sri.webp?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Portrait Specialist"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sriram</h3>
                <p className="text-blue-800 font-semibold mb-3">Portrait Specialist</p>
                <p className="text-gray-600">
                  sriram has a gift for making people feel comfortable, resulting in natural, stunning portraits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Experience</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    10+
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Years of Experience</h3>
                    <p className="text-gray-600">Serving clients with professional photography services since 2013.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    500+
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Happy Clients</h3>
                    <p className="text-gray-600">Trusted by hundreds of clients for their most important moments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    15+
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Awards Won</h3>
                    <p className="text-gray-600">Recognized for excellence in photography and customer service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Award ceremony"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Photography equipment"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Studio setup"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Behind the scenes"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to capture your special moments? Get in touch with us today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@photostudio.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-blue-100">123 Photography St, City, State</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};