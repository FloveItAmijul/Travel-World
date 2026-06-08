export type LocationCategory = "india" | "international";

export type LocationTag =
  | "Beach"
  | "Mountains"
  | "Adventure"
  | "Family"
  | "Honeymoon"
  | "Heritage"
  | "Wildlife"
  | "Spiritual"
  | "Luxury"
  | "City"
  | "Nature";

export type LocationCatalogItem = {
  name: string;
  slug: string;
  category: LocationCategory;
  country: string;
  tags: LocationTag[];
  featured?: boolean;
  hasDetailPage?: boolean;
};

export type DestinationImageCard = {
  title: string;
  type?: string;
  description: string;
  image: string;
};

export type DestinationPlaceCard = {
  title: string;
  description: string;
  image: string;
};

export type DestinationGalleryImage = {
  title: string;
  description?: string;
  image: string;
};

export type DestinationItineraryItem = {
  day: string;
  title: string;
  description: string;
};

export type DestinationDetail = {
  slug: string;
  name: string;
  category: LocationCategory;
  country: string;
  tags: LocationTag[];
  tagline: string;
  description: string;
  heroImage: string;
  duration: string;
  bestTime: string;
  idealFor: string;
  rating: string;
  startingFrom: string;
  highlights: string[];
  stays: DestinationImageCard[];
  places: DestinationPlaceCard[];
  selfieSpots: DestinationPlaceCard[];
  galleryImages: DestinationGalleryImage[];
  itinerary: DestinationItineraryItem[];
};

const detailImageModules = import.meta.glob(
  "../assets/destination-details/**/*.{webp,jpg,jpeg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const destinationPreviewModules = import.meta.glob(
  "../assets/destinations/*.{webp,jpg,jpeg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const rawLocationCatalog: LocationCatalogItem[] = [
  // India
  {
    name: "Goa",
    slug: "goa",
    category: "india",
    country: "India",
    tags: ["Beach", "Adventure", "Family", "Honeymoon", "Luxury"],
    featured: true,
  },
  {
    name: "Andaman",
    slug: "andaman",
    category: "india",
    country: "India",
    tags: ["Beach", "Nature", "Honeymoon", "Adventure", "Luxury"],
    featured: true,
  },
  {
    name: "Kashmir",
    slug: "kashmir",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Family", "Honeymoon", "Luxury"],
    featured: true,
  },
  {
    name: "Digha",
    slug: "digha",
    category: "india",
    country: "India",
    tags: ["Beach", "Family"],
    featured: true,
  },
  {
    name: "Manali",
    slug: "manali",
    category: "india",
    country: "India",
    tags: ["Mountains", "Adventure", "Family", "Honeymoon"],
    featured: true,
  },
  {
    name: "Kerala",
    slug: "kerala",
    category: "india",
    country: "India",
    tags: ["Nature", "Family", "Honeymoon", "Luxury"],
    featured: true,
  },
  {
    name: "Ladakh",
    slug: "ladakh",
    category: "india",
    country: "India",
    tags: ["Mountains", "Adventure", "Nature"],
    featured: true,
  },
  {
    name: "Ooty",
    slug: "ooty",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Family", "Honeymoon"],
    featured: true,
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    category: "india",
    country: "India",
    tags: ["Heritage", "Family", "Luxury"],
    featured: true,
  },
  {
    name: "Gangtok",
    slug: "gangtok",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Family"],
    featured: true,
  },
  {
    name: "Shillong",
    slug: "shillong",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Family"],
    featured: true,
  },
  {
    name: "Mussoorie",
    slug: "mussoorie",
    category: "india",
    country: "India",
    tags: ["Mountains", "Family", "Honeymoon"],
  },
  {
    name: "Bandipur",
    slug: "bandipur",
    category: "india",
    country: "India",
    tags: ["Wildlife", "Nature", "Family"],
  },
  {
    name: "Dooars",
    slug: "dooars",
    category: "india",
    country: "India",
    tags: ["Nature", "Wildlife", "Family"],
  },
  {
    name: "Spiti Valley",
    slug: "spiti-valley",
    category: "india",
    country: "India",
    tags: ["Mountains", "Adventure", "Nature"],
  },
  {
    name: "Puri",
    slug: "puri",
    category: "india",
    country: "India",
    tags: ["Beach", "Spiritual", "Family"],
  },
  {
    name: "Hampi",
    slug: "hampi",
    category: "india",
    country: "India",
    tags: ["Heritage", "Adventure", "Family"],
  },
  {
    name: "Amritsar",
    slug: "amritsar",
    category: "india",
    country: "India",
    tags: ["Heritage", "Spiritual", "Family"],
  },
  {
    name: "Tirupati",
    slug: "tirupati",
    category: "india",
    country: "India",
    tags: ["Spiritual", "Family"],
  },
  {
    name: "Arunachal",
    slug: "arunachal",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Adventure"],
  },
  {
    name: "Jim Corbett",
    slug: "jim-corbett",
    category: "india",
    country: "India",
    tags: ["Wildlife", "Nature", "Family"],
  },
  {
    name: "Kanha",
    slug: "kanha",
    category: "india",
    country: "India",
    tags: ["Wildlife", "Nature", "Family"],
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    category: "india",
    country: "India",
    tags: ["Mountains", "Spiritual", "Adventure", "Nature"],
  },
  {
    name: "Delhi",
    slug: "delhi",
    category: "india",
    country: "India",
    tags: ["City", "Heritage", "Family"],
  },
  {
    name: "Lakshadweep",
    slug: "lakshadweep",
    category: "india",
    country: "India",
    tags: ["Beach", "Nature", "Honeymoon", "Luxury"],
    featured: true,
  },

  // International
  {
    name: "Dubai",
    slug: "dubai",
    category: "international",
    country: "UAE",
    tags: ["Luxury", "City", "Family", "Honeymoon", "Adventure"],
    featured: true,
  },
  {
    name: "Singapore",
    slug: "singapore",
    category: "international",
    country: "Singapore",
    tags: ["City", "Family", "Luxury"],
    featured: true,
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    category: "international",
    country: "Malaysia",
    tags: ["Family", "Nature", "City", "Beach"],
    featured: true,
  },
  {
    name: "Maldives",
    slug: "maldives",
    category: "international",
    country: "Maldives",
    tags: ["Beach", "Luxury", "Honeymoon", "Nature"],
    featured: true,
  },
  {
    name: "Thailand",
    slug: "thailand",
    category: "international",
    country: "Thailand",
    tags: ["Beach", "Family", "Adventure", "Luxury"],
    featured: true,
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    category: "international",
    country: "Indonesia",
    tags: ["Beach", "Nature", "Honeymoon", "Adventure"],
    featured: true,
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    category: "international",
    country: "Vietnam",
    tags: ["Nature", "Heritage", "Family", "Adventure"],
    featured: true,
  },
  {
    name: "Japan",
    slug: "japan",
    category: "international",
    country: "Japan",
    tags: ["City", "Heritage", "Family", "Luxury"],
    featured: true,
  },
  {
    name: "Turkey",
    slug: "turkey",
    category: "international",
    country: "Turkey",
    tags: ["Heritage", "City", "Family", "Honeymoon"],
    featured: true,
    hasDetailPage: true,
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    category: "international",
    country: "Switzerland",
    tags: ["Mountains", "Luxury", "Honeymoon", "Family"],
    featured: true,
  },
  {
    name: "Australia",
    slug: "australia",
    category: "international",
    country: "Australia",
    tags: ["Adventure", "Family", "Nature", "City"],
    featured: true,
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    category: "international",
    country: "Sri Lanka",
    tags: ["Beach", "Nature", "Heritage", "Family"],
  },
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    category: "international",
    country: "UAE",
    tags: ["Luxury", "City", "Family"],
  },
  {
    name: "Philippines",
    slug: "philippines",
    category: "international",
    country: "Philippines",
    tags: ["Beach", "Nature", "Adventure"],
  },
  {
    name: "Laos",
    slug: "laos",
    category: "international",
    country: "Laos",
    tags: ["Nature", "Heritage", "Adventure"],
  },
  {
    name: "Oman",
    slug: "oman",
    category: "international",
    country: "Oman",
    tags: ["Luxury", "Nature", "Adventure", "Heritage"],
  },
  {
    name: "Egypt",
    slug: "egypt",
    category: "international",
    country: "Egypt",
    tags: ["Heritage", "Family", "Adventure"],
  },
  {
    name: "Europe",
    slug: "europe",
    category: "international",
    country: "Europe",
    tags: ["Luxury", "Heritage", "Family", "Honeymoon"],
  },
  {
    name: "Venice",
    slug: "venice",
    category: "international",
    country: "Italy",
    tags: ["Heritage", "Honeymoon", "Luxury"],
  },
  {
    name: "Canada",
    slug: "canada",
    category: "international",
    country: "Canada",
    tags: ["Nature", "Mountains", "Family", "Adventure"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    category: "international",
    country: "New Zealand",
    tags: ["Nature", "Adventure", "Honeymoon"],
  },
  {
    name: "USA",
    slug: "usa",
    category: "international",
    country: "USA",
    tags: ["City", "Family", "Adventure", "Luxury"],
  },
  {
    name: "UK",
    slug: "uk",
    category: "international",
    country: "United Kingdom",
    tags: ["City", "Heritage", "Family"],
  },
  {
    name: "Greece",
    slug: "greece",
    category: "international",
    country: "Greece",
    tags: ["Beach", "Heritage", "Honeymoon", "Luxury"],
    featured: true,
  },
];

export const locationCatalog: LocationCatalogItem[] = rawLocationCatalog.map(
  (location) => ({
    ...location,
    hasDetailPage: true,
  })
);

export const destinationDetails: DestinationDetail[] = locationCatalog.map(
  createDestinationDetail
);

export function getDestinationBySlug(slug: string | undefined) {
  if (!slug) return undefined;

  return destinationDetails.find((destination) => destination.slug === slug);
}

export function getLocationCountByFilter(filter: string) {
  if (filter === "All Destinations") {
    return locationCatalog.length;
  }

  if (filter === "India") {
    return locationCatalog.filter((item) => item.category === "india").length;
  }

  if (filter === "International") {
    return locationCatalog.filter((item) => item.category === "international")
      .length;
  }

  return locationCatalog.filter((item) => item.tags.includes(filter as LocationTag))
    .length;
}

function createDestinationDetail(location: LocationCatalogItem): DestinationDetail {
  const heroImage =
    getDetailImage(location.slug, "hero") ||
    getPreviewImage(location.slug) ||
    getFirstAvailableDetailImage(location.slug) ||
    "";

  const stays = createStayCards(location, heroImage);
  const places = createPlaceCards(location, heroImage);
  const selfieSpots = createSelfieSpotCards(location, heroImage);

  const customGallery = getGalleryImages(location.slug);
  const fallbackGallery = createFallbackGallery([
    ...selfieSpots,
    ...places,
    ...stays.map((stay) => ({
      title: stay.title,
      description: stay.description,
      image: stay.image,
    })),
  ]);

  return {
    slug: location.slug,
    name: location.name,
    category: location.category,
    country: location.country,
    tags: location.tags,
    tagline: createTagline(location),
    description: createDescription(location),
    heroImage,
    duration: createDuration(location),
    bestTime: createBestTime(location),
    idealFor: createIdealFor(location),
    rating: "4.8",
    startingFrom: createStartingPrice(location),
    highlights: createHighlights(location),
    stays,
    places,
    selfieSpots,
    galleryImages: customGallery.length > 0 ? customGallery : fallbackGallery,
    itinerary: createItinerary(location),
  };
}

function createStayCards(
  location: LocationCatalogItem,
  fallbackImage: string
): DestinationImageCard[] {
  return [1, 2, 3].map((number) => ({
    title:
      number === 1
        ? "Signature Luxury Stay"
        : number === 2
          ? "Premium Comfort Stay"
          : "Boutique Experience Stay",
    type:
      number === 1
        ? "Luxury Stay"
        : number === 2
          ? "Premium Stay"
          : "Boutique Stay",
    description: createStayDescription(location, number),
    image: getDetailImage(location.slug, `stay-${number}`) || fallbackImage,
  }));
}

function createPlaceCards(
  location: LocationCatalogItem,
  fallbackImage: string
): DestinationPlaceCard[] {
  return [1, 2, 3, 4].map((number) => ({
    title: createPlaceTitle(location, number),
    description: createPlaceDescription(location),
    image: getDetailImage(location.slug, `place-${number}`) || fallbackImage,
  }));
}

function createSelfieSpotCards(
  location: LocationCatalogItem,
  fallbackImage: string
): DestinationPlaceCard[] {
  return [1, 2, 3].map((number) => ({
    title: createSelfieTitle(location, number),
    description: createSelfieDescription(location),
    image: getDetailImage(location.slug, `selfie-${number}`) || fallbackImage,
  }));
}

function getDetailImage(slug: string, imageNameWithoutExtension: string) {
  

  const imageEntry = Object.entries(detailImageModules).find(([path]) => {
    const normalizedPath = normalizePath(path);

    return normalizedPath.includes(
      `/destination-details/${slug}/${imageNameWithoutExtension}.`
    );
  });

  return imageEntry?.[1] as string | undefined;
}

function getFirstAvailableDetailImage(slug: string) {
  

  const imageEntry = Object.entries(detailImageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .find(([path]) => {
      const normalizedPath = normalizePath(path);

      return (
        normalizedPath.includes(`/destination-details/${slug}/`) &&
        !normalizedPath.includes(`/destination-details/${slug}/gallery/`)
      );
    });

  return imageEntry?.[1] as string | undefined;
}

function getGalleryImages(slug: string): DestinationGalleryImage[] {
  

  return Object.entries(detailImageModules)
    .filter(([path]) => {
      const normalizedPath = normalizePath(path);

      return normalizedPath.includes(
        `/destination-details/${slug}/gallery/`
      );
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image], index) => ({
      title: createGalleryTitle(path, index),
      description: "A captured travel memory from this destination.",
      image: image as string,
    }));
}

function getPreviewImage(slug: string) {
  

  const imageEntry = Object.entries(destinationPreviewModules).find(([path]) => {
    const normalizedPath = normalizePath(path);
    const fileName = normalizedPath.split("/").pop()?.split(".")[0];

    return fileName === slug;
  });

  return imageEntry?.[1] as string | undefined;
}



function normalizePath(path: string) {
  return path.replaceAll("\\", "/").toLowerCase();
}

function createGalleryTitle(path: string, index: number) {
  const fileName = path.split("/").pop()?.split(".")[0] ?? `Photo ${index + 1}`;

  const cleanName = fileName
    .replace(/^\d+[-_\s]*/, "")
    .replace(/^gallery[-_\s]*/i, "")
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .trim();

  if (!cleanName || /^\d+$/.test(cleanName)) {
    return `Gallery Photo ${index + 1}`;
  }

  return cleanName.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function createFallbackGallery(
  images: { title: string; description: string; image: string }[]
): DestinationGalleryImage[] {
  const validImages = images.filter((item) => item.image);

  return validImages.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
  }));
}

function createTagline(location: LocationCatalogItem) {
  if (location.tags.includes("Beach")) {
    return `Golden shores, beautiful stays, scenic photo spots, and a relaxed ${location.name} escape.`;
  }

  if (location.tags.includes("Mountains")) {
    return `Mountain views, peaceful stays, scenic roads, and unforgettable moments in ${location.name}.`;
  }

  if (location.tags.includes("Wildlife")) {
    return `Nature, safari moments, forest stays, and wild experiences curated for ${location.name}.`;
  }

  if (location.tags.includes("Heritage")) {
    return `Historic charm, cultural walks, iconic landmarks, and premium stays in ${location.name}.`;
  }

  if (location.tags.includes("City")) {
    return `Modern city energy, premium stays, curated sightseeing, and stylish experiences in ${location.name}.`;
  }

  return `Premium stays, beautiful places, photo-friendly moments, and smooth travel planning for ${location.name}.`;
}

function createDescription(location: LocationCatalogItem) {
  const tagText = location.tags.slice(0, 4).join(", ").toLowerCase();

  return `${location.name} is a curated ${location.category === "india" ? "Indian" : "international"} travel experience designed around ${tagText}, comfortable stays, beautiful sightseeing, memorable photo spots, and smooth travel support.`;
}

function createDuration(location: LocationCatalogItem) {
  if (location.tags.includes("City")) return "3 Nights / 4 Days";
  if (location.tags.includes("Beach")) return "4 Nights / 5 Days";
  if (location.tags.includes("Mountains")) return "5 Nights / 6 Days";
  if (location.tags.includes("Wildlife")) return "3 Nights / 4 Days";

  return "4 Nights / 5 Days";
}

function createBestTime(location: LocationCatalogItem) {
  if (location.tags.includes("Beach")) return "Oct – Mar";
  if (location.tags.includes("Mountains")) return "Mar – Jun";
  if (location.tags.includes("Wildlife")) return "Nov – Apr";
  if (location.tags.includes("Heritage")) return "Oct – Feb";

  return "All Year";
}

function createIdealFor(location: LocationCatalogItem) {
  const idealTypes = location.tags.filter((tag) =>
    ["Family", "Honeymoon", "Adventure", "Luxury"].includes(tag)
  );

  if (idealTypes.length === 0) {
    return "Couples, Families, Friends";
  }

  return idealTypes.slice(0, 3).join(", ");
}

function createStartingPrice(location: LocationCatalogItem) {
  if (location.category === "international") return "Contact for Price";
  if (location.tags.includes("Luxury")) return "₹24,999";
  if (location.tags.includes("Mountains")) return "₹18,999";
  if (location.tags.includes("Beach")) return "₹16,999";

  return "₹14,999";
}

function createHighlights(location: LocationCatalogItem) {
  const highlights = [
    "Handpicked stays",
    "Beautiful sightseeing places",
    "Photo-friendly locations",
    "Smooth itinerary planning",
    "Premium travel support",
  ];

  if (location.tags.includes("Beach")) {
    highlights.unshift("Beachside experiences");
  }

  if (location.tags.includes("Mountains")) {
    highlights.unshift("Scenic mountain views");
  }

  if (location.tags.includes("Wildlife")) {
    highlights.unshift("Nature and safari moments");
  }

  if (location.tags.includes("Heritage")) {
    highlights.unshift("Cultural and heritage walks");
  }

  return [...new Set(highlights)].slice(0, 6);
}

function createStayDescription(location: LocationCatalogItem, index: number) {
  const stayType =
    index === 1 ? "luxury" : index === 2 ? "premium comfort" : "boutique";

  return `A ${stayType} stay in ${location.name} with comfort, beautiful surroundings, and a smooth travel experience.`;
}

function createPlaceTitle(location: LocationCatalogItem, index: number) {
  const placeNamesByTag: Partial<Record<LocationTag, string[]>> = {
    Beach: ["Beach Escape", "Sunset Point", "Coastal Walk", "Water Activity Zone"],
    Mountains: ["Valley View", "Scenic Road", "Mountain Point", "Nature Trail"],
    Wildlife: ["Safari Zone", "Forest Trail", "Nature Watch Point", "Wildlife View"],
    Heritage: ["Heritage Walk", "Iconic Landmark", "Old Town View", "Cultural Point"],
    City: ["City Landmark", "Skyline View", "Shopping District", "Evening Walk"],
    Spiritual: ["Temple Visit", "Sacred Walk", "Prayer Point", "Local Market"],
    Nature: ["Nature View", "Waterfall Point", "Green Trail", "Scenic Spot"],
  };

  const matchingTag = location.tags.find((tag) => placeNamesByTag[tag]);
  const names = matchingTag ? placeNamesByTag[matchingTag] : undefined;

  return names?.[index - 1] ?? `${location.name} Place ${index}`;
}

function createPlaceDescription(location: LocationCatalogItem) {
  return `A beautiful ${location.name} attraction selected for sightseeing, memories, photography, and a premium travel experience.`;
}

function createSelfieTitle(location: LocationCatalogItem, index: number) {
  const titleByIndex = ["Golden Photo Point", "Scenic Selfie Spot", "Memory Viewpoint"];

  return titleByIndex[index - 1] ?? `${location.name} Photo Spot`;
}

function createSelfieDescription(location: LocationCatalogItem) {
  return `A photo-friendly spot in ${location.name} perfect for selfies, reels, couple pictures, and travel memories.`;
}

function createItinerary(location: LocationCatalogItem): DestinationItineraryItem[] {
  return [
    {
      day: "Day 1",
      title: "Arrival & Relaxed Check-in",
      description: `Arrive in ${location.name}, check into your stay, settle in, and enjoy a relaxed evening.`,
    },
    {
      day: "Day 2",
      title: "Sightseeing & Local Experiences",
      description:
        "Explore top attractions, local food, scenic views, and curated experiences.",
    },
    {
      day: "Day 3",
      title: "Photo Spots & Leisure Time",
      description:
        "Visit beautiful photo spots, enjoy free time, and capture memorable moments.",
    },
    {
      day: "Day 4",
      title: "Slow Morning & Departure",
      description:
        "Enjoy a calm breakfast, final shopping or sightseeing, and depart smoothly.",
    },
  ];
}