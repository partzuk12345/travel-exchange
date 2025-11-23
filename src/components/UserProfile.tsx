import { ArrowLeft, Settings, MapPin, Heart, MessageCircle, Ticket, Award, Globe, ChevronRight, LogOut } from 'lucide-react';
import { LineLogo } from './LineLogo';

interface UserProfileProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile') => void;
}

const stats = [
  { label: 'My Routes', value: '12', icon: MapPin },
  { label: 'Saved', value: '34', icon: Heart },
  { label: 'Reviews', value: '28', icon: MessageCircle },
  { label: 'Coupons', value: '15', icon: Ticket },
];

const menuItems = [
  { id: 'routes', icon: MapPin, label: 'My Routes', sublabel: 'View and manage your routes', color: 'text-blue-600' },
  { id: 'coupons', icon: Ticket, label: 'My Coupons', sublabel: 'Active and saved coupons', color: 'text-orange-600' },
  { id: 'reviews', icon: MessageCircle, label: 'My Reviews', sublabel: 'Your travel feedback', color: 'text-green-600' },
  { id: 'achievements', icon: Award, label: 'Achievements', sublabel: 'Travel milestones & badges', color: 'text-purple-600' },
];

const settings = [
  { id: 'language', icon: Globe, label: 'Language Preferences', value: 'Korean / 日本語' },
  { id: 'notifications', icon: Settings, label: 'Notifications', value: 'Enabled' },
];

export function UserProfile({ onNavigate }: UserProfileProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#06C755] to-[#00B900] px-4 py-4 pt-safe pb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <LineLogo className="w-8 h-8" />
          </div>
          <h1 className="text-white text-xl">My Profile</h1>
          <button className="text-white">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border-4 border-white/30">
            <span className="text-white text-4xl">👤</span>
          </div>
          <h2 className="text-white text-2xl mb-1">장은영</h2>
          <p className="text-white/80 text-sm">Jang Eunyoung</p>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Travel Explorer</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 -mt-12 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-[#06C755]/10 to-[#00B900]/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#06C755]" />
                  </div>
                  <p className="text-gray-900 text-lg mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mb-6">
        <h3 className="text-gray-900 mb-3">My Activities</h3>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="w-full bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#06C755] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-900">{item.label}</p>
                    <p className="text-gray-400 text-xs">{item.sublabel}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 mb-6">
        <h3 className="text-gray-900 mb-3">Settings</h3>
        <div className="space-y-2">
          {settings.map((setting) => {
            const Icon = setting.icon;
            return (
              <button
                key={setting.id}
                className="w-full bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#06C755] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-900">{setting.label}</p>
                    <p className="text-gray-400 text-xs">{setting.value}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 pb-8">
        <button className="w-full bg-gray-50 text-gray-600 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </div>
        </button>
      </div>
    </div>
  );
}