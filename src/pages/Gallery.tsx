import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'images/wed1.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Wedding Photography',
    category: 'Wedding'
  },
  {
    id: 2,
    src: 'images/port1.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Portrait Photography',
    category: 'Portrait'
  },
  {
    id: 3,
    src: 'images/cor1.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Event Photography',
    category: 'Event'
  },
  {
    id: 4,
    src: 'images/wed2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Wedding Ceremony',
    category: 'Wedding'
  },
  {
    id: 5,
    src: 'images/prot11.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Professional Portrait',
    category: 'Portrait'
  },
  {
    id: 6,
    src: 'images/cor2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Corporate Event',
    category: 'Event'
  },
  {
    id: 7,
    src: 'images/prod2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Portrait',
    category: 'Portrait'
  },
  {
    id: 8,
    src: 'images/wed3.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Wedding Reception',
    category: 'Wedding'
  },
  {
    id: 9,
    src: 'images/prot10.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Family Portrait',
    category: 'Portrait'
  }
];

const categories = ['All', 'Wedding', 'Portrait', 'Event'];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our collection of stunning photographs showcasing our expertise 
            in wedding, portrait, and event photography.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                  <p className="text-sm text-gray-200">{image.category} Photography</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImageData.alt}</h3>
              <p className="text-gray-300">{selectedImageData.category} Photography</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Love What You See?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's create beautiful memories together. Book your photography session today.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
            Book Your Session
          </button>
        </div>
      </section>
    </div>
  );
};