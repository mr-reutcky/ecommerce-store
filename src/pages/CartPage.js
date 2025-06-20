import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import ViewCart from "../components/ViewCart";

function CartPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ViewCart />
    </motion.div>
  );
}

export default CartPage;
