import HeaderSection from "../components/headerSection/HeaderSection";
import TeamWrapper from "../components/teamWrapper/teamWrapper";
import ExploreBox from "../components/exploreBox/exploreBox";
import ShopEquipmentCards from "../components/shopequipCards/Cards";
import CardSide from "../components/cardSide/CardSide";
import Popular from "../components/Popular/Popular";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function Home({ newProducts }) {
  return (
    <div>
      <HeaderSection />
      <ExploreBox />
      <ShopEquipmentCards />
      <CardSide />
      <TeamWrapper />
      <Popular />
    </div>
  );
}
