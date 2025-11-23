import { ArrowLeft, Search, Plus, MapPin, Utensils, Hotel, Train, Eye, Send } from 'lucide-react';
import { useState } from 'react';
import { LineLogo } from './LineLogo';

interface TravelChatProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile') => void;
}

const topics = [
  { id: 'all', label: 'All', icon: null },
  { id: 'food', label: 'Food', icon: Utensils },
  { id: 'hotel', label: 'Stay', icon: Hotel },
  { id: 'transport', label: 'Transport', icon: Train },
  { id: 'hidden', label: 'Hidden', icon: Eye },
];

const messages = [
  {
    id: 1,
    user: '김민수',
    country: '🇰🇷',
    message: '도쿄 신주쿠에서 꼭 가야 할 라멘 집 추천해주세요!',
    translation: 'Please recommend must-visit ramen shops in Shinjuku, Tokyo!',
    time: '2 min ago',
    topic: 'food',
    replies: 12
  },
  {
    id: 2,
    user: '田中사쿠라',
    country: '🇯🇵',
    message: 'ソウルの明洞でショッピングするなら、どこがおすすめですか？',
    translation: '서울 명동에서 쇼핑하려면 어디가 좋나요?',
    time: '8 min ago',
    topic: 'hidden',
    replies: 8
  },
  {
    id: 3,
    user: '이지은',
    country: '🇰🇷',
    message: '교토 벚꽃 명소 중에 사람 적은 곳 있나요?',
    translation: 'Are there any less crowded cherry blossom spots in Kyoto?',
    time: '15 min ago',
    topic: 'hidden',
    replies: 24
  },
  {
    id: 4,
    user: '山田太郎',
    country: '🇯🇵',
    message: '釜산의 해雲台ビーチ近く의 호텔에서 코스파가 좋은 곳을 알려주세요',
    translation: '부산 해운대 해변 근처 가성비 좋은 호텔 알려주세요',
    time: '23 min ago',
    topic: 'hotel',
    replies: 6
  },
];

export function TravelChat({ onNavigate }: TravelChatProps) {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [message, setMessage] = useState('');

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col pb-20">
      {/* Header */}
      <div className="bg-[#06C755] px-4 py-4 pt-safe">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <LineLogo className="w-8 h-8" />
          <div className="flex-1">
            <h1 className="text-white text-xl">Travel Exchange Chat</h1>
            <p className="text-white/80 text-xs">Auto-translation enabled</p>
          </div>
          <button className="text-white">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Topic Tags */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedTopic === topic.id
                    ? 'bg-white text-[#06C755]'
                    : 'bg-white/20 text-white'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span className="text-sm">{topic.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06C755] to-[#00B900] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{msg.country}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-900">{msg.user}</span>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <p className="text-gray-900 mb-2">{msg.message}</p>
                <div className="bg-white/60 rounded-lg p-2 mb-2">
                  <p className="text-gray-600 text-sm italic">{msg.translation}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-[#06C755]">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span>{msg.replies}</span>
                  </button>
                  <span className="px-2 py-1 bg-white rounded-full text-xs">#{msg.topic}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white mb-16">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-[#06C755]">
            <Plus className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your travel experience..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full outline-none focus:bg-gray-200 transition-colors"
          />
          <button className="p-3 bg-[#06C755] rounded-full text-white hover:bg-[#00B900] transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">
          Messages are automatically translated 🌐
        </p>
      </div>
    </div>
  );
}

function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}