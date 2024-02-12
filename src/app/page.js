import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderSection from "@/components/headerSection/HeaderSection";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamWrapper from "@/components/teamWrapper/teamWrapper";
import ExploreBox from "@/components/exploreBox/exploreBox";
import ShopEquipmentCards from "@/components/shopequipCards/Cards";
import CardSide from "@/components/cardSide/CardSide";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeaderSection />
      <ExploreBox />
      <ShopEquipmentCards />
      <CardSide />
      <TeamWrapper />
      <Products />
      <Footer />
    </div>
  );
}
