import { useState } from 'react';
import { Plane, Search, Calendar, Users, ArrowRightLeft, Bell, Sparkles, ExternalLink, TrendingDown, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface FlightSearchProps {
  onNavigate: (screen: 'home' | 'chat' | 'routes' | 'coupons' | 'pay' | 'profile' | 'flights') => void;
}

interface FlightResult {
  id: string;
  airline: string;
  logo: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
  price: number;
  currency: string;
  partner: 'skyscanner' | 'kayak' | 'airline';
  partnerName: string;
  savings?: number;
  isLowestPrice?: boolean;
  recommended?: boolean;
}

export function FlightSearch({ onNavigate }: FlightSearchProps) {
  const [searchParams, setSearchParams] = useState({
    from: 'Seoul (ICN)',
    to: 'Tokyo (NRT)',
    departDate: '2025-12-15',
    returnDate: '2025-12-22',
    passengers: 1,
  });
  
  const [showResults, setShowResults] = useState(false);
  const [priceAlertEnabled, setPriceAlertEnabled] = useState(false);
  const [expandedResult, setExpandedResult] = useState<string | null>(null);

  // Mock flight results
  const flightResults: FlightResult[] = [
    {
      id: '1',
      airline: 'Korean Air',
      logo: '🇰🇷',
      departure: '09:00',
      arrival: '11:30',
      duration: '2h 30m',
      stops: 0,
      price: 45800,
      currency: '¥',
      partner: 'skyscanner',
      partnerName: 'Skyscanner',
      savings: 5200,
      isLowestPrice: true,
      recommended: true,
    },
    {
      id: '2',
      airline: 'ANA (All Nippon)',
      logo: '🇯🇵',
      departure: '13:45',
      arrival: '16:15',
      duration: '2h 30m',
      stops: 0,
      price: 48500,
      currency: '¥',
      partner: 'kayak',
      partnerName: 'Kayak',
      savings: 2500,
    },
    {
      id: '3',
      airline: 'Japan Airlines',
      logo: '🇯🇵',
      departure: '07:30',
      arrival: '10:00',
      duration: '2h 30m',
      stops: 0,
      price: 52300,
      currency: '¥',
      partner: 'airline',
      partnerName: 'JAL Direct',
    },
    {
      id: '4',
      airline: 'Jeju Air',
      logo: '✈️',
      departure: '11:20',
      arrival: '13:50',
      duration: '2h 30m',
      stops: 0,
      price: 38900,
      currency: '¥',
      partner: 'skyscanner',
      partnerName: 'Skyscanner',
      isLowestPrice: true,
    },
    {
      id: '5',
      airline: 'Asiana Airlines',
      logo: '🇰🇷',
      departure: '15:00',
      arrival: '17:35',
      duration: '2h 35m',
      stops: 0,
      price: 51000,
      currency: '¥',
      partner: 'kayak',
      partnerName: 'Kayak',
    },
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleSwapLocations = () => {
    setSearchParams({
      ...searchParams,
      from: searchParams.to,
      to: searchParams.from,
    });
  };

  const handleBooking = (result: FlightResult) => {
    // Mock redirect to partner
    alert(`Redirecting to ${result.partnerName} for booking...\n\nFlight: ${result.airline}\nPrice: ${result.currency}${result.price.toLocaleString()}\n\nL-Trip earns 3-5% commission on this booking.`);
  };

  const lowestPrice = Math.min(...flightResults.map(f => f.price));
  const recommendedFlight = flightResults.find(f => f.recommended);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#06C755] to-[#00B900] pt-12 pb-8 px-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="text-white/90 hover:text-white"
          >
            ←
          </button>
          <div className="flex items-center gap-2 flex-1">
            <Plane className="w-6 h-6 text-white" />
            <h1 className="text-white text-2xl">Flight Search</h1>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-1">
          <div className="flex gap-1">
            <button className="flex-1 bg-[#06C755] text-white py-2 rounded-xl text-sm">
              フライト検索
            </button>
            <button className="flex-1 text-gray-600 py-2 rounded-xl text-sm">
              항공편 검색
            </button>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="px-4 -mt-4">
        <Card className="p-5 shadow-lg border-none">
          {/* From/To */}
          <div className="space-y-3 mb-4">
            <div className="relative">
              <label className="text-xs text-gray-500 mb-1 block">From / 出発</label>
              <Input
                value={searchParams.from}
                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                className="pl-3 pr-10"
                placeholder="Seoul (ICN)"
              />
            </div>

            <button
              onClick={handleSwapLocations}
              className="absolute right-8 top-[50%] -mt-4 bg-[#06C755] text-white p-2 rounded-full shadow-md z-10"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <div className="relative">
              <label className="text-xs text-gray-500 mb-1 block">To / 到着</label>
              <Input
                value={searchParams.to}
                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                className="pl-3"
                placeholder="Tokyo (NRT)"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Departure
              </label>
              <Input
                type="date"
                value={searchParams.departDate}
                onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                className="text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Return
              </label>
              <Input
                type="date"
                value={searchParams.returnDate}
                onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                className="text-sm"
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="mb-4">
            <label className="text-xs text-gray-500 mb-1 block flex items-center gap-1">
              <Users className="w-3 h-3" />
              Passengers / 乗客数
            </label>
            <select
              value={searchParams.passengers}
              onChange={(e) => setSearchParams({ ...searchParams, passengers: parseInt(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="w-full bg-[#06C755] hover:bg-[#00B900] text-white py-6"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Flights / フライトを検索
          </Button>
        </Card>

        {/* OTA Partners Info */}
        <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-3">Powered by / 提携先</p>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-1">
                <span className="text-white text-xs">Skyscanner</span>
              </div>
              <p className="text-xs text-gray-400">3-5%</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-1">
                <span className="text-white text-xs">KAYAK</span>
              </div>
              <p className="text-xs text-gray-400">3-5%</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-1">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400">Airlines</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">
            L-Trip handles search only • Partners manage booking
          </p>
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="px-4 mt-6 pb-4">
          {/* Price Alert */}
          <Card className="p-4 mb-4 border-[#06C755]/30 bg-gradient-to-r from-[#06C755]/5 to-blue-500/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#06C755] p-2 rounded-lg">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm">Lowest Price Alert</p>
                  <p className="text-xs text-gray-500">最安値アラート</p>
                </div>
              </div>
              <button
                onClick={() => setPriceAlertEnabled(!priceAlertEnabled)}
                className={`px-4 py-2 rounded-lg text-xs transition-colors ${
                  priceAlertEnabled
                    ? 'bg-[#06C755] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {priceAlertEnabled ? 'ON' : 'OFF'}
              </button>
            </div>
            {priceAlertEnabled && (
              <p className="text-xs text-gray-600 mt-3 ml-11">
                We'll notify you when prices drop below ¥{lowestPrice.toLocaleString()}
              </p>
            )}
          </Card>

          {/* Auto Schedule Recommendation */}
          {recommendedFlight && (
            <Card className="p-4 mb-4 border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <p className="text-sm">Auto Schedule Recommendation</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{recommendedFlight.logo}</span>
                    <div>
                      <p className="text-sm">{recommendedFlight.airline}</p>
                      <p className="text-xs text-gray-500">Best value + timing</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500 text-white">推奨</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>{recommendedFlight.departure}</span>
                  <div className="flex-1 mx-3 border-t-2 border-dashed border-gray-300"></div>
                  <span>{recommendedFlight.arrival}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{recommendedFlight.duration} • Direct</span>
                  <span className="text-lg text-[#06C755]">{recommendedFlight.currency}{recommendedFlight.price.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          )}

          {/* Results Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              {flightResults.length} flights found / {flightResults.length}件のフライト
            </p>
            <button className="flex items-center gap-1 text-xs text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
              <TrendingDown className="w-4 h-4" />
              Lowest price
            </button>
          </div>

          {/* Flight Results */}
          <div className="space-y-3">
            {flightResults.map((result) => {
              const isExpanded = expandedResult === result.id;
              
              return (
                <Card key={result.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{result.logo}</span>
                        <div>
                          <p className="text-sm">{result.airline}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {result.partnerName}
                            </Badge>
                            {result.isLowestPrice && (
                              <Badge className="bg-[#06C755] text-white text-xs">
                                <TrendingDown className="w-3 h-3 mr-1" />
                                Lowest
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl text-[#06C755]">{result.currency}{result.price.toLocaleString()}</p>
                        {result.savings && (
                          <p className="text-xs text-green-600">Save ¥{result.savings.toLocaleString()}</p>
                        )}
                      </div>
                    </div>

                    {/* Flight Info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-center">
                        <p className="text-lg">{result.departure}</p>
                        <p className="text-xs text-gray-500">ICN</p>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="relative">
                          <div className="border-t-2 border-gray-300"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2">
                            <Plane className="w-4 h-4 text-gray-400 rotate-90" />
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-1">{result.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">{result.arrival}</p>
                        <p className="text-xs text-gray-500">NRT</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Clock className="w-3 h-3" />
                      {result.stops === 0 ? 'Direct flight / 直行便' : `${result.stops} stop${result.stops > 1 ? 's' : ''}`}
                    </div>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="mb-3 pt-3 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Base Fare</span>
                            <span>{result.currency}{(result.price * 0.75).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Taxes & Fees</span>
                            <span>{result.currency}{(result.price * 0.25).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xs pt-2 border-t border-gray-200">
                            <span>Total</span>
                            <span>{result.currency}{result.price.toLocaleString()}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          ✓ Free cancellation within 24 hours
                        </p>
                        <p className="text-xs text-gray-400">
                          ✓ Earn airline miles
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setExpandedResult(isExpanded ? null : result.id)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm flex items-center justify-center gap-1"
                      >
                        Details
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleBooking(result)}
                        className="flex-1 bg-[#06C755] text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1"
                      >
                        Book Now
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Partner Info */}
                    <p className="text-xs text-gray-400 text-center mt-2">
                      Redirects to {result.partnerName} • L-Trip earns 3-5% commission
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Revenue Model Info */}
          <Card className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="bg-purple-500 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm mb-1">OTA Partnership Revenue Model</p>
                <p className="text-xs text-gray-600 mb-2">
                  L-Trip earns 3-5% commission per booking through our partnerships with Skyscanner, Kayak, and direct airline bookings.
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">✓ Compare prices across platforms</p>
                  <p className="text-xs text-gray-500">✓ Lowest price alerts</p>
                  <p className="text-xs text-gray-500">✓ Auto schedule recommendations</p>
                  <p className="text-xs text-gray-500">✓ Secure external partner booking</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
