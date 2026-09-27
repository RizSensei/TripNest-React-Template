export interface PropertySummary {
  id: string;
  slug: string;
  title: string;
  propertyName: string;
  location?: {
    town?: string;
    region?: string;
    country?: string;
    coordinates?: { lat: number; lng: number };
  };
  vibeCategory?: string;
  elevationMeters?: number;
  peakVisible?: string;
  orientation?: string;
  skyClarity?: string;
  pricePerNight?: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  image?: string;
  images?: Array<{ id?: string; url: string; alt?: string; sortOrder?: number }>;
  timesOfDay?: Record<string, { timeLabel?: string; imageUrl?: string; description?: string }>;
  host?: {
    name?: string;
    role?: string;
    quote?: string;
    avatarUrl?: string;
  };
  roomHighlights?: string[];
  amenities?: string[];
  roomTypes?: RoomType[];
  addOns?: AddOn[];
  policies?: { houseRules?: string[]; cancellation?: string };
}

export interface RoomType {
  id: string;
  propertyId?: string;
  name: string;
  description?: string;
  capacityAdults?: number;
  capacityChildren?: number;
  maxRooms?: number;
  pricePerNight: number;
  currency?: string;
  highlights?: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description?: string;
  price: number;
  priceType?: string;
  currency?: string;
}

export interface BookingSummary {
  bookingId: string;
  status: string;
  paymentStatus?: string;
  property: PropertySummary;
  checkIn: string;
  checkOut: string;
  room?: string;
  total: number;
  currency: string;
}

export interface PropertyReview {
  id: string;
  userId: string;
  propertyId: string;
  bookingId: string;
  rating: number;
  title: string;
  body: string;
  createdAt: string;
  author?: string;
}
