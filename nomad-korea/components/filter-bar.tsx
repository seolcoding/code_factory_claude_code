'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { FilterOptions } from '@/types';

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    sortBy: 'rating',
    viewType: 'grid',
  });

  const handleSearchChange = (value: string) => {
    const newFilters = { ...filters, search: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value: FilterOptions['sortBy']) => {
    const newFilters = { ...filters, sortBy: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleViewChange = (value: FilterOptions['viewType']) => {
    if (value) {
      const newFilters = { ...filters, viewType: value };
      setFilters(newFilters);
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search */}
          <div className="w-full sm:w-64">
            <Input
              type="search"
              placeholder="🔍 도시 검색 (예: 서울, 부산)"
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Sort */}
          <div className="w-full sm:w-48">
            <Select value={filters.sortBy} onValueChange={handleSortChange}>
              <SelectTrigger>
                <SelectValue placeholder="정렬 기준" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">종합 점수 높은 순</SelectItem>
                <SelectItem value="costAsc">생활비 낮은 순</SelectItem>
                <SelectItem value="costDesc">생활비 높은 순</SelectItem>
                <SelectItem value="internetSpeed">인터넷 속도 빠른 순</SelectItem>
                <SelectItem value="reviewCount">리뷰 많은 순</SelectItem>
                <SelectItem value="safety">안전도 높은 순</SelectItem>
                <SelectItem value="popular">인기 순 (조회수)</SelectItem>
                <SelectItem value="recent">최신 등록 순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1" />

          {/* View Type Toggle */}
          <ToggleGroup
            type="single"
            value={filters.viewType}
            onValueChange={handleViewChange as (value: string) => void}
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="grid" aria-label="Grid view" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2">Grid</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="map" aria-label="Map view" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span className="ml-2">Map</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="chart" aria-label="Chart view" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="ml-2">Chart</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}