import andamanHero from "../assets/destination-details/andaman/hero.png";
import andamanPlace1 from "../assets/destination-details/andaman/place-1.png";
import andamanPlace2 from "../assets/destination-details/andaman/place-2.png";
import andamanPlace3 from "../assets/destination-details/andaman/place-3.png";
import andamanPlace4 from "../assets/destination-details/andaman/place-4.png";
import andamanSelfie1 from "../assets/destination-details/andaman/selfie-1.png";
import andamanSelfie2 from "../assets/destination-details/andaman/selfie-2.png";
import andamanSelfie3 from "../assets/destination-details/andaman/selfie-3.png";
import andamanSelfie4 from "../assets/destination-details/andaman/selfie-4.png";
import andamanStay1 from "../assets/destination-details/andaman/stay-1.png";
import andamanStay2 from "../assets/destination-details/andaman/stay-2.png";
import andamanStay3 from "../assets/destination-details/andaman/stay-3.png";

import dighaHero from "../assets/destination-details/digha/hero.png";
import dighaPlace1 from "../assets/destination-details/digha/place-1.png";
import dighaPlace2 from "../assets/destination-details/digha/place-2.png";
import dighaPlace3 from "../assets/destination-details/digha/place-3.png";
import dighaPlace4 from "../assets/destination-details/digha/place-4.png";
import dighaSelfie1 from "../assets/destination-details/digha/selfie-1.png";
import dighaSelfie2 from "../assets/destination-details/digha/selfie-2.png";
import dighaSelfie3 from "../assets/destination-details/digha/selfie-3.png";
import dighaSelfie4 from "../assets/destination-details/digha/selfie-4.png";
import dighaStay1 from "../assets/destination-details/digha/stay-1.png";
import dighaStay2 from "../assets/destination-details/digha/stay-2.png";
import dighaStay3 from "../assets/destination-details/digha/stay-3.png";

import dubaiHero from "../assets/destination-details/dubai/hero.png";
import dubaiPlace1 from "../assets/destination-details/dubai/place-1.png";
import dubaiPlace2 from "../assets/destination-details/dubai/place-2.png";
import dubaiPlace3 from "../assets/destination-details/dubai/place-3.png";
import dubaiPlace4 from "../assets/destination-details/dubai/place-4.png";
import dubaiSelfie1 from "../assets/destination-details/dubai/selfie-1.png";
import dubaiSelfie2 from "../assets/destination-details/dubai/selfie-2.png";
import dubaiSelfie3 from "../assets/destination-details/dubai/selfie-3.png";
import dubaiSelfie4 from "../assets/destination-details/dubai/selfie-4.png";
import dubaiStay1 from "../assets/destination-details/dubai/stay-1.png";
import dubaiStay2 from "../assets/destination-details/dubai/stay-2.png";
import dubaiStay3 from "../assets/destination-details/dubai/stay-3.png";

import goaHero from "../assets/destination-details/goa/hero.png";
import goaPlace1 from "../assets/destination-details/goa/place-1.png";
import goaPlace2 from "../assets/destination-details/goa/place-2.png";
import goaPlace3 from "../assets/destination-details/goa/place-3.png";
import goaPlace4 from "../assets/destination-details/goa/place-4.png";
import goaSelfie1 from "../assets/destination-details/goa/selfie-1.png";
import goaSelfie2 from "../assets/destination-details/goa/selfie-2.png";
import goaSelfie3 from "../assets/destination-details/goa/selfie-3.png";
import goaSelfie4 from "../assets/destination-details/goa/selfie-4.png";
import goaStay1 from "../assets/destination-details/goa/stay-1.png";
import goaStay2 from "../assets/destination-details/goa/stay-2.png";
import goaStay3 from "../assets/destination-details/goa/stay-3.png";

import kashmirHero from "../assets/destination-details/kashmir/hero.png";
import kashmirPlace1 from "../assets/destination-details/kashmir/place-1.png";
import kashmirPlace2 from "../assets/destination-details/kashmir/place-2.png";
import kashmirPlace3 from "../assets/destination-details/kashmir/place-3.png";
import kashmirPlace4 from "../assets/destination-details/kashmir/place-4.png";
import kashmirSelfie1 from "../assets/destination-details/kashmir/selfie-1.png";
import kashmirSelfie2 from "../assets/destination-details/kashmir/selfie-2.png";
import kashmirSelfie3 from "../assets/destination-details/kashmir/selfie-3.png";
import kashmirSelfie4 from "../assets/destination-details/kashmir/selfie-4.png";
import kashmirStay1 from "../assets/destination-details/kashmir/stay-1.png";
import kashmirStay2 from "../assets/destination-details/kashmir/stay-2.png";
import kashmirStay3 from "../assets/destination-details/kashmir/stay-3.png";

export type DestinationDetail = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  heroImage: string;
  duration: string;
  bestTime: string;
  idealFor: string;
  rating: string;
  startingFrom: string;
  highlights: string[];
  stays: {
    title: string;
    type: string;
    description: string;
    image: string;
  }[];
  places: {
    title: string;
    description: string;
    image: string;
  }[];
  selfieSpots: {
    title: string;
    description: string;
    image: string;
  }[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
};

export const destinationDetails: DestinationDetail[] = [
  {
    slug: "goa",
    name: "Goa",
    country: "India",
    tagline:
      "Luxury beaches, sunset escapes, heritage streets, and unforgettable coastal moments.",
    description:
      "Goa is a premium coastal escape where golden beaches, boutique stays, local food, nightlife, heritage streets, and scenic viewpoints come together for a relaxed yet memorable journey.",
    heroImage: goaHero,
    duration: "3 Nights / 4 Days",
    bestTime: "Oct – Mar",
    idealFor: "Couples, Friends, Families",
    rating: "4.9",
    startingFrom: "₹18,999",
    highlights: [
      "Beachfront luxury stays",
      "Sunset cruise experiences",
      "Portuguese heritage streets",
      "Waterfalls and scenic viewpoints",
      "Premium cafes and seafood dining",
    ],
    stays: [
      {
        title: "Beachfront Luxury Resort",
        type: "Premium Stay",
        description:
          "Wake up to sea views, private beach access, poolside dining, and calm coastal luxury.",
        image: goaStay1,
      },
      {
        title: "Private Villa Escape",
        type: "Luxury Villa",
        description:
          "A private villa experience with spacious rooms, peaceful ambience, and personalized service.",
        image: goaStay2,
      },
      {
        title: "Boutique Heritage Stay",
        type: "Heritage Comfort",
        description:
          "Stay close to Goa’s cultural charm with boutique interiors and warm local hospitality.",
        image: goaStay3,
      },
    ],
    places: [
      {
        title: "Baga Beach",
        description:
          "A lively beach for water sports, cafes, nightlife, and classic Goa beach energy.",
        image: goaPlace1,
      },
      {
        title: "Fontainhas",
        description:
          "Colorful Portuguese lanes, art corners, cafes, and beautiful heritage photo spots.",
        image: goaPlace2,
      },
      {
        title: "Dudhsagar Falls",
        description:
          "A dramatic waterfall surrounded by greenery, perfect for nature lovers and adventure seekers.",
        image: goaPlace3,
      },
      {
        title: "Chapora Fort",
        description:
          "A scenic sunset viewpoint with panoramic views of the coastline and hills.",
        image: goaPlace4,
      },
    ],
    selfieSpots: [
      {
        title: "Palolem Beach",
        description: "Soft sand, calm water, and postcard-style beach photos.",
        image: goaSelfie1,
      },
      {
        title: "Cabo de Rama Cliff",
        description: "A dramatic viewpoint for cinematic sea and cliff photos.",
        image: goaSelfie2,
      },
      {
        title: "Fontainhas Streets",
        description:
          "Colorful walls, charming lanes, and aesthetic street portraits.",
        image: goaSelfie3,
      },
      {
        title: "Sunset Lighthouse View",
        description: "Golden-hour photos with wide coastal views.",
        image: goaSelfie4,
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival, Beach Check-in & Sunset Dinner",
        description:
          "Arrive in Goa, check into your stay, relax by the beach, and enjoy a curated sunset dinner.",
      },
      {
        day: "Day 2",
        title: "North Goa Beaches, Cafes & Nightlife",
        description:
          "Explore popular beaches, premium cafes, beach clubs, forts, and the energetic nightlife.",
      },
      {
        day: "Day 3",
        title: "South Goa, Cruise & Scenic Escape",
        description:
          "Enjoy calmer beaches, a private cruise experience, scenic viewpoints, and peaceful coastal moments.",
      },
      {
        day: "Day 4",
        title: "Slow Breakfast & Departure",
        description:
          "Enjoy a relaxed breakfast, capture final memories, and depart with a smooth transfer.",
      },
    ],
  },

  {
    slug: "andaman",
    name: "Andaman",
    country: "India",
    tagline:
      "Blue lagoons, private beaches, island stays, coral views, and peaceful tropical luxury.",
    description:
      "Andaman is a serene island escape known for crystal-clear waters, white sand beaches, marine adventures, romantic sunsets, and premium resorts surrounded by nature.",
    heroImage: andamanHero,
    duration: "4 Nights / 5 Days",
    bestTime: "Oct – May",
    idealFor: "Couples, Honeymoon, Families",
    rating: "4.8",
    startingFrom: "₹24,999",
    highlights: [
      "Crystal-clear island beaches",
      "Snorkeling and scuba experiences",
      "Romantic sunset views",
      "Luxury beach resorts",
      "Peaceful tropical surroundings",
    ],
    stays: [
      {
        title: "Island Beach Resort",
        type: "Luxury Beach Stay",
        description:
          "Relax close to turquoise water with elegant rooms, beach access, and calm island ambience.",
        image: andamanStay1,
      },
      {
        title: "Sea View Villa",
        type: "Premium Villa",
        description:
          "Enjoy privacy, sea views, warm hospitality, and quiet romantic moments.",
        image: andamanStay2,
      },
      {
        title: "Tropical Boutique Stay",
        type: "Island Comfort",
        description:
          "A cozy stay surrounded by palms, beaches, and island-style comfort.",
        image: andamanStay3,
      },
    ],
    places: [
      {
        title: "Radhanagar Beach",
        description:
          "One of India’s most beautiful beaches with white sand, turquoise water, and magical sunsets.",
        image: andamanPlace1,
      },
      {
        title: "Cellular Jail",
        description:
          "A historic landmark that tells powerful stories of India’s freedom struggle.",
        image: andamanPlace2,
      },
      {
        title: "Ross Island",
        description:
          "A scenic heritage island with ruins, sea views, deer, and photo-friendly corners.",
        image: andamanPlace3,
      },
      {
        title: "Elephant Beach",
        description:
          "A popular spot for snorkeling, water activities, coral views, and blue-water memories.",
        image: andamanPlace4,
      },
    ],
    selfieSpots: [
      {
        title: "Radhanagar Sunset",
        description: "Golden-hour beach frames with soft sand and glowing skies.",
        image: andamanSelfie1,
      },
      {
        title: "Havelock Jetty",
        description: "Blue water, boats, and perfect island arrival shots.",
        image: andamanSelfie2,
      },
      {
        title: "Coral Beach Point",
        description: "Bright ocean colors and tropical photo backdrops.",
        image: andamanSelfie3,
      },
      {
        title: "Island Viewpoint",
        description: "Wide scenic frames with sea, palms, and sky.",
        image: andamanSelfie4,
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Beachside Relaxation",
        description:
          "Reach Port Blair or Havelock, check into your stay, and enjoy a peaceful beach evening.",
      },
      {
        day: "Day 2",
        title: "Radhanagar Beach & Sunset",
        description:
          "Spend the day around Radhanagar Beach, swim, relax, and enjoy a beautiful sunset.",
      },
      {
        day: "Day 3",
        title: "Snorkeling & Island Adventure",
        description:
          "Visit Elephant Beach for snorkeling, water activities, and coral experiences.",
      },
      {
        day: "Day 4",
        title: "Heritage & Island Views",
        description:
          "Explore Cellular Jail, Ross Island, and enjoy scenic viewpoints and local food.",
      },
      {
        day: "Day 5",
        title: "Slow Morning & Departure",
        description:
          "Enjoy a calm breakfast, capture final island memories, and depart smoothly.",
      },
    ],
  },

  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    tagline:
      "Iconic skylines, desert luxury, shopping, nightlife, and world-class city experiences.",
    description:
      "Dubai blends futuristic architecture, premium hotels, desert adventures, luxury shopping, beach clubs, and global entertainment into one high-end travel experience.",
    heroImage: dubaiHero,
    duration: "4 Nights / 5 Days",
    bestTime: "Nov – Mar",
    idealFor: "Couples, Families, Luxury Travel",
    rating: "4.9",
    startingFrom: "₹39,999",
    highlights: [
      "Burj Khalifa and skyline views",
      "Luxury hotels and resorts",
      "Desert safari with dinner",
      "Premium shopping experiences",
      "Marina nightlife and cruises",
    ],
    stays: [
      {
        title: "Luxury Skyline Hotel",
        type: "City Luxury",
        description:
          "Stay near Dubai’s iconic landmarks with skyline views and premium hospitality.",
        image: dubaiStay1,
      },
      {
        title: "Desert Resort Escape",
        type: "Luxury Desert Stay",
        description:
          "Experience Arabian desert charm, private dinners, and peaceful golden landscapes.",
        image: dubaiStay2,
      },
      {
        title: "Marina View Hotel",
        type: "Premium Marina Stay",
        description:
          "Enjoy waterfront views, dining, nightlife, and easy access to Dubai Marina.",
        image: dubaiStay3,
      },
    ],
    places: [
      {
        title: "Burj Khalifa",
        description:
          "Dubai’s iconic tower with breathtaking observation deck views and city skyline moments.",
        image: dubaiPlace1,
      },
      {
        title: "Desert Safari",
        description:
          "Dune drives, sunset photos, cultural shows, and Arabian dinner experiences.",
        image: dubaiPlace2,
      },
      {
        title: "Dubai Marina",
        description:
          "A stylish waterfront area with cruises, cafes, restaurants, and night views.",
        image: dubaiPlace3,
      },
      {
        title: "Palm Jumeirah",
        description:
          "Luxury resorts, beach clubs, viewpoints, and one of Dubai’s most famous landmarks.",
        image: dubaiPlace4,
      },
    ],
    selfieSpots: [
      {
        title: "Burj Khalifa View",
        description: "Iconic skyline photos with Dubai’s tallest landmark.",
        image: dubaiSelfie1,
      },
      {
        title: "Desert Dunes",
        description: "Golden dune portraits during sunset and safari moments.",
        image: dubaiSelfie2,
      },
      {
        title: "Marina Night View",
        description: "Sparkling city lights and waterfront travel photos.",
        image: dubaiSelfie3,
      },
      {
        title: "Palm Viewpoint",
        description: "Luxury landmark views and premium Dubai memories.",
        image: dubaiSelfie4,
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival, Marina Evening & Dinner",
        description:
          "Arrive in Dubai, check into your hotel, and enjoy a relaxed evening at Dubai Marina.",
      },
      {
        day: "Day 2",
        title: "Burj Khalifa, Mall & Fountain Show",
        description:
          "Explore Downtown Dubai, visit Burj Khalifa, shop, and enjoy the evening fountain show.",
      },
      {
        day: "Day 3",
        title: "Desert Safari & Arabian Dinner",
        description:
          "Experience dune bashing, desert sunset photos, cultural performances, and dinner.",
      },
      {
        day: "Day 4",
        title: "Palm Jumeirah & Luxury Beach Time",
        description:
          "Visit Palm Jumeirah, beach clubs, premium cafes, and enjoy a stylish Dubai evening.",
      },
      {
        day: "Day 5",
        title: "Shopping & Departure",
        description:
          "Enjoy last-minute shopping and depart with smooth airport transfer support.",
      },
    ],
  },

  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    tagline:
      "Snow peaks, valleys, houseboats, gardens, pine forests, and timeless Himalayan beauty.",
    description:
      "Kashmir is a breathtaking mountain escape filled with Dal Lake views, snow adventures, romantic stays, scenic valleys, gardens, and peaceful Himalayan moments.",
    heroImage: kashmirHero,
    duration: "4 Nights / 5 Days",
    bestTime: "Mar – Aug / Dec – Feb",
    idealFor: "Couples, Families, Nature Lovers",
    rating: "4.8",
    startingFrom: "₹18,999",
    highlights: [
      "Dal Lake shikara rides",
      "Houseboat and mountain stays",
      "Snow activities in Gulmarg",
      "Scenic valleys and gardens",
      "Romantic Himalayan views",
    ],
    stays: [
      {
        title: "Luxury Houseboat",
        type: "Lake Stay",
        description:
          "Stay on Dal Lake with traditional charm, warm hospitality, and mountain views.",
        image: kashmirStay1,
      },
      {
        title: "Mountain Resort",
        type: "Premium Resort",
        description:
          "Relax in a scenic resort surrounded by pine forests, valleys, and fresh mountain air.",
        image: kashmirStay2,
      },
      {
        title: "Wooden Cottage",
        type: "Cozy Retreat",
        description:
          "A warm and peaceful cottage stay for couples, families, and nature lovers.",
        image: kashmirStay3,
      },
    ],
    places: [
      {
        title: "Dal Lake",
        description:
          "A peaceful lake experience with shikara rides, houseboats, and mountain reflections.",
        image: kashmirPlace1,
      },
      {
        title: "Gulmarg",
        description:
          "Snow landscapes, gondola rides, skiing, and beautiful mountain adventure moments.",
        image: kashmirPlace2,
      },
      {
        title: "Pahalgam",
        description:
          "A scenic valley with rivers, pine forests, meadows, and calming natural beauty.",
        image: kashmirPlace3,
      },
      {
        title: "Sonmarg",
        description:
          "Golden meadows, glaciers, high mountains, and dramatic Himalayan landscapes.",
        image: kashmirPlace4,
      },
    ],
    selfieSpots: [
      {
        title: "Shikara Ride",
        description: "Classic Kashmir photos on Dal Lake with mountain views.",
        image: kashmirSelfie1,
      },
      {
        title: "Snow Viewpoint",
        description: "White landscapes and cinematic winter portraits.",
        image: kashmirSelfie2,
      },
      {
        title: "Valley View",
        description: "Wide green valley frames and peaceful travel photos.",
        image: kashmirSelfie3,
      },
      {
        title: "Mughal Garden",
        description: "Flowers, fountains, mountains, and elegant photo corners.",
        image: kashmirSelfie4,
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival, Dal Lake & Houseboat",
        description:
          "Reach Srinagar, check into your stay, enjoy a shikara ride, and relax by the lake.",
      },
      {
        day: "Day 2",
        title: "Srinagar Gardens & Local Charm",
        description:
          "Explore Mughal gardens, local markets, cafes, and beautiful city viewpoints.",
      },
      {
        day: "Day 3",
        title: "Gulmarg Snow & Gondola",
        description:
          "Enjoy snow views, gondola rides, adventure activities, and mountain landscapes.",
      },
      {
        day: "Day 4",
        title: "Pahalgam Valley Escape",
        description:
          "Visit rivers, valleys, meadows, and enjoy a peaceful nature-focused day.",
      },
      {
        day: "Day 5",
        title: "Breakfast & Departure",
        description:
          "Enjoy a slow breakfast, final photos, and depart with beautiful memories.",
      },
    ],
  },

  {
    slug: "digha",
    name: "Digha",
    country: "India",
    tagline:
      "A peaceful seaside escape with sunrise views, family moments, beaches, and easy coastal comfort.",
    description:
      "Digha is a relaxing beach destination for families, couples, and weekend travelers who want sea views, calm walks, local food, beach markets, and simple coastal memories.",
    heroImage: dighaHero,
    duration: "2 Nights / 3 Days",
    bestTime: "Oct – Feb",
    idealFor: "Families, Couples, Weekend Trips",
    rating: "4.6",
    startingFrom: "₹8,999",
    highlights: [
      "Easy weekend beach escape",
      "Sunrise and sea-view stays",
      "Family-friendly attractions",
      "Beach markets and seafood",
      "Nearby quiet beaches",
    ],
    stays: [
      {
        title: "Sea View Hotel",
        type: "Beach Stay",
        description:
          "Stay close to the sea with comfortable rooms and relaxing ocean views.",
        image: dighaStay1,
      },
      {
        title: "Family Beach Resort",
        type: "Family Comfort",
        description:
          "A comfortable stay option with family-friendly facilities and beach access.",
        image: dighaStay2,
      },
      {
        title: "Premium Coastal Stay",
        type: "Weekend Comfort",
        description:
          "A peaceful stay for short trips, couples, and relaxed weekend breaks.",
        image: dighaStay3,
      },
    ],
    places: [
      {
        title: "New Digha Beach",
        description:
          "A popular beach area for sea walks, family time, local food, and sunrise moments.",
        image: dighaPlace1,
      },
      {
        title: "Marine Aquarium",
        description:
          "An educational and family-friendly stop to explore marine life and local biodiversity.",
        image: dighaPlace2,
      },
      {
        title: "Udaipur Beach",
        description:
          "A quieter beach nearby with scenic views, peaceful ambience, and local activities.",
        image: dighaPlace3,
      },
      {
        title: "Shankarpur Beach",
        description:
          "A calm coastal spot with fishing boats, sea views, and relaxed photography points.",
        image: dighaPlace4,
      },
    ],
    selfieSpots: [
      {
        title: "Beach Sunrise",
        description: "Soft morning light and beautiful sea-view photos.",
        image: dighaSelfie1,
      },
      {
        title: "Sea Wall Walk",
        description: "Classic Digha sea frames and casual travel portraits.",
        image: dighaSelfie2,
      },
      {
        title: "Casuarina Coast",
        description: "Green coastal trees and peaceful photo backdrops.",
        image: dighaSelfie3,
      },
      {
        title: "Beach Market",
        description: "Colorful local scenes and lively travel memories.",
        image: dighaSelfie4,
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival, Beach Walk & Local Food",
        description:
          "Reach Digha, check into your stay, enjoy an evening beach walk, and try local food.",
      },
      {
        day: "Day 2",
        title: "Beaches, Aquarium & Sunset",
        description:
          "Visit New Digha Beach, Marine Aquarium, nearby beaches, and enjoy sunset views.",
      },
      {
        day: "Day 3",
        title: "Sunrise, Shopping & Departure",
        description:
          "Wake up early for sunrise, explore beach markets, and depart after breakfast.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string | undefined) {
  return destinationDetails.find((destination) => destination.slug === slug);
}