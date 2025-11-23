import { ArrowLeft, CreditCard, Zap, Gift, Shield, TrendingUp, CheckCircle, QrCode } from 'lucide-react';
import { LineLogo } from './LineLogo';

interface LinePayIntegrationProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile') => void;
}

const benefits = [
  { icon: Zap, title: 'Instant Payment', description: 'Pay in seconds across Japan & Korea' },
  { icon: Gift, title: 'Reward Points', description: 'Earn 2% back on all travel purchases' },
  { icon: Shield, title: 'Secure & Safe', description: 'Bank-level encryption protection' },
  { icon: TrendingUp, title: 'Best Exchange Rate', description: 'Real-time optimal currency conversion' },
];

const recentTransactions = [
  { id: 1, merchant: 'Tokyo Ramen Street', amount: '¥1,850', points: '+37', date: 'Today' },
  { id: 2, merchant: 'Kyoto Souvenir Shop', amount: '¥5,200', points: '+104', date: 'Yesterday' },
  { id: 3, merchant: 'JR Train Ticket', amount: '¥3,400', points: '+68', date: '2 days ago' },
];

export function LinePayIntegration({ onNavigate }: LinePayIntegrationProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 px-4 py-4 pt-safe">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <LineLogo className="w-8 h-8" />
          <div className="flex-1">
            <h1 className="text-white text-xl">LINE Pay</h1>
            <p className="text-white/80 text-xs">Cross-border payment made easy</p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-white/80 text-xs">Available Balance</p>
              <p className="text-white text-2xl">¥45,830</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white/80 text-xs mb-1">Reward Points</p>
                <p className="text-white text-xl">2,847 pts</p>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-xs mb-1">≈ Value</p>
                <p className="text-white text-xl">¥2,847</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-colors">
            <QrCode className="w-6 h-6 text-white mx-auto mb-2" />
            <p className="text-white text-xs">Scan QR</p>
          </button>
          <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-colors">
            <CreditCard className="w-6 h-6 text-white mx-auto mb-2" />
            <p className="text-white text-xs">Top Up</p>
          </button>
          <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-colors">
            <Gift className="w-6 h-6 text-white mx-auto mb-2" />
            <p className="text-white text-xs">Rewards</p>
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-6 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Why LINE Pay for Travel?</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-gray-900 text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-xs">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-purple-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm">{transaction.merchant}</p>
                    <p className="text-gray-400 text-xs">{transaction.date}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{transaction.amount}</span>
                  <span className="text-purple-600 text-sm">{transaction.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 text-xs">
                Limited Time Offer
              </div>
              <h3 className="text-xl mb-2">Get 5% Extra Points</h3>
              <p className="text-white/80 text-sm mb-4">
                Use LINE Pay at partner restaurants and shops until Dec 31, 2025
              </p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
            <div className="text-5xl">🎁</div>
          </div>
        </div>
      </div>
    </div>
  );
}