const hotels = [
    {
        "name": "Hotel Annapurna",
        "location": "Kathmandu",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 150,
        "contact": "+977-1-4221711",
        "email": "info@hotelannapurna.com.np",
        "description": "Hotel Annapurna is a luxury hotel in Kathmandu, offering top-notch services and amenities."
    },
    {
        "name": "Shangri-La Hotel",
        "location": "Kathmandu",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 200,
        "contact": "+977-1-4412999",
        "email": "reservations.slm@shangri-la.com",
        "description": "Shangri-La Hotel Kathmandu offers a blend of modern luxury and traditional charm in the heart of Kathmandu."
    },
    {
        "name": "Hotel Yak & Yeti",
        "location": "Nagarkot",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 180,
        "contact": "+977-1-4248999",
        "email": "reservation@yakandyeti.com",
        "description": "Hotel Yak & Yeti is a luxury hotel in Kathmandu, offering a unique blend of modern amenities and traditional Nepali hospitality."
    },
    {
        "name": "Radisson Hotel Kathmandu",
        "location": "Kathmandu",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 160,
        "contact": "+977-1-4411818",
        "email": "reservations.kathmandu@radisson.com",
        "description": "Radisson Hotel Kathmandu offers a luxurious stay with modern amenities and stunning views of the Himalayas."
    },
    {
        "name": "Hotel Everest",
        "location": "Kathmandu",
        "stars": 4,
        "amenities": ["restaurant", "bar"],
        "price_per_night": 100,
        "contact": "+977-1-4223777",
        "email": "info@hoteleverest.com",
        "description": "Hotel Everest is a comfortable hotel in Kathmandu, offering great amenities and services."
    },
    {
        "name": "Hotel Himalaya",
        "location": "Nagarkot",
        "stars": 4,
        "amenities": ["restaurant", "pool"],
        "price_per_night": 120,
        "contact": "+977-1-4273999",
        "email": "info@hotelhimalaya.com.np",
        "description": "Hotel Himalaya is a peaceful retreat in Kathmandu, offering stunning views of the mountains and excellent hospitality."
    },
    {
        "name": "Hotel Vaishali",
        "location": "Kathmandu",
        "stars": 4,
        "amenities": ["restaurant", "bar"],
        "price_per_night": 90,
        "contact": "+977-1-4224636",
        "email": "info@hotelvaishali.com",
        "description": "Hotel Vaishali is a vibrant hotel in Kathmandu, offering comfortable rooms and great dining options."
    },
    {
        "name": "Hotel Manaslu",
        "location": "Lumbini",
        "stars": 4,
        "amenities": ["restaurant", "bar"],
        "price_per_night": 95,
        "contact": "+977-1-4410888",
        "email": "info@hotelmanaslu.com.np",
        "description": "Hotel Manaslu is a classic hotel in Kathmandu, offering a blend of tradition and modernity."
    },
    {
        "name": "Hotel Tibet International",
        "location": "Kathmandu",
        "stars": 4,
        "amenities": ["restaurant", "bar"],
        "price_per_night": 110,
        "contact": "+977-1-4257500",
        "email": "info@hoteltibetintl.com",
        "description": "Hotel Tibet International is a charming hotel in Kathmandu, offering a peaceful stay and excellent service."
    },
    {
        "name": "Hyatt Regency Kathmandu",
        "location": "Kathmandu",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 220,
        "contact": "+977-1-5171234",
        "email": "kathmandu.regency@hyatt.com",
        "description": "Hyatt Regency Kathmandu is a luxury hotel offering a tranquil escape with modern amenities and exceptional service."
    },
    {
        "name": "Hotel Shambala",
        "location": "Chitwan",
        "stars": 4,
        "amenities": ["restaurant", "bar"],
        "price_per_night": 85,
        "contact": "+977-1-4410522",
        "email": "info@hotelshambala.com",
        "description": "Hotel Shambala is a boutique hotel in Kathmandu, offering a peaceful retreat in the heart of the city."
    },
    {
        "name": "The Dwarika's Hotel",
        "location": "Kathmandu",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 250,
        "contact": "+977-1-4470770",
        "email": "info@dwarikas.com",
        "description": "The Dwarika's Hotel is a heritage hotel in Kathmandu, offering an authentic Nepali experience with luxurious accommodations."
    },
    {
        "name": "Gokarna Forest Resort",
        "location": "Dhulikhel",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 180,
        "contact": "+977-1-4451212",
        "email": "info@gokarna.com",
        "description": "Gokarna Forest Resort is a luxury resort in Kathmandu, nestled within the serene Gokarna Forest."
    },
    {
        "name": "Hotel Barahi",
        "location": "Pokhara",
        "stars": 4,
        "amenities": ["restaurant", "pool"],
        "price_per_night": 80,
        "contact": "+977-61-462222",
        "email": "info@hotelbarahi.com",
        "description": "Hotel Barahi is a lakeside retreat in Pokhara, offering stunning views of Phewa Lake and the Annapurna range."
    },
    {
        "name": "Temple Tree Resort & Spa",
        "location": "Pokhara",
        "stars": 4,
        "amenities": ["restaurant", "pool"],
        "price_per_night": 95,
        "contact": "+977-61-465819",
        "email": "info@templetreenepal.com",
        "description": "Temple Tree Resort & Spa is a peaceful retreat in Pokhara, offering a blend of traditional architecture and modern amenities."
    },
    {
        "name": "Shangri-La Village Resort",
        "location": "Dhulikhel",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 210,
        "contact": "+977-61-462222",
        "email": "reservations.slpr@shangri-la.com",
        "description": "Shangri-La Village Resort is a luxurious getaway in Pokhara, offering breathtaking views of the Himalayas and serene surroundings."
    },
    {
        "name": "Fishtail Lodge",
        "location": "Pokhara",
        "stars": 4,
        "amenities": ["restaurant", "pool"],
        "price_per_night": 110,
        "contact": "+977-61-465046",
        "email": "fishtail@wlink.com.np",
        "description": "Fishtail Lodge is a tranquil retreat in Pokhara, offering stunning views of the Machhapuchhre mountain and a peaceful atmosphere."
    },
    {
        "name": "The Fulbari Resort & Spa",
        "location": "Bhairahawa",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 230,
        "contact": "+977-61-465102",
        "email": "info@fulbari.com",
        "description": "The Fulbari Resort & Spa is a luxury resort in Pokhara, offering unparalleled views of the Himalayas and luxurious accommodations."
    },
    {
        "name": "Hotel Fewa Dream",
        "location": "Pokhara",
        "stars": 3,
        "amenities": ["restaurant"],
        "price_per_night": 50,
        "contact": "+977-61-465489",
        "email": "hotelfewadream@gmail.com",
        "description": "Hotel Fewa Dream is a budget-friendly hotel in Pokhara, offering comfortable accommodation and warm hospitality."
    },
    {
        "name": "Hotel Lake Star",
        "location": "Pokhara",
        "stars": 3,
        "amenities": ["restaurant"],
        "price_per_night": 45,
        "contact": "+977-61-464200",
        "email": "hotellakestar@gmail.com",
        "description": "Hotel Lake Star is a budget hotel in Pokhara, offering a convenient location and comfortable rooms."
    },
    {
        "name": "Hotel Landmark",
        "location": "Nagarkot",
        "stars": 3,
        "amenities": ["restaurant"],
        "price_per_night": 55,
        "contact": "+977-61-464924",
        "email": "hotellandmarkpokhara@gmail.com",
        "description": "Hotel Landmark is a budget hotel in Pokhara, offering comfortable accommodation and a convenient location."
    },
    {
        "name": "Tiger Mountain Pokhara Lodge",
        "location": "Pokhara",
        "stars": 4,
        "amenities": ["restaurant", "pool"],
        "price_per_night": 120,
        "contact": "+977-61-466648",
        "email": "tiger@mos.com.np",
        "description": "Tiger Mountain Pokhara Lodge is a peaceful retreat in Pokhara, offering stunning views of the Annapurna range and warm hospitality."
    },
    {
        "name": "Tiger Palace Resort",
        "location": "Bhairahawa",
        "stars": 5,
        "amenities": ["spa", "restaurant", "pool"],
        "price_per_night": 200,
        "contact": "+977-71-521166",
        "email": "info@tigerpalace.com",
        "description": "Tiger Palace Resort is a luxury resort in Bhairahawa, offering a blend of modern amenities and traditional Nepali architecture."
    },
    {
        "name": "Hotel Crystal Palace",
        "location": "Bhairahawa",
        "stars": 3,
        "amenities": ["restaurant"],
        "price_per_night": 40,
        "contact": "+977-71-521120",
        "email": "info@hotelcrystalpalace.com",
        "description": "Hotel Crystal Palace is a budget-friendly hotel in Bhairahawa, offering comfortable accommodation and great value for money."
    }
]

export default hotels;