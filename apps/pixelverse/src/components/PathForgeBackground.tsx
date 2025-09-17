import React, { useEffect, useState } from 'react';

const PathForgeBackground = ({ page }: { page?: string }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  const getThemeColors = (pageName?: string) => {
    switch (pageName) {
      case 'curriculum':
        return {
          background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 50%, #e8f5e8 100%)', // Light green theme
          text: '#2e7d32', // Dark green for contrast
          secondaryText: '#388e3c' // Medium green for secondary text
        };
      case 'locations':
        return {
          background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 50%, #ffb74d 100%)', // Orange theme
          text: '#e65100', // Dark orange for contrast
          secondaryText: '#f57c00' // Medium orange for secondary text
        };
      case 'partnerships':
        return {
          background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 50%, #e91e63 100%)', // Pink theme
          text: '#c2185b', // Dark pink for contrast
          secondaryText: '#e91e63' // Medium pink for secondary text
        };
      case 'contact':
        return {
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #2196f3 100%)', // Blue theme
          text: '#1565c0', // Dark blue for contrast
          secondaryText: '#1976d2' // Medium blue for secondary text
        };
      case 'why-us':
        return {
          background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 50%, #b3e5fc 100%)', // Light blue theme
          text: '#0277bd', // Dark blue for contrast
          secondaryText: '#0288d1' // Medium blue for secondary text
        };
      case 'coaches':
        return {
          background: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 50%, #ba68c8 100%)', // Purple theme
          text: '#7b1fa2', // Dark purple for contrast
          secondaryText: '#8e24aa' // Medium purple for secondary text
        };
      case 'careers':
        return {
          background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 50%, #ffe082 100%)', // Warm yellow/gold theme
          text: '#f57f17', // Dark amber for contrast
          secondaryText: '#ff8f00' // Medium amber for secondary text
        };
      default:
        return {
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)', // Dark theme for home
          text: '#ffffff', // White for dark background
          secondaryText: '#b0b0b0' // Light gray for secondary text
        };
    }
  };

  const theme = getThemeColors(page);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: theme.background,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {!reduceMotion && (
        <>
          {/* Animated Paths/Trails */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`path-${i}`}
              style={{
                position: 'absolute',
                width: '2px',
                height: `${Math.random() * 200 + 100}px`,
                background: `linear-gradient(to bottom, #3498db, #2ecc71, #e74c3c)`,
                borderRadius: '1px',
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 90 + 5}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pathGlow${i % 4} ${Math.random() * 12 + 10}s infinite ease-in-out`,
                opacity: 0.7,
                boxShadow: '0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db',
              }}
            />
          ))}

          {/* Forging Sparks */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`spark-${i}`}
              style={{
                position: 'absolute',
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `radial-gradient(circle, #ffd700, #ff6b35, transparent)`,
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `sparkle${i % 3} ${Math.random() * 6 + 5}s infinite ease-in-out`,
                opacity: Math.random() * 0.8 + 0.2,
                boxShadow: '0 0 6px #ffd700',
              }}
            />
          ))}


          {/* Construction Elements */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`construct-${i}`}
              style={{
                position: 'absolute',
                width: `${Math.random() * 30 + 20}px`,
                height: `${Math.random() * 30 + 20}px`,
                background: `linear-gradient(45deg, #34495e, #2c3e50)`,
                border: '2px solid #3498db',
                borderRadius: '4px',
                top: `${Math.random() * 70 + 15}%`,
                left: `${Math.random() * 80 + 10}%`,
                animation: `construct${i % 2} ${Math.random() * 15 + 12}s infinite ease-in-out`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 45}deg)`,
              }}
            >
              {/* Mini grid pattern */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `
                    linear-gradient(rgba(52, 152, 219, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(52, 152, 219, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '6px 6px',
                }}
              />
            </div>
          ))}

          <style>{`
            @keyframes pathGlow0 {
              0% { opacity: 0.4; transform: scaleY(1) rotate(0deg) translateX(-40vw) translateY(-30vh); }
              25% { opacity: 0.7; transform: scaleY(1.1) rotate(90deg) translateX(20vw) translateY(20vh); }
              50% { opacity: 0.9; transform: scaleY(1.2) rotate(180deg) translateX(40vw) translateY(-10vh); }
              75% { opacity: 0.6; transform: scaleY(1.05) rotate(270deg) translateX(-20vw) translateY(30vh); }
              100% { opacity: 0.4; transform: scaleY(1) rotate(360deg) translateX(-40vw) translateY(-30vh); }
            }
            @keyframes pathGlow1 {
              0% { opacity: 0.5; transform: scaleY(1) rotate(0deg) translateX(35vw) translateY(25vh); }
              33% { opacity: 0.8; transform: scaleY(1.15) rotate(120deg) translateX(-30vw) translateY(-20vh); }
              66% { opacity: 0.9; transform: scaleY(1.25) rotate(240deg) translateX(25vw) translateY(15vh); }
              100% { opacity: 0.5; transform: scaleY(1) rotate(360deg) translateX(35vw) translateY(25vh); }
            }
            @keyframes pathGlow2 {
              0% { opacity: 0.3; transform: scaleY(1) rotate(0deg) translateX(-25vw) translateY(35vh); }
              50% { opacity: 0.8; transform: scaleY(1.1) rotate(180deg) translateX(30vw) translateY(-25vh); }
              100% { opacity: 0.3; transform: scaleY(1) rotate(360deg) translateX(-25vw) translateY(35vh); }
            }
            @keyframes pathGlow3 {
              0% { opacity: 0.6; transform: scaleY(1) rotate(0deg) translateX(30vw) translateY(-20vh); }
              40% { opacity: 0.9; transform: scaleY(1.3) rotate(144deg) translateX(-35vw) translateY(25vh); }
              80% { opacity: 0.7; transform: scaleY(1.1) rotate(288deg) translateX(15vw) translateY(-30vh); }
              100% { opacity: 0.6; transform: scaleY(1) rotate(360deg) translateX(30vw) translateY(-20vh); }
            }

            @keyframes sparkle0 {
              0% { transform: scale(0.8) rotate(0deg) translateX(-45vw) translateY(-35vh); opacity: 0.4; }
              25% { transform: scale(1.1) rotate(90deg) translateX(25vw) translateY(15vh); opacity: 0.8; }
              50% { transform: scale(1.3) rotate(180deg) translateX(35vw) translateY(-25vh); opacity: 1; }
              75% { transform: scale(1.1) rotate(270deg) translateX(-15vw) translateY(30vh); opacity: 0.7; }
              100% { transform: scale(0.8) rotate(360deg) translateX(-45vw) translateY(-35vh); opacity: 0.4; }
            }
            @keyframes sparkle1 {
              0% { transform: scale(0.9) rotate(0deg) translateX(40vw) translateY(20vh); opacity: 0.5; }
              33% { transform: scale(1.2) rotate(120deg) translateX(-35vw) translateY(-30vh); opacity: 0.9; }
              66% { transform: scale(1.4) rotate(240deg) translateX(20vw) translateY(25vh); opacity: 1; }
              100% { transform: scale(0.9) rotate(360deg) translateX(40vw) translateY(20vh); opacity: 0.5; }
            }
            @keyframes sparkle2 {
              0% { transform: scale(0.7) rotate(0deg) translateX(-30vw) translateY(40vh); opacity: 0.3; }
              50% { transform: scale(1.2) rotate(180deg) translateX(45vw) translateY(-20vh); opacity: 0.9; }
              100% { transform: scale(0.7) rotate(360deg) translateX(-30vw) translateY(40vh); opacity: 0.3; }
            }

            @keyframes construct0 {
              0% { transform: translateY(-40vh) translateX(-35vw) rotate(0deg) scale(1); }
              20% { transform: translateY(20vh) translateX(25vw) rotate(72deg) scale(1.05); }
              40% { transform: translateY(-15vh) translateX(40vw) rotate(144deg) scale(1.1); }
              60% { transform: translateY(35vh) translateX(-20vw) rotate(216deg) scale(1.05); }
              80% { transform: translateY(10vh) translateX(-45vw) rotate(288deg) scale(0.95); }
              100% { transform: translateY(-40vh) translateX(-35vw) rotate(360deg) scale(1); }
            }
            @keyframes construct1 {
              0% { transform: translateX(30vw) translateY(25vh) rotate(0deg); }
              25% { transform: translateX(-40vw) translateY(-30vh) rotate(90deg); }
              50% { transform: translateX(35vw) translateY(20vh) rotate(180deg); }
              75% { transform: translateX(-25vw) translateY(-35vh) rotate(270deg); }
              100% { transform: translateX(30vw) translateY(25vh) rotate(360deg); }
            }
          `}</style>
        </>
      )}
    </div>
  );
};

// Export theme colors for use in pages
export const getThemeColors = (pageName?: string) => {
  switch (pageName) {
    case 'curriculum':
      return {
        background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 50%, #e8f5e8 100%)',
        text: '#2e7d32',
        secondaryText: '#388e3c'
      };
    case 'locations':
      return {
        background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 50%, #ffb74d 100%)',
        text: '#e65100',
        secondaryText: '#f57c00'
      };
    case 'partnerships':
      return {
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 50%, #e91e63 100%)',
        text: '#c2185b',
        secondaryText: '#e91e63'
      };
    case 'contact':
      return {
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #2196f3 100%)',
        text: '#1565c0',
        secondaryText: '#1976d2'
      };
    case 'why-us':
      return {
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 50%, #b3e5fc 100%)',
        text: '#0277bd',
        secondaryText: '#0288d1'
      };
    case 'coaches':
      return {
        background: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 50%, #ba68c8 100%)',
        text: '#7b1fa2',
        secondaryText: '#8e24aa'
      };
    case 'careers':
      return {
        background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 50%, #ffe082 100%)',
        text: '#f57f17',
        secondaryText: '#ff8f00'
      };
    default:
      return {
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        text: '#ffffff',
        secondaryText: '#b0b0b0'
      };
  }
};

export default PathForgeBackground;