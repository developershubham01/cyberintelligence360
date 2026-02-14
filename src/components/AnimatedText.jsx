import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className, 
  animationType = 'fadeIn',
  delay = 0,
  duration = 0.5,
  once = true 
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    typewriter: {
      initial: { width: 0 },
      animate: { width: '100%' },
    }
  };

  const selectedAnimation = animations[animationType] || animations.fadeIn;

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isVisible ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;