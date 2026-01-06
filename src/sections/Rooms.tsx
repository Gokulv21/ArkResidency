import { Wifi, Wind, Tv, Car, Coffee, Bath, Users, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomStandard from '@/assets/room-standard.jpg';

interface Amenity {
  icon: React.ReactNode;
  name: string;
}

interface Room {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  size: string;
  capacity: string;
  amenities: Amenity[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Room',
    image: roomStandard,
    description: 'A cozy retreat perfect for solo travelers or couples seeking comfort and value without compromise.',
    price: '$120',
    size: '28 sqm',
    capacity: '2 Guests',
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Tv size={16} />, name: 'Smart TV' },
      { icon: <Coffee size={16} />, name: 'Coffee Maker' },
    ],
  },
  {
    id: 2,
    name: 'Deluxe Room',
    image: roomDeluxe,
    description: 'Spacious elegance with premium amenities, designed for guests who appreciate the finer details.',
    price: '$180',
    size: '42 sqm',
    capacity: '2 Guests',
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Tv size={16} />, name: 'Smart TV' },
      { icon: <Bath size={16} />, name: 'Bathtub' },
      { icon: <Car size={16} />, name: 'Free Parking' },
    ],
  },
  {
    id: 3,
    name: 'Executive Suite',
    image: roomSuite,
    description: 'Our most luxurious accommodation featuring a separate living area, perfect for extended stays or special occasions.',
    price: '$280',
    size: '65 sqm',
    capacity: '4 Guests',
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Tv size={16} />, name: 'Smart TV' },
      { icon: <Bath size={16} />, name: 'Jacuzzi' },
      { icon: <Car size={16} />, name: 'Free Parking' },
      { icon: <Coffee size={16} />, name: 'Mini Bar' },
    ],
  },
];

const RoomCard = ({ room }: { room: Room }) => {
  const scrollToEnquiry = () => {
    const element = document.querySelector('#enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-4 py-2 text-sm font-semibold tracking-wide">
          {room.price}<span className="font-normal text-xs">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground mb-2">{room.name}</h3>
        
        {/* Room Info */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          <span className="flex items-center gap-1">
            <Maximize size={14} />
            {room.size}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {room.capacity}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
            >
              {amenity.icon}
              {amenity.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="goldOutline"
          className="w-full"
          onClick={scrollToEnquiry}
        >
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Accommodations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Our Rooms & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to provide the perfect balance 
            of comfort and sophistication for your memorable stay.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
