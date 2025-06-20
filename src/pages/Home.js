import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import HeroBanner from "../components/HeroBanner";  
import AboutSection from "../components/AboutSection";
import ProductGallery from "../components/ProductGallery";

function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroBanner />
      <AboutSection />
      <ProductGallery />
    </motion.main>
  );
}

export default Home;
