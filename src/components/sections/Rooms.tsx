import { Wifi, Wind, Tv, Car, Coffee, Bath, Users, Maximize, Home, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import suiteRoom from '@/assets/suite-room.jpg';
import familyRoom from '@/assets/family-room.jpg';
import sharedBathroom from '@/assets/shared-bathroom.jpg';
import deluxeRoom from '@/assets/deluxe-room.jpg';

interface Amenity {
  icon: React.ReactNode;
  name: string;
}

interface RoomType {
  id: number;
  name: string;
  image: string;
  description: string;
  acPrice: string;
  nonAcPrice: string;
  capacity: string;
  rooms: string[];
  amenities: Amenity[];
  hasAc: boolean;
  hasPrivateBath: boolean;
}

const roomTypes: RoomType[] = [
  {
    id: 1,
    name: 'Suite Room',
    image: suiteRoom,
    description: 'Premium suite rooms with modern amenities and spacious design. Perfect for comfort and luxury.',
    acPrice: '₹4500',
    nonAcPrice: '₹4000',
    capacity: '2-4 Guests',
    rooms: ['101', '102', '201', '202'],
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Tv size={16} />, name: 'Smart TV' },
      { icon: <Bath size={16} />, name: 'Private Bathroom' },
      { icon: <Coffee size={16} />, name: 'Coffee Maker' },
    ],
    hasAc: true,
    hasPrivateBath: true,
  },
  {
    id: 2,
    name: 'Family Room',
    image: familyRoom,
    description: 'Spacious family accommodation designed for up to 5 members. Comfortable and family-friendly.',
    acPrice: '₹4500',
    nonAcPrice: '₹4000',
    capacity: '5 Guests',
    rooms: ['103'],
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Users size={16} />, name: 'Family Friendly' },
      { icon: <Bath size={16} />, name: 'Private Bathroom' },
      { icon: <Home size={16} />, name: 'Extra Space' },
    ],
    hasAc: true,
    hasPrivateBath: true,
  },
  {
    id: 3,
    name: 'Shared Bathroom',
    image: sharedBathroom,
    description: 'Budget-friendly rooms with shared bathroom facilities. Clean and comfortable option.',
    acPrice: 'N/A',
    nonAcPrice: '₹1500-₹2500',
    capacity: '2 Guests',
    rooms: ['107 (1st Floor)', '205 (2nd Floor)'],
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Building size={16} />, name: 'Shared Bathroom' },
      { icon: <Tv size={16} />, name: 'Basic TV' },
      { icon: <Coffee size={16} />, name: 'Basic Amenities' },
    ],
    hasAc: false,
    hasPrivateBath: false,
  },
  {
    id: 4,
    name: 'Deluxe Room',
    image: deluxeRoom,
    description: 'Comfortable deluxe rooms with private bathroom. Available with or without AC.',
    acPrice: '₹2500',
    nonAcPrice: '₹2000',
    capacity: '2-3 Guests',
    rooms: ['104', '105', '106', '203', '205'],
    amenities: [
      { icon: <Wifi size={16} />, name: 'Free WiFi' },
      { icon: <Wind size={16} />, name: 'Air Conditioning' },
      { icon: <Bath size={16} />, name: 'Private Bathroom' },
      { icon: <Tv size={16} />, name: 'Smart TV' },
    ],
    hasAc: true,
    hasPrivateBath: true,
  },
];

const RoomCard = ({ room }: { room: RoomType }) => {
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
        <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-3 py-2 text-xs font-semibold tracking-wide rounded">
          AC: {room.acPrice}<br />
          Non-AC: {room.nonAcPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground mb-2">{room.name}</h3>
        
        {/* Room Info */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          <span className="flex items-center gap-1">
            <Home size={14} />
            Rooms: {room.rooms.join(', ')}
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
          {roomTypes.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
