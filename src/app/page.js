import NewProduct from "@/components/NewProducts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderSection from "@/components/headerSection/HeaderSection";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeaderSection />
      <NewProduct />
      <Footer />
    </div>
  );
}
