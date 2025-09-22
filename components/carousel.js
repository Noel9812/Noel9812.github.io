"use client";

import { PurpleText } from './texts';
import { FaLinkedin } from 'react-icons/fa';
import { ORIENTATION } from '@/utils/contants';
import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import DotsSVG from './assets/DotsSVG';
import DesignSVG from './assets/DesignSVG';

const Carousel = ({ testimonials, orientation = ORIENTATION.HORIZONTAL }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef(null);
  const isVertical = orientation === ORIENTATION.VERTICAL;

  // Auto-rotate slides when not hovering
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 10000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  // Add goToNextSlide to the dependency array
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [goToNextSlide]); // Add goToNextSlide here

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Container classes based on orientation
  const containerClasses = isVertical 
    ? "relative h-[400px] w-full overflow-hidden rounded-xl"
    : "relative h-[330px] md:h-[250px] w-full overflow-hidden rounded-xl";

  // Carousel container classes based on orientation
  const carouselContainerClasses = isVertical
    ? "absolute w-full h-[600px] top-1/2 -translate-y-1/2 z-10"
    : "absolute h-full w-[300%] left-1/2 -translate-x-1/2 z-10";

  // Navigation dots container classes based on orientation
  const dotsContainerClasses = isVertical
    ? "absolute right-1 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-30"
    : "absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-row gap-2 z-30";

  // SVG positioning classes based on orientation
  const topSvgClasses = isVertical
    ? "absolute top-2 left-[0%] flex flex-col z-0"
    : "absolute top-2 left-0 flex flex-col z-0 md:left-[18%] lg:left-[25%]";

  const bottomSvgClasses = isVertical
    ? "absolute bottom-2 right-[10%] flex flex-col z-0"
    : "absolute bottom-2 right-0 flex flex-col z-0 md:right-[20%] lg:right-[25%]";

  return (
    <div
      className={containerClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <div className={carouselContainerClasses}>
        {testimonials.map((testimonial, index) => {
          // Calculate position based on index relative to current
          let position = index - currentIndex;

          // Handle wrap-around for continuous loop effect
          if (position < -1) position += testimonials.length;
          if (position > 1) position -= testimonials.length;

          let slideClasses = "absolute transition-all duration-700 ease-in-out";

          // Position classes based on relation to current slide and orientation
          if (isVertical) {
            slideClasses += " w-full h-1/3";
            
            if (position === -1) {
              // Previous slide (above)
              slideClasses += " -top-[10%] opacity-40 scale-70 z-10";
            } else if (position === 0) {
              // Current slide (center)
              slideClasses += " top-[30%] opacity-100 scale-100 z-50";
            } else if (position === 1) {
              // Next slide (below)
              slideClasses += " top-[70%] opacity-40 scale-70 z-10";
            } else {
              // Hidden slides (offscreen)
              slideClasses += " opacity-0 scale-75 -z-10";
              if (position < 0) {
                slideClasses += " -top-1/3";
              } else {
                slideClasses += " top-full";
              }
            }
          } else {
            slideClasses += " h-full w-1/3";
            
            if (position === -1) {
              // Previous slide (left)
              slideClasses += " -left-0 opacity-40 scale-75 z-10 md:left-[20%]";
            } else if (position === 0) {
              // Current slide (center)
              slideClasses += " left-[33.333%] opacity-100 scale-100 z-50";
            } else if (position === 1) {
              // Next slide (right)
              slideClasses += " right-0 opacity-40 scale-75 z-10 md:right-[20%]";
            } else {
              // Hidden slides (offscreen)
              slideClasses += " opacity-0 scale-75 -z-10";
              if (position < 0) {
                slideClasses += " right-1/3";
              } else {
                slideClasses += " left-full";
              }
            }
          }

          const testimonialContainerClasses = isVertical
            ? "relative h-fit w-[90%] max-w-xl mx-auto flex flex-col gap-1"
            : "relative h-full w-[90%] max-w-md mx-auto flex flex-col gap-1";

          return (
            <div key={index} className={slideClasses}>
              <div className={testimonialContainerClasses}>
                <blockquote className="italic text-xs text-primary flex gap-1 rounded p-6 shadow-lg bg-secondary/80 backdrop-blur-sm">
                  <PurpleText className="mb-auto text-4xl font-bold">&ldquo;</PurpleText>
                  <span>{testimonial.quote}</span>
                  <PurpleText className="mt-auto text-4xl font-bold">&rdquo;</PurpleText>
                </blockquote>

                <div className='relative'>
                  <h3 className="font-bold text-sm text-tertiary">
                    <Link
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                    >
                      {testimonial.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-primary/70">{testimonial.location}</p>
                  
                  <div className="absolute right-0 bottom-2 bg-secondary/80 shadow shadow-purple-500/50 h-16 w-16 rounded-full overflow-hidden border-2 border-purple">
                    <Link
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                    >
                      <Image
                        src={testimonial.profile_picture}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </div>
                </div>

                
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className={dotsContainerClasses}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentIndex ? 'bg-purple scale-150' : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Navigation arrows for horizontal carousel */}
      {!isVertical && (
        <>
          <button 
            onClick={goToPrevSlide}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-secondary/80 backdrop-blur-sm rounded-full p-2 z-40 text-primary cursor-pointer hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
          
          <button 
            onClick={goToNextSlide}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary/80 backdrop-blur-sm rounded-full p-2 z-40 text-primary cursor-pointer hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </>
      )}

      {/* Top SVG */}
      <div className={topSvgClasses}>
        <DesignSVG className="w-24 h-24" />
      </div>

      {/* Bottom SVG */}
      <div className={bottomSvgClasses}>
        <DotsSVG className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Carousel;