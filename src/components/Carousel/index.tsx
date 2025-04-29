import { useEffect, useState, useRef, useCallback, memo, useMemo } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";
import ProjectCardComponent from "./ProjectCardComponent";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  image?: any;
  technologies?: any[];
  github?: string;
  liveDemo?: string;
  icon?: React.ReactNode[];
}

export interface CarouselProps {
  items?: CarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = []

// Constants
const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 20 };
const MAX_ROTATION = 10;
const DRAG_ELASTIC = 0.2;

// Responsive breakpoints
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

// Project Card Component



// Indicator component
const CarouselIndicator = memo(({
  index,
  currentIndex,
  setCurrentIndex,
  screenSize,
}: {
  index: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  screenSize: string;
}) => (
  <motion.div
    className={`${screenSize === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2'} rounded-full cursor-pointer transition-colors duration-150 ${
      currentIndex === index ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
    }`}
    animate={{
      scale: currentIndex === index ? 1.2 : 1,
    }}
    onClick={() => setCurrentIndex(index)}
    transition={{ duration: 0.15 }}
  />
));

CarouselIndicator.displayName = 'CarouselIndicator';

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
}: CarouselProps): JSX.Element {
  // Responsive state
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<string>('lg');

  // Interaction state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragProgress, setDragProgress] = useState<number>(0);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  // Handle window resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width < BREAKPOINTS.sm) {
        setScreenSize('xs');
      } else if (width < BREAKPOINTS.md) {
        setScreenSize('sm');
      } else if (width < BREAKPOINTS.lg) {
        setScreenSize('md');
      } else if (width < BREAKPOINTS.xl) {
        setScreenSize('lg');
      } else if (width < BREAKPOINTS.xxl) {
        setScreenSize('xl');
      } else {
        setScreenSize('xxl');
      }

      // Update container width
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial calculation

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate dimensions based on screen size
  const { cardsPerView, gapValue, containerPadding, itemWidth, trackItemOffset } = useMemo(() => {
    // Always show 2 cards on laptop/desktop, 1 card on mobile
    let cardsPerView = screenSize === 'xs' || screenSize === 'sm' ? 1 : 2;
    let gapFactor = screenSize === 'xs' || screenSize === 'sm' ? 0.7 : 1;
    let paddingFactor = screenSize === 'xs' || screenSize === 'sm' ? 0.6 : 0.8;

    // Calculate values
    const gapValue = Math.round(GAP * gapFactor);
    const containerPadding = Math.round(24 * paddingFactor);

    // Calculate item width
    const availableWidth = containerWidth > 0
      ? containerWidth - (containerPadding * 2)
      : windowWidth - (containerPadding * 2);

    const totalGapWidth = gapValue * (cardsPerView - 1);
    const itemWidth = (availableWidth - totalGapWidth) / cardsPerView;
    const trackItemOffset = itemWidth + gapValue;

    return {
      cardsPerView,
      gapValue,
      containerPadding,
      itemWidth,
      trackItemOffset
    };
  }, [containerWidth, windowWidth, screenSize]);

  // Handle hover events
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // Don't loop back to the start
        return Math.min(prev + 1, items.length - cardsPerView);
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, items.length, pauseOnHover, cardsPerView]);

  // Drag handlers
  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    dragX.set(0);
    setDragProgress(0);
  }, [dragX]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
      const currentDragX = info.offset.x;
      dragX.set(currentDragX);

      // Calculate normalized drag progress (-1 to 1)
      const normalizedProgress = Math.max(-1, Math.min(1, currentDragX / (trackItemOffset / 2)));
      setDragProgress(normalizedProgress);
    },
    [dragX, trackItemOffset]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      // Update state
      setIsDragging(false);
      dragX.set(0);
      setDragProgress(0);

      // Calculate how many cards to move
      const moveBy = Math.max(
        1,
        Math.min(
          3, // Maximum 3 cards at once
          Math.ceil(Math.abs(offset) / trackItemOffset)
        )
      );

      // Determine direction
      if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
        // Move forward
        setCurrentIndex((prev) => Math.min(prev + moveBy, items.length - cardsPerView));
      } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
        // Move backward
        setCurrentIndex((prev) => Math.max(prev - moveBy, 0));
      }
    },
    [items.length, trackItemOffset, cardsPerView]
  );

  // Drag constraints
  const dragConstraints = {
    left: -(items.length - cardsPerView) * trackItemOffset,
    right: 0,
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 md:p-6 lg:p-8"
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        perspective: "2000px",
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragElastic={DRAG_ELASTIC}
        dragConstraints={dragConstraints}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          gap: `${gapValue}px`,
          x,
        }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => {
          // Calculate rotation for 3D effect
          const distanceFromCenter = index - currentIndex;
          
          // Base rotation
          const baseRotation = Math.max(
            -MAX_ROTATION,
            Math.min(MAX_ROTATION, -distanceFromCenter * (MAX_ROTATION / 2))
          );
          
          // Add drag rotation
          const dragRotation = isDragging ? dragProgress * (MAX_ROTATION / 4) : 0;
          
          // Combined rotation
          const combinedRotation = baseRotation + dragRotation;

          return (
            <ProjectCardComponent
              key={`${item.id}-${index}`}
              item={item}
              itemWidth={itemWidth}
              rotateY={combinedRotation}
              effectiveTransition={SPRING_OPTIONS}
              screenSize={screenSize}
            />
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="flex w-full justify-center mt-6">
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.max(1, items.length - cardsPerView + 1) }).map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
}