import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CategoryGrid from "./components/CategoryGrid";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ProductList />
      <CategoryGrid />
      <StoreSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;