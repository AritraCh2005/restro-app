'use client'

import { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  return (
    <div className="carousel-container relative">
      <div className="carousel-slide-container">
        {children[currentIndex]}
      </div>
      <button
        onClick={prevSlide}
        className="carousel-btn prev-btn absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="carousel-btn next-btn absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        &#8594;
      </button>
    </div>
  );
};

const CarouselContent = ({ children }) => {
  return <div className="carousel-item">{children}</div>;
};

export { Carousel, CarouselContent };
