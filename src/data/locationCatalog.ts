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

export const locationCatalog: LocationCatalogItem[] = [
  // India
  {
    name: "Goa",
    slug: "goa",
    category: "india",
    country: "India",
    tags: ["Beach", "Adventure", "Family", "Honeymoon", "Luxury"],
    featured: true,
    hasDetailPage: true,
  },
  {
    name: "Andaman",
    slug: "andaman",
    category: "india",
    country: "India",
    tags: ["Beach", "Nature", "Honeymoon", "Adventure", "Luxury"],
    featured: true,
    hasDetailPage: true,
  },
  {
    name: "Kashmir",
    slug: "kashmir",
    category: "india",
    country: "India",
    tags: ["Mountains", "Nature", "Family", "Honeymoon", "Luxury"],
    featured: true,
    hasDetailPage: true,
  },
  {
    name: "Digha",
    slug: "digha",
    category: "india",
    country: "India",
    tags: ["Beach", "Family"],
    featured: true,
    hasDetailPage: true,
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

  // International
  {
    name: "Dubai",
    slug: "dubai",
    category: "international",
    country: "UAE",
    tags: ["Luxury", "City", "Family", "Honeymoon", "Adventure"],
    featured: true,
    hasDetailPage: true,
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
  name: "Lakshadweep",
  slug: "lakshadweep",
  category: "india",
  country: "India",
  tags: ["Beach", "Nature", "Honeymoon", "Luxury"],
  featured: true,
  hasDetailPage: true,
},


{
  name: "Greece",
  slug: "greece",
  category: "international",
  country: "Greece",
  tags: ["Beach", "Heritage", "Honeymoon", "Luxury"],
  featured: true,
  hasDetailPage: true,
},

];

export function getLocationCountByFilter(filter: string) {
  if (filter === "All Destinations") {
    return locationCatalog.length;
  }

  if (filter === "India") {
    return locationCatalog.filter((item) => item.category === "india").length;
  }

  if (filter === "International") {
    return locationCatalog.filter((item) => item.category === "international").length;
  }

  return locationCatalog.filter((item) => item.tags.includes(filter as LocationTag)).length;
}