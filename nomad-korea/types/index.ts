export interface City {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  image: string;
  rank: number;
  rating: number;
  reviewCount: number;
  costOfLiving: number;
  internetSpeed: number;
  memberRecommend: number;
  safety: 'excellent' | 'good' | 'average' | 'poor' | 'very_poor';
  safetyScore: number;
  currentTemp: number;
  feelTemp: number;
  weatherStatus: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy';
  aqiValue: number;
  aqiStatus: 'excellent' | 'good' | 'moderate' | 'poor' | 'very_poor';
  cafeCount?: number;
  coworkingCount?: number;
  walkability?: number;
  nightlife?: number;
  averageRent?: number;
  mealCost?: number;
  publicTransportCost?: number;
}

export interface FilterOptions {
  search: string;
  sortBy: 'rating' | 'costAsc' | 'costDesc' | 'internetSpeed' | 'reviewCount' | 'safety' | 'popular' | 'recent';
  viewType: 'grid' | 'map' | 'chart';
}

export interface SidebarStats {
  adsEnabled: boolean;
  meetupsCount: number;
  activeTravelersCount: number;
  activeTravelerProfiles: string[];
  newMembersCount: number;
  communityMembers: number;
}