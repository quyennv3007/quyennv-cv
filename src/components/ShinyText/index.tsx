import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    shineColor?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
    text, 
    disabled = false, 
    speed = 5, 
    className = '',
    shineColor = 'rgba(220, 255, 255, 0.9)'
}) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0) 50%, ${shineColor} 90%, rgba(255, 255, 255, 0) 70%)`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;