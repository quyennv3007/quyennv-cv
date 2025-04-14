import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ZoomInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scale?: number;
}

const ZoomIn: React.FC<ZoomInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  scale = 0.8,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : scale,
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn; 