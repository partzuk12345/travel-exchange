import { useState } from "react";
import { Home } from "./components/Home";
import { TravelChat } from "./components/TravelChat";
import { RouteBuilder } from "./components/RouteBuilder";
import { CouponMarketplace } from "./components/CouponMarketplace";
import { LinePayIntegration } from "./components/LinePayIntegration";
import { UserProfile } from "./components/UserProfile";
import { FlightSearch } from "./components/FlightSearch";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    | "home"
    | "chat"
    | "routes"
    | "coupons"
    | "pay"
    | "profile"
    | "flights"
  >("home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home onNavigate={setCurrentScreen} />;
      case "chat":
        return <TravelChat onNavigate={setCurrentScreen} />;
      case "routes":
        return <RouteBuilder onNavigate={setCurrentScreen} />;
      case "coupons":
        return (
          <CouponMarketplace onNavigate={setCurrentScreen} />
        );
      case "pay":
        return (
          <LinePayIntegration onNavigate={setCurrentScreen} />
        );
      case "profile":
        return <UserProfile onNavigate={setCurrentScreen} />;
      case "flights":
        return <FlightSearch onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      <BottomNavigation
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />
    </div>
  );
}