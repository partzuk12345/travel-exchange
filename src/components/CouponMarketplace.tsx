import { ArrowLeft, Download, QrCode, MapPin, Clock, Sparkles, Tag, Gift } from 'lucide-react';
import { useState } from 'react';
import { LineLogo } from './LineLogo';

interface CouponMarketplaceProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile') => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food & Dining' },
  { id: 'shop', label: 'Shopping' },
  { id: 'activity', label: 'Activities' },
  { id: 'transport', label: 'Transport' },
];

const coupons = [
  {
    id: 1,
    title: '도쿄 스카이트리 입장권',
    subtitle: 'Tokyo Skytree Admission',
    discount: '15% OFF',
    partner: 'Tokyo Metropolitan',
    location: 'Tokyo, Japan',
    validUntil: '2025-12-31',
    color: 'from-blue-500 to-blue-600',
    emoji: '🗼',
    saved: 234
  },
  {
    id: 2,
    title: '교토 전통 음식점',
    subtitle: 'Kyoto Traditional Restaurant',
    discount: '¥1000 OFF',
    partner: 'Kyoto Tourism Board',
    location: 'Kyoto, Japan',
    validUntil: '2025-11-30',
    color: 'from-orange-500 to-orange-600',
    emoji: '🍱',
    saved: 567
  },
  {
    id: 3,
    title: '하라주쿠 쇼핑 크레딧',
    subtitle: 'Harajuku Shopping Credit',
    discount: '¥2000',
    partner: 'Harajuku District',
    location: 'Tokyo, Japan',
    validUntil: '2025-12-15',
    color: 'from-pink-500 to-pink-600',
    emoji: '🛍️',
    saved: 423
  },
  {
    id: 4,
    title: 'JR Pass Discount',
    subtitle: '일본 철도 패스 할인',
    discount: '10% OFF',
    partner: 'JR East',
    location: 'Japan Nationwide',
    validUntil: '2026-03-31',
    color: 'from-green-500 to-green-600',
    emoji: '🚄',
    saved: 891
  },
];

export function CouponMarketplace({ onNavigate }: CouponMarketplaceProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedCoupons, setSavedCoupons] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedCoupons(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-4 pt-safe">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <LineLogo className="w-8 h-8" />
          <div className="flex-1">
            <h1 className="text-white text-xl">Coupon Marketplace</h1>
            <p className="text-white/80 text-xs">Exclusive partner benefits</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <Gift className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Stats Banner */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs mb-1">Available Coupons</p>
              <p className="text-white text-2xl">47</p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-xs mb-1">Your Savings</p>
              <p className="text-white text-2xl">¥12,450</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm ${
                selectedCategory === cat.id
                  ? 'bg-white text-orange-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Coupons List */}
      <div className="px-4 py-6 space-y-4 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-orange-600" />
          <h2 className="text-gray-900">Featured Offers</h2>
        </div>

        {coupons.map((coupon) => (
          <div 
            key={coupon.id} 
            className="relative bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            {/* Coupon Header */}
            <div className={`bg-gradient-to-br ${coupon.color} p-6 relative`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                    <span className="text-white text-xs">Official Partner</span>
                  </div>
                  <h3 className="text-white text-xl mb-1">{coupon.title}</h3>
                  <p className="text-white/80 text-sm">{coupon.subtitle}</p>
                </div>
                <div className="text-5xl">{coupon.emoji}</div>
              </div>
              
              <div className="bg-white rounded-2xl px-4 py-3 inline-block">
                <p className="text-3xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  {coupon.discount}
                </p>
              </div>
            </div>

            {/* Coupon Details */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
                <Tag className="w-4 h-4" />
                <span>{coupon.partner}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{coupon.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Valid until {coupon.validUntil}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => toggleSave(coupon.id)}
                  className={`flex-1 py-3 rounded-xl transition-all ${
                    savedCoupons.includes(coupon.id)
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">{savedCoupons.includes(coupon.id) ? 'Saved' : 'Save'}</span>
                  </div>
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all">
                  <QrCode className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs text-gray-400">{coupon.saved} travelers saved this</p>
              </div>
            </div>

            {/* Decorative notch */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[180px]">
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-50"></div>
                <div className="w-4 h-4 rounded-full bg-gray-50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}