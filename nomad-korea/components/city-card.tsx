import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { City } from '@/types';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getSafetyLabel = (safety: City['safety']) => {
    const labels = {
      excellent: '우수',
      good: '좋음',
      average: '보통',
      poor: '나쁨',
      very_poor: '매우나쁨',
    };
    return labels[safety];
  };

  const getSafetyColor = (safety: City['safety']) => {
    const colors = {
      excellent: 'text-green-600',
      good: 'text-blue-600',
      average: 'text-yellow-600',
      poor: 'text-orange-600',
      very_poor: 'text-red-600',
    };
    return colors[safety];
  };

  const getAqiEmoji = (status: City['aqiStatus']) => {
    const emojis = {
      excellent: '😍',
      good: '😊',
      moderate: '😐',
      poor: '😟',
      very_poor: '😡',
    };
    return emojis[status];
  };

  const getWeatherEmoji = (weather: City['weatherStatus']) => {
    const emojis = {
      sunny: '☀️',
      cloudy: '☁️',
      rainy: '🌧️',
      snowy: '❄️',
      foggy: '🌫️',
    };
    return emojis[weather];
  };

  return (
    <Link href={`/city/${city.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Ranking badge */}
          {city.rank <= 3 && (
            <div className="absolute top-3 left-3">
              <Badge variant="default" className={`
                ${city.rank === 1 ? 'bg-yellow-500' : ''}
                ${city.rank === 2 ? 'bg-gray-400' : ''}
                ${city.rank === 3 ? 'bg-amber-600' : ''}
              `}>
                #{city.rank}
              </Badge>
            </div>
          )}
          {city.rank > 3 && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary">#{city.rank}</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          {/* City name */}
          <div>
            <h3 className="font-semibold text-lg">{city.name}</h3>
            <p className="text-sm text-muted-foreground">{city.nameEn} · {city.country}</p>
          </div>

          {/* Main metrics */}
          <div className="space-y-2">
            {/* Rating */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                ⭐ 종합점수
              </span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`h-2 w-4 ${
                        star <= Math.floor(city.rating) ? 'bg-yellow-400' : 'bg-gray-200'
                      } ${star === 1 ? 'rounded-l' : ''} ${star === 5 ? 'rounded-r' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{city.rating}</span>
              </div>
            </div>

            {/* Cost of living */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                💵 생활비
              </span>
              <span className="text-sm font-medium">{formatCurrency(city.costOfLiving)}</span>
            </div>

            {/* Internet speed */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                📡 인터넷
              </span>
              <span className="text-sm font-medium">{city.internetSpeed} Mbps</span>
            </div>

            {/* Member recommend */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                👍 추천도
              </span>
              <span className="text-sm font-medium">{city.memberRecommend}%</span>
            </div>

            {/* Safety */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                👮 안전도
              </span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 w-3 ${
                        level <= city.safetyScore ? 'bg-green-500' : 'bg-gray-200'
                      } ${level === 1 ? 'rounded-l' : ''} ${level === 5 ? 'rounded-r' : ''}`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium ${getSafetyColor(city.safety)}`}>
                  {getSafetyLabel(city.safety)}
                </span>
              </div>
            </div>
          </div>

          {/* Real-time info */}
          <div className="pt-2 border-t space-y-2">
            {/* Weather */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                {getWeatherEmoji(city.weatherStatus)} 체감 {city.feelTemp}°C
              </span>
              <span className="text-sm text-muted-foreground">
                실제 {city.currentTemp}°C
              </span>
            </div>

            {/* AQI */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                💨 미세먼지 {city.aqiValue}
              </span>
              <span className="text-sm">
                {getAqiEmoji(city.aqiStatus)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}