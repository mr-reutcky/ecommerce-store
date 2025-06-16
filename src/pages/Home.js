import HeroBanner from "../components/HeroBanner";  
import AboutSection from "../components/AboutSection";
import ProductGallery from "../components/ProductGallery";

function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <ProductGallery />
    </main>
  );
}

export default Home;