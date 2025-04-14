import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  tag = 'p',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration / 2,
      },
    },
  };

  const words = text.split(' ').map((word, index) => (
    <span key={index} className="inline-block mr-1.5">
      {word.split('').map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={letter}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  ));

  const Tag = tag;

  return (
    <motion.div
      ref={ref}
      variants={sentence}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {words}
    </motion.div>
  );
};

export default RevealText; 