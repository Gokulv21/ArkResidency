import { useState } from 'react';
import { X } from 'lucide-react';
import roomDeluxe from '@/assets/deluxe-room.jpg';
import roomSuite from '@/assets/suite-room.jpg';
import galleryLobby from '@/assets/gallery-lobby.jpg';
import galleryPool from '@/assets/gallery-pool.jpg';
import galleryRestaurant from '@/assets/gallery-restaurant.jpg';
import gallerySpa from '@/assets/gallery-spa.jpg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: galleryLobby, alt: 'Hotel Lobby', category: 'Lobby' },
  { id: 2, src: roomDeluxe, alt: 'Deluxe Room', category: 'Rooms' },
  { id: 3, src: galleryPool, alt: 'Swimming Pool', category: 'Facilities' },
  { id: 4, src: galleryRestaurant, alt: 'Restaurant', category: 'Dining' },
  { id: 5, src: roomSuite, alt: 'Executive Suite', category: 'Rooms' },
  { id: 6, src: gallerySpa, alt: 'Spa & Wellness', category: 'Facilities' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Our Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the beauty and elegance of Haven Retreat through 
            our curated collection of images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end justify-start p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold-light text-xs tracking-wider uppercase">
                    {image.category}
                  </span>
                  <h4 className="text-primary-foreground font-serif text-xl mt-1">
                    {image.alt}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg animate-scale-in"
            />
            <div className="text-center mt-4">
              <span className="text-gold-light text-xs tracking-wider uppercase">
                {selectedImage.category}
              </span>
              <h4 className="text-primary-foreground font-serif text-2xl mt-1">
                {selectedImage.alt}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
