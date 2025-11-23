import { Home, MessageCircle, Map, Ticket, User, Plane } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile' | 'flights';
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile' | 'flights') => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home', labelKo: '홈' },
    { id: 'flights' as const, icon: Plane, label: 'Flights', labelKo: 'フライト' },
    { id: 'routes' as const, icon: Map, label: 'Routes', labelKo: 'ルート' },
    { id: 'coupons' as const, icon: Ticket, label: 'Coupons', labelKo: 'クーポン' },
    { id: 'profile' as const, icon: User, label: 'Profile', labelKo: '마이' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom z-50">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center flex-1 py-2 px-1 transition-colors"
              >
                <div className={`mb-1 transition-colors ${
                  isActive ? 'text-[#06C755]' : 'text-gray-400'
                }`}>
                  <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-xs transition-colors ${
                  isActive ? 'text-[#06C755]' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Safe area padding for iOS devices */}
      <div className="h-safe-bottom bg-white"></div>
    </div>
  );
}