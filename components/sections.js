"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Section = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05 // Reduced to 5% visibility to trigger animation earlier
  });
  
  // Optimized animation variants with reduced duration and delay
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20 // Reduced from 50 to 20 for subtler movement
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6 to 0.3
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05 // Reduced from 0.15 to 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -15, // Reduced from -30 to -15
      transition: {
        duration: 0.2, // Reduced from 0.4 to 0.2
        ease: "easeInOut",
        staggerChildren: 0.05 // Reduced from 0.1 to 0.05
      }
    }
  };
  
  return (
    <motion.section
      ref={ref}
      className={`my-8 p-4 flex items-center justify-center relative overflow-hidden md:p-8 ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export const WrapSection = ({ children, className }) => {
  // Optimized animation variants for WrapSection
  const wrapVariants = {
    hidden: {
      opacity: 0,
      scale: 0.99, // Reduced scale change from 0.98 to 0.99
      x: -5 // Reduced from -10 to -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.25, // Reduced from 0.5 to 0.25
        ease: "easeOut",
        delayChildren: 0.03, // Reduced from 0.1 to 0.03
        staggerChildren: 0.05 // Reduced from 0.1 to 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98, // Reduced scale change
      transition: {
        duration: 0.2, // Reduced from 0.3 to 0.2
        ease: "easeIn"
      }
    }
  };
  
  return (
    <motion.div
      className={`w-full max-w-[1024px] ${className}`}
      variants={wrapVariants}
    >
      {children}
    </motion.div>
  );
};

export const Seperator = () => {
  return (
    <motion.div
      className="w-full h-px bg-transparent my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }} // Reduced from 0.3 to 0.2
    />
  );
};