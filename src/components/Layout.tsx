import React, { ReactNode, useState, useEffect, useRef, memo, useMemo } from 'react';
import Navigation from './Navigation';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import backround2 from '../../public/assets/images/backround2.jpg'
import whiteClouds from '../../public/assets/images/whiteClouds.jpg'
import './Layout.css';

interface LayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  children: ReactNode;
}

// Interface cho các hiệu ứng
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkSpeed: number;
  points?: number;
  hasPoints?: boolean;
}

// Memoized Star components
const PointStar = memo(({ star }: { star: Star }) => {
  const outerRadius = star.size * 2;
  const innerRadius = star.size * 0.4;
  const points = star.points || 4;
  
  const pointsString = useMemo(() => {
    return Array.from({ length: points * 2 }, (_, i) => {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / points;
      const x = radius * Math.sin(angle);
      const y = radius * Math.cos(angle);
      return `${x},${y}`;
    }).join(' ');
  }, [points, outerRadius, innerRadius]);
  
  return (
    <svg
      className="star-shape"
      style={{
        left: star.x,
        top: star.y,
        width: outerRadius * 2,
        height: outerRadius * 2,
        opacity: star.opacity,
        animation: `twinkle ${star.blinkSpeed}s ease-in-out infinite`,
        filter: `drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))`,
      }}
      width={outerRadius * 2}
      height={outerRadius * 2}
      viewBox={`${-outerRadius} ${-outerRadius} ${outerRadius * 2} ${outerRadius * 2}`}
    >
      <polygon points={pointsString} fill="white" />
    </svg>
  );
});

const CircleStar = memo(({ star }: { star: Star }) => {
  return (
    <div
      className="star"
      style={{
        left: star.x,
        top: star.y,
        width: star.size,
        height: star.size,
        opacity: star.opacity,
        animation: `twinkle ${star.blinkSpeed}s ease-in-out infinite`,
        boxShadow: `0 0 ${star.size + 1}px rgba(255, 255, 255, 0.8)`,
        borderRadius: '50%',
        backgroundColor: 'white'
      }}
    />
  );
});

const LargeStar = memo(({ star }: { star: Star }) => {
  const outerRadius = star.size * 2;
  const innerRadius = star.size * 0.5;
  const points = star.points || 4;
  
  const pointsString = useMemo(() => {
    return Array.from({ length: points * 2 }, (_, i) => {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / points;
      const x = radius * Math.sin(angle);
      const y = radius * Math.cos(angle);
      return `${x},${y}`;
    }).join(' ');
  }, [points, outerRadius, innerRadius]);
  
  return (
    <svg
      className="star-shape"
      style={{
        left: star.x,
        top: star.y,
        width: outerRadius * 2,
        height: outerRadius * 2,
        opacity: star.opacity,
        animation: `twinkleLarge ${star.blinkSpeed}s ease-in-out infinite`,
        filter: `drop-shadow(0 0 ${star.size}px rgba(255, 255, 255, 0.9))`,
      }}
      width={outerRadius * 2}
      height={outerRadius * 2}
      viewBox={`${-outerRadius} ${-outerRadius} ${outerRadius * 2} ${outerRadius * 2}`}
    >
      <polygon points={pointsString} fill="white" />
    </svg>
  );
});

// Memoized Particle component
const Particle = memo(({ particle, index, prevDarkMode, particleSprayRadius }: { 
  particle: { x: number, y: number, size: number, speed: number }, 
  index: number, 
  prevDarkMode: boolean, 
  particleSprayRadius: number 
}) => {
  return (
    <motion.div
      key={index}
      className={`particle ${prevDarkMode ? 'bg-yellow-300' : 'bg-blue-400'}`}
      initial={{ 
        x: particle.x, 
        y: particle.y, 
        opacity: 1, 
        width: particle.size, 
        height: particle.size 
      }}
      animate={{ 
        x: particle.x + (Math.random() * particleSprayRadius - particleSprayRadius/2), 
        y: particle.y + (Math.random() * particleSprayRadius - particleSprayRadius/2), 
        opacity: 0,
        width: particle.size * 2,
        height: particle.size * 2
      }}
      transition={{ 
        duration: 1.5 * particle.speed,
        ease: "easeOut"
      }}
    />
  );
});

// Memoized Stars list
const StarsList = memo(({ stars, darkMode }: { stars: Star[], darkMode: boolean }) => {
  // Only render if stars should be visible
  if (!stars.length) return null;
  
  return (
    <>
      {stars.map((star) => (
        star.hasPoints 
          ? <PointStar key={star.id} star={star} /> 
          : <CircleStar key={star.id} star={star} />
      ))}
    </>
  );
});

// Memoized Large Stars list
const LargeStarsList = memo(({ largeStars, darkMode }: { largeStars: Star[], darkMode: boolean }) => {
  // Only render if we're in dark mode and have stars
  if (!darkMode || !largeStars.length) return null;
  
  return (
    <>
      {largeStars.map((star) => (
        <LargeStar key={`large-${star.id}`} star={star} />
      ))}
    </>
  );
});

// Memoized Particles list
const ParticlesList = memo(({ particles, prevDarkMode, particleSprayRadius }: { 
  particles: Array<{ x: number, y: number, size: number, speed: number }>, 
  prevDarkMode: boolean, 
  particleSprayRadius: number 
}) => {
  if (!particles.length) return null;
  
  return (
    <>
      {particles.map((particle, index) => (
        <Particle 
          key={index} 
          particle={particle} 
          index={index} 
          prevDarkMode={prevDarkMode} 
          particleSprayRadius={particleSprayRadius} 
        />
      ))}
    </>
  );
});

const Layout: React.FC<LayoutProps> = ({ darkMode, toggleDarkMode, children }) => {
  const { i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);
  const [particles, setParticles] = useState<{ x: number, y: number, size: number, speed: number }[]>([]);
  const [prevDarkMode, setPrevDarkMode] = useState(darkMode);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  // Thêm state cho các ngôi sao
  const [stars, setStars] = useState<Star[]>([]);
  const [largeStars, setLargeStars] = useState<Star[]>([]);
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };
  
  // Lưu trạng thái darkMode trước đó để sử dụng trong animation
  useEffect(() => {
    setPrevDarkMode(darkMode);
  }, [darkMode]);

  // Theo dõi kích thước cửa sổ để responsive với throttle
  useEffect(() => {
    let timeoutId: number | undefined;
    
    const handleResize = () => {
      // Throttle resize events to improve performance
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 200); // Throttle to 200ms
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Tạo các ngôi sao khi component mount hoặc khi chuyển sang dark mode
  useEffect(() => {
    // Tối ưu bằng cách chỉ tạo sao khi thực sự cần thiết
    if (stars.length > 0 && !darkMode) return;
    
    const createStars = () => {
      // Giảm số lượng sao trên mobile
      const densityFactor = windowSize.width < 768 ? 15000 : 10000;
      const starCount = Math.floor((windowSize.width * windowSize.height) / densityFactor);
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        // Phân bố sao nhiều ở hai bên màn hình
        let x: number;
        const sideProbability = 0.7; // 70% khả năng sao xuất hiện ở hai bên
        
        if (Math.random() < sideProbability) {
          // Xuất hiện ở hai bên
          if (Math.random() < 0.5) {
            // Bên trái
            x = Math.random() * (windowSize.width * 0.3);
          } else {
            // Bên phải
            x = windowSize.width - Math.random() * (windowSize.width * 0.3);
          }
        } else {
          // Xuất hiện ở giữa
          x = windowSize.width * 0.3 + Math.random() * (windowSize.width * 0.4);
        }
        
        // Xác định vị trí y dựa vào mode
        let y: number;
        if (!darkMode) {
          // Trong light mode, chỉ xuất hiện ở 1/3 màn hình phía trên
          y = Math.random() * (windowSize.height);
        } else {
          // Trong dark mode, xuất hiện trên toàn màn hình
          y = Math.random() * windowSize.height;
        }
        
        const points = Math.floor(Math.random() * 3) + 4; // 4 đến 6 cạnh
        
        newStars.push({
          id: i,
          x,
          y,
          size: Math.random() * 2 + 1, // Kích thước sao từ 1px đến 3px
          opacity: Math.random() * 0.5 + 0.5, // Độ trong suốt từ 0.5 đến 1
          blinkSpeed: Math.random() * 3 + 2, // Tốc độ nhấp nháy từ 2s đến 5s
          points,
          hasPoints: Math.random() > 0.3, // 70% sao có cạnh, 30% là tròn
        });
      }
      
      return newStars;
    };
    
    const createLargeStars = () => {
      // Giảm số lượng sao lớn trên mobile
      const largeStarCount = Math.floor(windowSize.width / (windowSize.width < 768 ? 180 : 120));
      const newLargeStars: Star[] = [];
      
      for (let i = 0; i < largeStarCount; i++) {
        // Phân bố sao lớn nhiều ở hai bên màn hình
        let x: number;
        const sideProbability = 0.7; // 70% khả năng sao xuất hiện ở hai bên
        
        if (Math.random() < sideProbability) {
          // Xuất hiện ở hai bên
          if (Math.random() < 0.5) {
            // Bên trái
            x = Math.random() * (windowSize.width * 0.3);
          } else {
            // Bên phải
            x = windowSize.width - Math.random() * (windowSize.width * 0.3);
          }
        } else {
          // Xuất hiện ở giữa
          x = windowSize.width * 0.3 + Math.random() * (windowSize.width * 0.4);
        }
        
        // Xác định vị trí y dựa vào mode
        let y: number;
        if (!darkMode) {
          // Trong light mode, chỉ xuất hiện ở 1/3 màn hình phía trên
          y = Math.random() * (windowSize.height / 3);
        } else {
          // Trong dark mode, xuất hiện trên toàn màn hình
          y = Math.random() * windowSize.height;
        }
        
        const points = Math.floor(Math.random() * 3) + 4; // 4 đến 6 cạnh
        
        newLargeStars.push({
          id: i,
          x,
          y,
          size: Math.random() * 3 + 3, // Kích thước sao lớn từ 3px đến 6px
          opacity: Math.random() * 0.3 + 0.7, // Độ trong suốt từ 0.7 đến 1
          blinkSpeed: Math.random() * 4 + 3, // Tốc độ nhấp nháy từ 3s đến 7s
          points,
          hasPoints: true, // Sao lớn luôn có cạnh
        });
      }
      
      return newLargeStars;
    };
    
    // Tạo sao dựa trên mode
    setStars(createStars());
    if (darkMode) {
      setLargeStars(createLargeStars());
    }
    
  }, [darkMode, windowSize, stars.length]);

  // Tính toán spray radius cho particles dựa trên kích thước màn hình - memoize giá trị
  const particleSprayRadius = useMemo(() => 
    windowSize.width < 768 ? 100 : 200
  , [windowSize.width]);

  // Xử lý chuyển đổi dark mode với hiệu ứng
  const handleToggleDarkMode = (e: React.MouseEvent) => {
    if (isTransitioning) return;

    // Lấy vị trí click tương đối với container
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipplePosition({ x, y });
    }

    // Điều chỉnh số lượng particles dựa trên kích thước màn hình
    const particleCount = windowSize.width < 768 ? 8 : 15;
    
    // Điều chỉnh kích thước particle dựa trên kích thước màn hình
    const baseSize = windowSize.width < 768 ? 4 : 6;
    
    // Tạo các particles cho hiệu ứng
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: ripplePosition.x,
      y: ripplePosition.y,
      size: Math.random() * baseSize + 2,
      speed: Math.random() * 2 + 1
    }));
    setParticles(newParticles);

    setIsTransitioning(true);
    setShowRipple(true);

    // Thời gian animation ngắn hơn trên mobile
    const animationTime = windowSize.width < 768 ? 500 : 700;
    const cleanupTime = windowSize.width < 768 ? 700 : 900;

    // Đợi animation hoàn thành rồi mới chuyển trạng thái
    setTimeout(() => {
      toggleDarkMode();
      setShowRipple(false);
      
      setTimeout(() => {
        setIsTransitioning(false);
        setParticles([]);
      }, cleanupTime);
    }, animationTime);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden transition-colors duration-1000"
    >
      {/* Lớp background cố định - light mode */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${whiteClouds})`,
          opacity: darkMode ? 0 : 1,
        }}
      />

      {/* Lớp background cố định - dark mode */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${backround2})`,
          opacity: darkMode ? 1 : 0,
        }}
      />

      {/* Hiệu ứng các ngôi sao nhấp nháy - với memo và lazy rendering */}
      <StarsList stars={stars} darkMode={darkMode} />
      
      {/* Hiệu ứng các ngôi sao lớn nhấp nháy - với memo và lazy rendering */}
      <LargeStarsList largeStars={largeStars} darkMode={darkMode} />

      {/* Overlay cho light mode - có thể điều chỉnh opacity */}
      <div 
        className="overlay bg-white"
        style={{
          opacity: darkMode ? 0 : 0.1, // Chỉ áp dụng overlay rất nhẹ cho light mode
        }}
      />

      {/* Overlay cho dark mode - giảm opacity xuống để hình nền rõ hơn */}
      <div 
        className="overlay bg-black"
        style={{
          opacity: darkMode ? 0.3 : 0, // Giảm opacity
        }}
      />

      {/* Hiệu ứng ripple */}
      {showRipple && (
        <div 
          className={`ripple-effect ${darkMode ? 'bg-gray-400' : 'bg-white'}`}
          style={{
            top: ripplePosition.y,
            left: ripplePosition.x,
          }}
        />
      )}

      {/* Hiệu ứng particles - với memo và lazy rendering */}
      <ParticlesList 
        particles={particles} 
        prevDarkMode={prevDarkMode} 
        particleSprayRadius={particleSprayRadius} 
      />

      {/* Content wrapper - giảm opacity background để thấy hình nền rõ hơn */}
      <div className={`content-wrapper ${darkMode ? 'dark bg-gray-900/10' : 'bg-gray-50/30'}`}>
        <div className="fixed top-2 right-2 p-4 flex gap-2 sm:gap-4 z-50 ">
          <motion.button
            onClick={toggleLanguage}
            className={`px-2 sm:px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-white hover:bg-blue-700 transition-colors text-sm sm:text-base`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {i18n.language === 'en' ? 'VI' : 'EN'}
          </motion.button>
          <motion.button
            onClick={handleToggleDarkMode}
            className={`p-1.5 sm:p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-lg hover:shadow-xl transition-all overflow-hidden relative`}
            whileHover={{ scale: 1.1, rotate: darkMode ? -30 : 30 }}
            whileTap={{ scale: 0.95 }}
            disabled={isTransitioning}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? 'sun' : 'moon'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? (
                  <Sun className="text-yellow-300 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Moon className="text-cyan-500 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
        
        <Navigation darkMode={darkMode} />  
        
        <motion.main 
          className={`main-content container mx-auto px-2 sm:px-4 pt-2 max-w-4xl flex-grow 
            ${darkMode ? 'bg-gray-900/60' : 'bg-white/60'} rounded-none md:rounded-lg mt-0 md:mt-4 shadow-lg`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {children}
        </motion.main>
        
        <motion.footer 
          className={`text-center py-6 sm:py-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'} 
                     transition-colors duration-500 text-sm sm:text-base`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>© 2025 Nguyễn Văn Quyên. Front-end Developer.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Layout;