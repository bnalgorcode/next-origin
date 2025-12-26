'use client';

import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface OdometerDigitProps {
  digit: number;
  width: number;
  height: number;
  imageUrl: string;
  animate?: boolean;
}

function OdometerDigit({ digit, width, height, imageUrl, animate = true }: OdometerDigitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevDigitRef = useRef(digit);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const prevDigit = prevDigitRef.current;
    const currentDigit = digit;

    // Initialize position on mount or when digit first set
    const targetY = -currentDigit * height;
    
    if (prevDigit === currentDigit && !containerRef.current.style.transform) {
      // First render - set initial position without animation
      containerRef.current.style.transform = `translateY(${targetY}px)`;
      containerRef.current.style.transition = 'none';
      return;
    }

    if (prevDigit !== currentDigit && animate) {
      setIsAnimating(true);
      
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'transform 0.4s ease-out';
          containerRef.current.style.transform = `translateY(${targetY}px)`;
        }
      });
      
      // Reset animation state after transition
      const timer = setTimeout(() => {
        setIsAnimating(false);
        prevDigitRef.current = currentDigit;
      }, 400);

      return () => clearTimeout(timer);
    } else if (prevDigit !== currentDigit && !animate) {
      // Update without animation for static digits
      containerRef.current.style.transition = 'none';
      containerRef.current.style.transform = `translateY(${targetY}px)`;
      prevDigitRef.current = currentDigit;
    }
  }, [digit, height, animate]);

  return (
    <div 
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        ref={containerRef}
        className="absolute top-0 left-0"
        style={{
          width: `${width}px`,
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: `${width}px auto`,
          height: `${height * 10}px`, // 10 digits (0-9) stacked vertically
          willChange: isAnimating ? 'transform' : 'auto',
        }}
      />
    </div>
  );
}

export default function Jackpot() {
  const [counter, setCounter] = useState(120888441);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start incrementing counter continuously
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 24);
    }, 100); // Increment every 100ms for smooth animation

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Remove first digit and separate static and dynamic parts
  const numberStr = counter.toString();
  // Remove first digit (index 0)
  const numberWithoutFirst = numberStr.slice(1);
  
  // First 3 digits are static, last 3 digits are dynamic
  const staticPart = numberWithoutFirst.slice(0, 3); // First 3 digits (after removing first)
  const middlePart = numberWithoutFirst.slice(3, -3); // Middle digits (if any)
  const dynamicPart = numberWithoutFirst.slice(-3); // Last 3 digits
  
  const staticDigits = staticPart.split('').map(Number);
  const middleDigits = middlePart.split('').map(Number);
  const dynamicDigits = dynamicPart.split('').map(Number);
  
  const odometerImageUrl = '/images/main/odometer.png';
  const widthNumber = 45;
  const heightNumber = 95;

  return (
    <section className="w-full z-[9999]">
      <div className="jackpot-container w-full hidden md:block relative">
        <img
          src="/images/main/jackpot.png"
          alt="Jackpot"
          className="w-[100%] max-h-[160px]"
        />
        <div className="absolute right-[2%] bottom-[10%] overflow-hidden h-[92px] w-[520px] jackpot-odometer">
          <img
            src="/images/main/won.png"
            alt="Won"
            className="absolute left-0 bottom-[12px] h-[75px]"
          />
          <div className="relative flex items-center ml-[100px]" style={{ height: `${heightNumber}px` }}>
            {/* Static digits (first 3, after removing first digit) - no animation */}
            {staticDigits.map((digit, index) => (
              <OdometerDigit
                key={`static-${index}`}
                digit={digit}
                width={widthNumber}
                height={heightNumber}
                imageUrl={odometerImageUrl}
                animate={false}
              />
            ))}
            
            {/* Comma after first 3 digits if there are more digits */}
            {(middleDigits.length > 0 || dynamicDigits.length > 0) && (
              <div
                style={{
                  width: '20px',
                  height: `${heightNumber}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '2px',
                  marginRight: '2px',
                }}
              >
                {/* <img src="/images/main/odometer.png" alt="Comma" className='w-[20px] h-[20px]' /> */}
              </div> 
            )}
            
            {/* Middle digits (static) with commas */}
            {middleDigits.map((digit, index) => {
              const positionFromRight = middleDigits.length - index;
              const shouldShowComma = positionFromRight > 0 && positionFromRight % 3 === 0;
              
              return (
                <React.Fragment key={`middle-${index}`}>
                  <OdometerDigit
                    digit={digit}
                    width={widthNumber}
                    height={heightNumber}
                    imageUrl={odometerImageUrl}
                    animate={false}
                  />
                  {shouldShowComma && (
                    <div
                      style={{
                        width: '20px',
                        height: `${heightNumber}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '2px',
                        marginRight: '2px',
                      }}
                    >
                      <span
                        style={{
                          color: '#ffffff',
                          fontSize: '36px',
                          fontWeight: 'bold',
                          lineHeight: '1',
                          textShadow: '0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.7)',
                          fontFamily: 'Arial, sans-serif',
                        }}
                      >
                      
                      </span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            
            {/* Comma before last 3 digits if middle digits exist */}
            {middleDigits.length > 0 && (
              <div
                style={{
                  width: '20px',
                  height: `${heightNumber}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '2px',
                  marginRight: '2px',
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    lineHeight: '1',
                    textShadow: '0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.7)',
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  
                </span>
              </div>
            )}
            
            {/* Dynamic digits (last 3) - these animate */}
            {dynamicDigits.map((digit, index) => (
              <OdometerDigit
                key={`dynamic-${counter}-${index}`}
                digit={digit}
                width={widthNumber}
                height={heightNumber}
                imageUrl={odometerImageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

