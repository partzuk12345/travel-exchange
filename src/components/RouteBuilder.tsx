import { ArrowLeft, Plus, MapPin, Star, Users, Heart, Share2, Clock, Utensils, ShoppingBag, Camera, Sparkles, Map } from 'lucide-react';
import { useState } from 'react';
import { MapView } from './MapView';
import { LineLogo } from './LineLogo';

interface RouteBuilderProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile') => void;
}

const themes = [
  { id: 'gourmet', label: 'Gourmet', icon: Utensils, color: 'from-orange-500 to-orange-600' },
  { id: 'healing', label: 'Healing', icon: Heart, color: 'from-pink-500 to-pink-600' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: 'from-purple-500 to-purple-600' },
  { id: 'photo', label: 'Photo Spots', icon: Camera, color: 'from-blue-500 to-blue-600' },
];

const routes = [
  {
    id: 1,
    title: '도쿄 미식 투어 🍜',
    subtitle: 'Tokyo Gourmet Tour',
    author: '김수호',
    theme: 'gourmet',
    duration: '1 Day',
    stops: 5,
    likes: 234,
    reviews: 48,
    rating: 4.8,
    image: '🗼'
  },
  {
    id: 2,
    title: '京都の癒しスポット 🌸',
    subtitle: '교토 힐링 명소',
    author: '田중사쿠라',
    theme: 'healing',
    duration: '2 Days',
    stops: 7,
    likes: 567,
    reviews: 92,
    rating: 4.9,
    image: '⛩️'
  },
  {
    id: 3,
    title: '명동 쇼핑 완전정복 🛍️',
    subtitle: 'Complete Myeongdong Shopping',
    author: '이민지',
    theme: 'shopping',
    duration: '4 Hours',
    stops: 8,
    likes: 189,
    reviews: 34,
    rating: 4.6,
    image: '🏙️'
  },
];

export function RouteBuilder({ onNavigate }: RouteBuilderProps) {
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [showMap, setShowMap] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<any[]>([]);

  const handleAddToRoute = (location: any) => {
    setSelectedLocations(prev => [...prev, location]);
  };

  if (showMap) {
    return <MapView onClose={() => setShowMap(false)} onAddToRoute={handleAddToRoute} />;
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-4 pt-safe">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <LineLogo className="w-8 h-8" />
          <div className="flex-1">
            <h1 className="text-white text-xl">Route Builder</h1>
            <p className="text-white/80 text-xs">Create & share your journey</p>
          </div>
          <button 
            onClick={() => setShowMap(true)}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
          >
            <Map className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Theme Selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedTheme('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedTheme === 'all'
                ? 'bg-white text-blue-600'
                : 'bg-white/20 text-white'
            }`}
          >
            All Routes
          </button>
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedTheme === theme.id
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{theme.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map View Button Banner */}
      <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <button
          onClick={() => setShowMap(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white mb-1">Interactive Map View</p>
                <p className="text-white/80 text-xs">Discover places & plan your route</p>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 text-white rotate-180" />
          </div>
        </button>
      </div>

      {/* Popular Routes */}
      <div className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h2 className="text-gray-900">Popular Routes</h2>
          </div>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        {routes.map((route) => (
          <div key={route.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            {/* Route Header */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 text-center">
              <div className="text-6xl mb-3">{route.image}</div>
              <h3 className="text-gray-900 mb-1">{route.title}</h3>
              <p className="text-gray-500 text-sm">{route.subtitle}</p>
            </div>

            {/* Route Info */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs">{route.author[0]}</span>
                </div>
                <span className="text-gray-600 text-sm">by {route.author}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-gray-900 text-sm">{route.duration}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-gray-900 text-sm">{route.stops} stops</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                    <Star className="w-4 h-4" />
                  </div>
                  <p className="text-gray-900 text-sm">{route.rating}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {route.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {route.reviews}
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                  <span className="text-sm">View Route</span>
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Route Button */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-10">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Create New Route</span>
        </button>
      </div>
    </div>
  );
}