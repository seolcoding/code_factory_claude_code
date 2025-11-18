'use client';

import { useState, useMemo } from 'react';
import { CityCard } from '@/components/city-card';
import { FilterBar } from '@/components/filter-bar';
import { Button } from '@/components/ui/button';
import { cities as allCities } from '@/lib/data';
import { FilterOptions, City } from '@/types';

export function CityGrid() {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    sortBy: 'rating',
    viewType: 'grid',
  });
  const [displayCount, setDisplayCount] = useState(9);

  const filteredAndSortedCities = useMemo(() => {
    let filtered = [...allCities];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        city =>
          city.name.includes(filters.search) ||
          city.nameEn.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    switch (filters.sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'costAsc':
        filtered.sort((a, b) => a.costOfLiving - b.costOfLiving);
        break;
      case 'costDesc':
        filtered.sort((a, b) => b.costOfLiving - a.costOfLiving);
        break;
      case 'internetSpeed':
        filtered.sort((a, b) => b.internetSpeed - a.internetSpeed);
        break;
      case 'reviewCount':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'safety':
        filtered.sort((a, b) => b.safetyScore - a.safetyScore);
        break;
      case 'popular':
        filtered.sort((a, b) => b.memberRecommend - a.memberRecommend);
        break;
      case 'recent':
        // In a real app, we'd sort by creation date
        filtered.reverse();
        break;
    }

    return filtered;
  }, [filters]);

  const displayedCities = filteredAndSortedCities.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const renderContent = () => {
    if (filters.viewType === 'map') {
      return (
        <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">지도 뷰 (준비 중)</p>
        </div>
      );
    }

    if (filters.viewType === 'chart') {
      return (
        <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">차트 뷰 (준비 중)</p>
        </div>
      );
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {displayedCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}

        {displayCount < filteredAndSortedCities.length && (
          <div className="text-center mt-8">
            <Button onClick={handleLoadMore} variant="outline" size="lg">
              더 보기 ↓
            </Button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <FilterBar onFilterChange={setFilters} />
      <div className="py-8">
        {renderContent()}
      </div>
    </>
  );
}