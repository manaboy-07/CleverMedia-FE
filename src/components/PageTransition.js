import { motion } from "framer-motion";
import React from "react";

function PageTransition({ children }) {
  const pageVariants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;
