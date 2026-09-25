export const properties = [
  {
    id: "view-namche-everest",
    slug: "namche-ridge-lodge",
    title: "The Everest Window",
    propertyName: "Namche Ridge Lodge",
    location: {
      town: "Namche Bazaar",
      region: "Solukhumbu, Khumbu Valley",
      country: "Nepal",
      coordinates: { lat: 27.8069, lng: 86.714 }
    },
    vibeCategory: "Mountain Morning",
    elevationMeters: 3440,
    elevationFormatted: "3,440 m",
    peakVisible: "Ama Dablam & Mt. Everest",
    orientation: "East-Facing Dawn",
    skyClarity: "98% Clear Sky",
    pricePerNight: 140,
    currency: "USD",
    rating: 4.95,
    reviewCount: 48,
    
    // Dynamic lighting views for time toggle
    timesOfDay: {
      sunrise: {
        timeLabel: "6:00 AM Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
        description: "Golden alpine glow illuminating the snowcaps of Ama Dablam while mist fills the Khumbu gorge."
      },
      midday: {
        timeLabel: "12:00 PM Midday",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        description: "Crisp blue skies reveal the full grandeur of the Everest panorama."
      },
      goldenHour: {
        timeLabel: "5:30 PM Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
        description: "Deep orange and violet alpenglow across high-altitude granite peaks."
      }
    },

    host: {
      name: "Pasang & Pemba Sherpa",
      role: "3rd-Generation Mountain Lodge Hosts",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote: "We serve hot seabuckthorn tea right to your bed every sunrise before you step onto the balcony."
    },

    roomHighlights: [
      "Private glass-walled sunrise balcony",
      "Traditional wood-burning Bukhari stove",
      "Heated wool blankets & thermal duvet",
      "Includes Tibetan butter tea & yak cheese breakfast"
    ]
  },

  {
    id: "view-pokhara-annapurna",
    slug: "pokhara-lakefront-resort",
    title: "The Annapurna Balcony",
    propertyName: "Fewa Lakefront Sanctuary",
    location: {
      town: "Pokhara",
      region: "Kaski District, Gandaki",
      country: "Nepal",
      coordinates: { lat: 28.2096, lng: 83.957 }
    },
    vibeCategory: "Lake Reflection",
    elevationMeters: 822,
    elevationFormatted: "822 m",
    peakVisible: "Machapuchare (Fishtail) & Annapurna South",
    orientation: "North-East Water Mirror",
    skyClarity: "94% Lake Mirror Clarity",
    pricePerNight: 185,
    currency: "USD",
    rating: 4.91,
    reviewCount: 62,

    timesOfDay: {
      sunrise: {
        timeLabel: "6:00 AM Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1600&q=80",
        description: "Still waters of Fewa Lake reflecting pink and gold hues onto Machapuchare's iconic double peak."
      },
      midday: {
        timeLabel: "12:00 PM Midday",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        description: "Bright turquoise lake reflections with paragliders floating in the distance."
      },
      goldenHour: {
        timeLabel: "5:30 PM Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        description: "Soft violet mountain shadows stretching over lakefront wooden boats."
      }
    },

    host: {
      name: "Sujata Gurung",
      role: "Eco-Resort Founder & Botanist",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote: "Watch the water mirror turn Machapuchare pink before the lake wakes up with morning rowers."
    },

    roomHighlights: [
      "Edge-to-edge floor window directly above lake level",
      "Private sunrise yoga deck",
      "Artisan pour-over coffee bar in room",
      "Complimentary morning wooden boat excursion"
    ]
  },

  {
    id: "view-mustang-cliffhouse",
    slug: "mustang-cliffside-lodge",
    title: "The Mustang Canyon Cliffhouse",
    propertyName: "Lo Manthang Heritage Lodge",
    location: {
      town: "Upper Mustang",
      region: "Kingdom of Lo, Mustang",
      country: "Nepal",
      coordinates: { lat: 29.1813, lng: 83.9575 }
    },
    vibeCategory: "Cliffside Balcony",
    elevationMeters: 3840,
    elevationFormatted: "3,840 m",
    peakVisible: "Nilgiri North & Dhaulagiri Range",
    orientation: "South-East Desert Ridge",
    skyClarity: "99% High-Desert Atmosphere",
    pricePerNight: 210,
    currency: "USD",
    rating: 4.98,
    reviewCount: 31,

    timesOfDay: {
      sunrise: {
        timeLabel: "6:00 AM Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
        description: "Golden sunlight striking red clay cliff caves and ancient snow peaks in high-altitude desert light."
      },
      midday: {
        timeLabel: "12:00 PM Midday",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
        description: "Stark shadow contrasts across eroded sandstone canyons and chortens."
      },
      goldenHour: {
        timeLabel: "5:30 PM Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=80",
        description: "Ethereal crimson glow across dry canyon walls under crisp Himalayan winds."
      }
    },

    host: {
      name: "Tenzin Bista",
      role: "Mustang Cultural Heritage Conservator",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      quote: "Our cliffside windows overlook 1,000-year-old cave dwellings carved right into the canyon face."
    },

    roomHighlights: [
      "Carved Newari wood window alcove",
      "Floor heating powered by solar thermal arrays",
      "Organic Mustang apple cider on arrival",
      "Private star-gazing telescope on balcony"
    ]
  },

  {
    id: "view-nagarkot-cloudsea",
    slug: "nagarkot-hilltop-sanctuary",
    title: "The Valley Fog & Langtang Ridge",
    propertyName: "Nagarkot Cloud-Sea Manor",
    location: {
      town: "Nagarkot",
      region: "Bhaktapur District, Kathmandu Valley",
      country: "Nepal",
      coordinates: { lat: 27.7172, lng: 85.52 }
    },
    vibeCategory: "Himalayan Light",
    elevationMeters: 2175,
    elevationFormatted: "2,175 m",
    peakVisible: "Langtang Lirung & Ganesh Himal",
    orientation: "East-Facing Sunrise Horizon",
    skyClarity: "96% Cloud Sea Layer",
    pricePerNight: 115,
    currency: "USD",
    rating: 4.89,
    reviewCount: 74,

    timesOfDay: {
      sunrise: {
        timeLabel: "6:00 AM Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        description: "A blanket of white clouds floating over Kathmandu Valley with 300km of snowy peaks rising above."
      },
      midday: {
        timeLabel: "12:00 PM Midday",
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
        description: "Fog clears to reveal terraced rice farms tumbling down into the valley floor."
      },
      goldenHour: {
        timeLabel: "5:30 PM Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
        description: "Soft orange mist painting pine ridges and distant snowcaps."
      }
    },

    host: {
      name: "Rohan & Kalpana Shrestha",
      role: "Third-Generation Teagrowers",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      quote: "You feel like you're floating in a cloud castle before the morning sun melts the valley fog."
    },

    roomHighlights: [
      "Panoramic 180-degree glass bedroom dome",
      "In-room fireplace & artisan pottery cups",
      "Organic orthodox tea fresh from host's garden",
      "Heated balcony daybed"
    ]
  },

  {
    id: "view-chitwan-canopy",
    slug: "chitwan-river-canopy-lodge",
    title: "The Jungle River Mist",
    propertyName: "Rapti River Canopy Retreat",
    location: {
      town: "Sauraha",
      region: "Chitwan National Park",
      country: "Nepal",
      coordinates: { lat: 27.5813, lng: 84.4962 }
    },
    vibeCategory: "Jungle Canopy Mist",
    elevationMeters: 150,
    elevationFormatted: "150 m",
    peakVisible: "Lowland Canopy & Churia Hills",
    orientation: "West-Facing Rapti Bend",
    skyClarity: "92% River Fog & Wild Mist",
    pricePerNight: 160,
    currency: "USD",
    rating: 4.93,
    reviewCount: 39,

    timesOfDay: {
      sunrise: {
        timeLabel: "6:00 AM Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=1600&q=80",
        description: "Dawn river fog rolling off the Rapti River as rhinos and wild kingfishers stir in the morning mist."
      },
      midday: {
        timeLabel: "12:00 PM Midday",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
        description: "Lush green jungle canopy illuminated with tropical sunlight."
      },
      goldenHour: {
        timeLabel: "5:30 PM Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        description: "Warm amber light shimmering over river sandbars as elephants cross downstream."
      }
    },

    host: {
      name: "Bishnu Chaudhary",
      role: "Tharu Wildlife Naturalist & Host",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      quote: "Keep your binoculars on your bedside table — wild rhinos frequently cross the river at dawn."
    },

    roomHighlights: [
      "Elevated bamboo canopy treehouse layout",
      "Binoculars & high-powered spotting scope included",
      "Tharu traditional spiced morning tea service",
      "Guided sunrise canoe trip included with reservation"
    ]
  }
];