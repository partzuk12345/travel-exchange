import { X, MapPin, Utensils, Camera, Hotel, Coffee, Eye, Star, Navigation, Plus } from 'lucide-react';
import { useState } from 'react';
import { LineLogo } from './LineLogo';
import japanMapImage from 'figma:asset/d2fea616d91efafc55b543eaa58cd60990ba6753.png';
import koreaMapImage from 'figma:asset/2bcb1e65bc9773e32b0e34e3daa84d03358ae707.png';

interface MapViewProps {
  onClose: () => void;
  onAddToRoute: (location: Location) => void;
}

interface Location {
  id: number;
  nameKo: string;
  nameJp: string;
  type: 'restaurant' | 'famous' | 'hidden' | 'hotel' | 'cafe';
  rating: number;
  position: { x: number; y: number };
  area: string;
  country: 'japan' | 'korea';
  nearbyPlaces?: Location[];
}

const locations: Location[] = [
  // JAPAN - Shibuya Area
  {
    id: 1,
    nameKo: '시부야 크로싱',
    nameJp: '渋谷スクランブル交差点',
    type: 'famous',
    rating: 4.9,
    position: { x: 35, y: 45 },
    area: 'Shibuya',
    country: 'japan'
  },
  {
    id: 2,
    nameKo: '이치란 라멘',
    nameJp: '一蘭ラーメン',
    type: 'restaurant',
    rating: 4.7,
    position: { x: 38, y: 42 },
    area: 'Shibuya',
    country: 'japan'
  },
  {
    id: 3,
    nameKo: '미야시타 파크',
    nameJp: 'MIYASHITA PARK',
    type: 'hidden',
    rating: 4.5,
    position: { x: 32, y: 48 },
    area: 'Shibuya',
    country: 'japan'
  },
  {
    id: 4,
    nameKo: '블루보틀 시부야',
    nameJp: 'ブルーボトル渋谷',
    type: 'cafe',
    rating: 4.6,
    position: { x: 36, y: 47 },
    area: 'Shibuya',
    country: 'japan'
  },
  // JAPAN - Shinjuku Area
  {
    id: 5,
    nameKo: '신주쿠 교엔',
    nameJp: '新宿御苑',
    type: 'famous',
    rating: 4.8,
    position: { x: 55, y: 35 },
    area: 'Shinjuku',
    country: 'japan'
  },
  {
    id: 6,
    nameKo: '오모이데 요코초',
    nameJp: '思い出横丁',
    type: 'hidden',
    rating: 4.7,
    position: { x: 52, y: 38 },
    area: 'Shinjuku',
    country: 'japan'
  },
  {
    id: 7,
    nameKo: '츠타야 서점',
    nameJp: '蔦屋書店',
    type: 'famous',
    rating: 4.6,
    position: { x: 58, y: 32 },
    area: 'Shinjuku',
    country: 'japan'
  },
  {
    id: 8,
    nameKo: '스시 잔마이',
    nameJp: 'すしざんまい',
    type: 'restaurant',
    rating: 4.8,
    position: { x: 54, y: 40 },
    area: 'Shinjuku',
    country: 'japan'
  },
  // JAPAN - Harajuku Area
  {
    id: 9,
    nameKo: '타케시타 거리',
    nameJp: '竹下通り',
    type: 'famous',
    rating: 4.5,
    position: { x: 25, y: 30 },
    area: 'Harajuku',
    country: 'japan'
  },
  {
    id: 10,
    nameKo: '레인보우 팬케이크',
    nameJp: 'レインボーパンケーキ',
    type: 'restaurant',
    rating: 4.4,
    position: { x: 23, y: 33 },
    area: 'Harajuku',
    country: 'japan'
  },
  {
    id: 11,
    nameKo: '요요기 공원',
    nameJp: '代々木公園',
    type: 'hidden',
    rating: 4.7,
    position: { x: 28, y: 28 },
    area: 'Harajuku',
    country: 'japan'
  },
  // JAPAN - Roppongi Area
  {
    id: 12,
    nameKo: '롯폰기 힐스',
    nameJp: '六本木ヒルズ',
    type: 'famous',
    rating: 4.7,
    position: { x: 45, y: 60 },
    area: 'Roppongi',
    country: 'japan'
  },
  {
    id: 13,
    nameKo: '모리 미술관',
    nameJp: '森美術館',
    type: 'famous',
    rating: 4.8,
    position: { x: 46, y: 63 },
    area: 'Roppongi',
    country: 'japan'
  },
  {
    id: 14,
    nameKo: '로비콘 카페',
    nameJp: 'ロビコンカフェ',
    type: 'cafe',
    rating: 4.5,
    position: { x: 42, y: 58 },
    area: 'Roppongi',
    country: 'japan'
  },
  // JAPAN - Asakusa Area
  {
    id: 15,
    nameKo: '센소지',
    nameJp: '浅草寺',
    type: 'famous',
    rating: 4.9,
    position: { x: 70, y: 50 },
    area: 'Asakusa',
    country: 'japan'
  },
  {
    id: 16,
    nameKo: '나카미세 거리',
    nameJp: '仲見世通り',
    type: 'famous',
    rating: 4.7,
    position: { x: 68, y: 52 },
    area: 'Asakusa',
    country: 'japan'
  },
  {
    id: 17,
    nameKo: '텐푸라 다이코쿠야',
    nameJp: '天ぷら大黒屋',
    type: 'restaurant',
    rating: 4.8,
    position: { x: 72, y: 48 },
    area: 'Asakusa',
    country: 'japan'
  },
  {
    id: 18,
    nameKo: '스카이트리 뷰 카페',
    nameJp: 'スカイツリービューカフェ',
    type: 'cafe',
    rating: 4.6,
    position: { x: 75, y: 52 },
    area: 'Asakusa',
    country: 'japan'
  },
  // KOREA - Myeongdong Area
  {
    id: 101,
    nameKo: '명동 성당',
    nameJp: 'ミョンドン聖堂',
    type: 'famous',
    rating: 4.8,
    position: { x: 45, y: 50 },
    area: '명동',
    country: 'korea'
  },
  {
    id: 102,
    nameKo: '명동교자',
    nameJp: 'ミョンドンギョジャ',
    type: 'restaurant',
    rating: 4.7,
    position: { x: 42, y: 48 },
    area: '명동',
    country: 'korea'
  },
  {
    id: 103,
    nameKo: '명동거리',
    nameJp: 'ミョンドン通り',
    type: 'famous',
    rating: 4.6,
    position: { x: 48, y: 52 },
    area: '명동',
    country: 'korea'
  },
  // KOREA - Gangnam Area
  {
    id: 104,
    nameKo: '코엑스몰',
    nameJp: 'COEXモール',
    type: 'famous',
    rating: 4.5,
    position: { x: 65, y: 45 },
    area: '강남',
    country: 'korea'
  },
  {
    id: 105,
    nameKo: '본죽 강남점',
    nameJp: 'ボンジュク江南店',
    type: 'restaurant',
    rating: 4.4,
    position: { x: 68, y: 42 },
    area: '강남',
    country: 'korea'
  },
  {
    id: 106,
    nameKo: '선릉',
    nameJp: '宣陵',
    type: 'hidden',
    rating: 4.6,
    position: { x: 70, y: 48 },
    area: '강남',
    country: 'korea'
  },
  // KOREA - Hongdae Area
  {
    id: 107,
    nameKo: '홍대 걷고싶은거리',
    nameJp: '弘大歩きたい通り',
    type: 'famous',
    rating: 4.7,
    position: { x: 25, y: 35 },
    area: '홍대',
    country: 'korea'
  },
  {
    id: 108,
    nameKo: '연남동 카페거리',
    nameJp: '延南洞カフェ通り',
    type: 'cafe',
    rating: 4.8,
    position: { x: 22, y: 38 },
    area: '홍대',
    country: 'korea'
  },
  {
    id: 109,
    nameKo: '망원한강공원',
    nameJp: '望遠漢江公園',
    type: 'hidden',
    rating: 4.5,
    position: { x: 28, y: 32 },
    area: '홍대',
    country: 'korea'
  },
  // KOREA - Insadong Area
  {
    id: 110,
    nameKo: '인사동 거리',
    nameJp: '仁寺洞通り',
    type: 'famous',
    rating: 4.6,
    position: { x: 50, y: 25 },
    area: '인사동',
    country: 'korea'
  },
  {
    id: 111,
    nameKo: '쌈지길',
    nameJp: 'サムジギル',
    type: 'famous',
    rating: 4.5,
    position: { x: 52, y: 28 },
    area: '인사동',
    country: 'korea'
  },
  {
    id: 112,
    nameKo: '전통찻집',
    nameJp: '伝統茶屋',
    type: 'cafe',
    rating: 4.7,
    position: { x: 48, y: 22 },
    area: '인사동',
    country: 'korea'
  },
  // KOREA - Itaewon Area
  {
    id: 113,
    nameKo: 'N서울타워',
    nameJp: 'Nソウルタワー',
    type: 'famous',
    rating: 4.8,
    position: { x: 55, y: 60 },
    area: '이태원',
    country: 'korea'
  },
  {
    id: 114,
    nameKo: '이태원 앤틱거리',
    nameJp: '梨泰院アンティーク通り',
    type: 'hidden',
    rating: 4.4,
    position: { x: 52, y: 65 },
    area: '이태원',
    country: 'korea'
  },
  {
    id: 115,
    nameKo: '용산 한강공원',
    nameJp: '龍山漢江公園',
    type: 'hidden',
    rating: 4.6,
    position: { x: 58, y: 68 },
    area: '이태원',
    country: 'korea'
  },
];

// Calculate nearby places based on distance
const calculateNearbyPlaces = (selectedLocation: Location, allLocations: Location[]): Location[] => {
  return allLocations
    .filter(loc => loc.id !== selectedLocation.id && loc.country === selectedLocation.country)
    .map(loc => ({
      ...loc,
      distance: Math.sqrt(
        Math.pow(loc.position.x - selectedLocation.position.x, 2) +
        Math.pow(loc.position.y - selectedLocation.position.y, 2)
      )
    }))
    .filter(loc => (loc as any).distance < 15) // Within proximity
    .sort((a, b) => (a as any).distance - (b as any).distance)
    .slice(0, 4);
};

export function MapView({ onClose, onAddToRoute }: MapViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [filter, setFilter] = useState<'all' | 'restaurant' | 'famous' | 'hidden' | 'cafe'>('all');
  const [routePoints, setRoutePoints] = useState<Location[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<'japan' | 'korea'>('japan');

  const countryLocations = locations.filter(loc => loc.country === selectedCountry);
  const filteredLocations = filter === 'all' 
    ? countryLocations 
    : countryLocations.filter(loc => loc.type === filter);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleAddToRoute = (location: Location) => {
    if (!routePoints.find(p => p.id === location.id)) {
      setRoutePoints([...routePoints, location]);
      onAddToRoute(location);
    }
  };

  const handleCloseDetails = () => {
    setSelectedLocation(null);
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'restaurant': return Utensils;
      case 'famous': return Camera;
      case 'hidden': return Eye;
      case 'cafe': return Coffee;
      case 'hotel': return Hotel;
      default: return MapPin;
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'restaurant': return 'bg-orange-500';
      case 'famous': return 'bg-blue-500';
      case 'hidden': return 'bg-purple-500';
      case 'cafe': return 'bg-green-500';
      case 'hotel': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getAreaLabels = () => {
    if (selectedCountry === 'japan') {
      return [
        { x: '25%', y: '25%', label: 'Harajuku' },
        { x: '35%', y: '40%', label: 'Shibuya' },
        { x: '55%', y: '35%', label: 'Shinjuku' },
        { x: '45%', y: '60%', label: 'Roppongi' },
        { x: '70%', y: '50%', label: 'Asakusa' },
      ];
    } else {
      return [
        { x: '25%', y: '35%', label: '홍대' },
        { x: '45%', y: '50%', label: '명동' },
        { x: '50%', y: '25%', label: '인사동' },
        { x: '55%', y: '60%', label: '이태원' },
        { x: '68%', y: '45%', label: '강남' },
      ];
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-4 pt-safe">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-white">
            <X className="w-6 h-6" />
          </button>
          <LineLogo className="w-8 h-8" />
          <div className="flex-1 text-center">
            <h2 className="text-white text-xl">Travel Map</h2>
            <p className="text-white/80 text-xs">Korea ⇄ Japan</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <Navigation className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Country Selector */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => {
              setSelectedCountry('japan');
              setSelectedLocation(null);
            }}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              selectedCountry === 'japan'
                ? 'bg-white text-blue-600'
                : 'bg-white/20 text-white'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🇯🇵</div>
              <p className="text-sm">Japan / 日本</p>
            </div>
          </button>
          <button
            onClick={() => {
              setSelectedCountry('korea');
              setSelectedLocation(null);
            }}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              selectedCountry === 'korea'
                ? 'bg-white text-blue-600'
                : 'bg-white/20 text-white'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🇰🇷</div>
              <p className="text-sm">Korea / 한국</p>
            </div>
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
              filter === 'all' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'
            }`}
          >
            All Places
          </button>
          <button
            onClick={() => setFilter('restaurant')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
              filter === 'restaurant' ? 'bg-white text-orange-600' : 'bg-white/20 text-white'
            }`}
          >
            <Utensils className="w-4 h-4" />
            Restaurants
          </button>
          <button
            onClick={() => setFilter('famous')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
              filter === 'famous' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'
            }`}
          >
            <Camera className="w-4 h-4" />
            Famous Spots
          </button>
          <button
            onClick={() => setFilter('hidden')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
              filter === 'hidden' ? 'bg-white text-purple-600' : 'bg-white/20 text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            Hidden Gems
          </button>
          <button
            onClick={() => setFilter('cafe')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
              filter === 'cafe' ? 'bg-white text-green-600' : 'bg-white/20 text-white'
            }`}
          >
            <Coffee className="w-4 h-4" />
            Cafes
          </button>
        </div>
      </div>

      {/* Route Counter */}
      {routePoints.length > 0 && (
        <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <span className="text-blue-900 text-sm">
              {routePoints.length} {routePoints.length === 1 ? 'location' : 'locations'} added to route
            </span>
            <button className="text-blue-600 text-sm">View Route</button>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Map Background Image */}
        <div className="absolute inset-0">
          <img 
            src={selectedCountry === 'japan' ? japanMapImage : koreaMapImage}
            alt={selectedCountry === 'japan' ? 'Japan Map' : 'Korea Map'}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for better marker visibility */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Interactive Layer */}
        <div className="absolute inset-0">
          {/* Grid lines overlay (subtle) */}
          <svg className="w-full h-full">
            {/* Route lines */}
            {routePoints.map((point, index) => {
              if (index === routePoints.length - 1) return null;
              const nextPoint = routePoints[index + 1];
              return (
                <line
                  key={`line-${point.id}`}
                  x1={`${point.position.x}%`}
                  y1={`${point.position.y}%`}
                  x2={`${nextPoint.position.x}%`}
                  y2={`${nextPoint.position.y}%`}
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="8,8"
                  opacity="0.8"
                />
              );
            })}
          </svg>

          {/* Location Markers */}
          {filteredLocations.map((location) => {
            const Icon = getMarkerIcon(location.type);
            const isInRoute = routePoints.find(p => p.id === location.id);
            const routeIndex = routePoints.findIndex(p => p.id === location.id);
            
            // Hide markers when one is selected (except the selected one)
            const isHidden = selectedLocation && selectedLocation.id !== location.id;
            
            return (
              <button
                key={location.id}
                onClick={() => handleLocationClick(location)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 z-10 ${
                  isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{
                  left: `${location.position.x}%`,
                  top: `${location.position.y}%`,
                }}
              >
                <div className="relative">
                  <div className={`${getMarkerColor(location.type)} w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${
                    isInRoute ? 'ring-4 ring-blue-400' : ''
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {isInRoute && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs border-2 border-white">
                      {routeIndex + 1}
                    </div>
                  )}
                  {/* Pulse animation for selected */}
                  {selectedLocation?.id === location.id && (
                    <div className={`absolute inset-0 ${getMarkerColor(location.type)} rounded-full animate-ping opacity-75`}></div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Location Details Panel */}
      {selectedLocation && (
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-6">
            {/* Handle bar with close functionality */}
            <button 
              onClick={handleCloseDetails}
              className="w-full flex justify-center mb-6"
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </button>

            {/* Selected Location Info */}
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`${getMarkerColor(selectedLocation.type)} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  {(() => {
                    const Icon = getMarkerIcon(selectedLocation.type);
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {selectedLocation.area}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm">{selectedLocation.rating}</span>
                    </div>
                  </div>
                  {selectedLocation.country === 'japan' ? (
                    <>
                      <h3 className="text-gray-900 text-xl mb-1">{selectedLocation.nameJp}</h3>
                      <p className="text-gray-500">{selectedLocation.nameKo}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-gray-900 text-xl mb-1">{selectedLocation.nameKo}</h3>
                      <p className="text-gray-500">{selectedLocation.nameJp}</p>
                    </>
                  )}
                </div>
                <button 
                  onClick={handleCloseDetails}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <button
                onClick={() => handleAddToRoute(selectedLocation)}
                className={`w-full py-3 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                  routePoints.find(p => p.id === selectedLocation.id)
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {routePoints.find(p => p.id === selectedLocation.id) ? (
                  <>
                    <MapPin className="w-5 h-5" />
                    Added to Route
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Add to Route
                  </>
                )}
              </button>
            </div>

            {/* Nearby Places */}
            <div>
              <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Nearby Places
              </h4>
              <div className="space-y-3">
                {calculateNearbyPlaces(selectedLocation, locations).map((nearby) => {
                  const Icon = getMarkerIcon(nearby.type);
                  return (
                    <button
                      key={nearby.id}
                      onClick={() => handleLocationClick(nearby)}
                      className="w-full bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${getMarkerColor(nearby.type)} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          {nearby.country === 'japan' ? (
                            <>
                              <p className="text-gray-900 text-sm mb-1">{nearby.nameJp}</p>
                              <p className="text-gray-500 text-xs">{nearby.nameKo}</p>
                            </>
                          ) : (
                            <>
                              <p className="text-gray-900 text-sm mb-1">{nearby.nameKo}</p>
                              <p className="text-gray-500 text-xs">{nearby.nameJp}</p>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm text-gray-600">{nearby.rating}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}