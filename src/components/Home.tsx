import { MessageCircle, Map, Ticket, CreditCard, User, Globe, Sparkles, Plane } from 'lucide-react';
import { LineLogo } from './LineLogo';

interface HomeProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile' | 'flights') => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-[#06C755] to-[#00B900] min-h-screen pb-20">
      {/* Header */}
      <div className="pt-16 pb-8 px-6">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <LineLogo className="w-10 h-10" />
            <div>
              <h1 className="text-white text-4xl mb-2">Travel Exchange</h1>
              <p className="text-white/90 text-sm">Korea ⇄ Japan</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('profile')}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
          >
            <User className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white">Connect Travelers</span>
          </div>
          <h2 className="text-white text-2xl mb-2">여행자와 여행자를 연결</h2>
          <p className="text-white/80 text-sm">Share experiences, discover hidden gems, and explore with exclusive benefits</p>
        </div>
      </div>

      {/* Main Features */}
      <div className="bg-white rounded-t-[2rem] px-6 pt-8 pb-8 min-h-[50vh]">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => onNavigate('chat')}
            className="bg-gradient-to-br from-[#06C755] to-[#00B900] rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-1">Travel Chat</h3>
            <p className="text-white/80 text-xs">여행 정보 공유</p>
          </button>

          <button 
            onClick={() => onNavigate('routes')}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-1">Route Builder</h3>
            <p className="text-white/80 text-xs">ルート作成</p>
          </button>

          <button 
            onClick={() => onNavigate('coupons')}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-1">Coupons</h3>
            <p className="text-white/80 text-xs">독점 혜택</p>
          </button>

          <button 
            onClick={() => onNavigate('pay')}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white mb-1">LINE Pay</h3>
            <p className="text-white/80 text-xs">간편 결제</p>
          </button>
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#06C755]" />
            <h3 className="text-gray-900">Exclusive Benefits</h3>
          </div>

          {/* Flight Search Feature */}
          <button 
            onClick={() => onNavigate('flights')}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-5 mb-4 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-white/90 text-xs">✈️ NEW FEATURE</p>
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded">3-5% 수수료</span>
                </div>
                <h4 className="text-white mb-2">Flight Search & Comparison</h4>
                <p className="text-white/80 text-sm">フライト検索・価格比較 | Skyscanner • Kayak • Airlines</p>
              </div>
            </div>
          </button>
          
          <div className="bg-gradient-to-r from-[#06C755]/10 to-blue-500/10 rounded-2xl p-5 border border-[#06C755]/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#06C755] flex items-center justify-center flex-shrink-0">
                <Ticket className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[#06C755] text-xs mb-1">🇯🇵 Partnership Offer</p>
                <h4 className="text-gray-900 mb-2">10% Off at Partner Restaurants</h4>
                <p className="text-gray-600 text-sm">日本の提携レストランで10%割인</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}