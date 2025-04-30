import { memo } from "react";
import { CarouselItem } from ".";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProjectCardComponent = memo(({
  item,
  itemWidth,
  rotateY,
  effectiveTransition,
  screenSize
}: {
  item: CarouselItem;
  itemWidth: number;
  rotateY: any;
  effectiveTransition: any;
  screenSize: string;
}) => {
  const cardVariants = {
    initial: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      y: 0,
    },
    hover: {
      y: 0,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };


  // Image animations
  const imageVariants = {
    initial: {
      scale: 1,
      filter: "brightness(1) contrast(1)"
    },
    hover: {
      scale: 1.08,
      filter: "brightness(1.1) contrast(1.05)",
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25
      }
    }
  };

  // Content hover animations
  const contentVariants = {
    initial: {
      y: 0,
      opacity: 1
    },
    hover: {
      y: -8,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Button animations
  const buttonVariants = {
    initial: {
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.08,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
        bounce: 0.5
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 15
      }
    }
  };
  const navigate = useNavigate();
  const handleClick = (link: number) => {
    navigate(`projects/${link}`);
  }

  return (
    <motion.div
      className="relative shrink-0 bg-white dark:bg-gray-800 rounded-xl overflow-hidden p-2 "
      style={{
        width: itemWidth,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={effectiveTransition}
      variants={cardVariants}
      whileHover="hover"
      whileTap={screenSize === 'xs' || screenSize === 'sm' ? 'hover' : undefined}
      initial="initial"
    >
      {/* Card background */}
      <motion.div
        className="inset-0 bg-white dark:bg-gray-800 backdrop-blur-sm "
        style={{
          // border: "1px solid rgba(209, 213, 219, 0.3)",
        }}
        variants={{
          initial: {
            opacity: 1,
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.98)",
          },
          hover: {
            opacity: 1,
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.98)",
          }
        }}
      />

      {/* Shadow outline */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl opacity-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm "
        variants={{
          initial: {
            opacity: 0,
            scale: 0.95
          },
          hover: {
            opacity: 0.7,
            scale: 1.02,
            transition: { duration: 0.4 }
          }
        }}
      />

      {/* Image container */}
      <div className="relative rounded-xl overflow-hidden">
        {/* Gradient overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 z-10"
          variants={{
            initial: {
              opacity: 0.3,
            },
            hover: {
              opacity: 0.7,
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
              transition: { duration: 0.4 }
            }
          }}
        />

        <motion.img
          src={item.image || "/api/placeholder/400/320"}
          alt={item.title}
          className="w-full h-48 object-cover"
          variants={imageVariants}
        />

        {/* Action buttons */}
        <motion.div
          className="absolute bottom-4 right-4 flex space-x-2 z-20"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          variants={{
            hover: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 15,
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* {item.github && (
              <motion.a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-lg text-gray-800 hover:text-blue-600 flex items-center justify-center"
                variants={buttonVariants}
                whileTap="tap"
              >
                <FiGithub size={18} />
              </motion.a>
            )} */}
          {item.liveDemo && (
            <motion.a
              href={`projects/${item.id}`}
              // target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-lg text-gray-800 hover:text-blue-600 flex items-center justify-center"
              variants={buttonVariants}
              whileTap="tap"
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div className="p-6" variants={contentVariants}>
        {/* Title */}
        <motion.h3
          onClick={() => handleClick(item.id)}

          className="text-xl font-bold mb-4  cursor-pointer"
          style={{
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, rgb(6,182,212), rgb(34,211,238))",
          }}
          variants={{
            initial: {
              backgroundImage: "linear-gradient(to right, rgb(6,182,212), rgb(34,211,238))",
              backgroundPosition: "0% 50%"
            },
            hover: {
              backgroundImage: "linear-gradient(to right, rgb(6,182,212), rgb(34,211,238))",
              backgroundPosition: "100% 50%",
              transition: { duration: 0.4 }
            }
          }}
        >
          {item.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
          variants={{
            initial: { y: 0, opacity: 0.9 },
            hover: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.05, duration: 0.2 }
            }
          }}
        >
          {item.description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2 mb-5"
          variants={{
            initial: {},
            hover: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
        >
          {(item.technologies || []).map((tech, index) => (
            <motion.span
              key={tech}
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
              variants={{
                initial: { y: 0, opacity: 1, scale: 1 },
                hover: {
                  y: -4,
                  scale: 1.12,
                  opacity: 1,
                  boxShadow: "0 8px 16px -2px rgba(0, 0, 0, 0.1), 0 3px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: index * 0.05
                  }
                }
              }}
              whileHover={{ scale: 1.18 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon?.[index] && <span>{item.icon[index]}</span>}
              <span>{tech}</span>
            </motion.span>
          ))}


        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default ProjectCardComponent

