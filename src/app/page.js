import NewProduct from "@/components/products/NewProducts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderSection from "@/components/headerSection/HeaderSection";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamWrapper from "@/components/teamWrapper/teamWrapper";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeaderSection />
      <TeamWrapper />
      <NewProduct />
      <Footer />
    </div>
  );
}
