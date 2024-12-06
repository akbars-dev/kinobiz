import './Swiper.css';

import useAppStore from '../../stores/app';
import React, { useState, useEffect, useMemo } from "react";

const Swiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const app = useAppStore();
    const slides = app.slides;

    const visibleSlides = useMemo(() => {
        if (slides && slides.length > 0) {
            return [slides[slides.length - 1], ...slides, slides[0]];
        }
        return [];
    }, [slides]);


    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            if(currentSlide>7) {
                setCurrentSlide(0)
            }
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false); 
        if (currentSlide === 0) {
            setCurrentSlide(visibleSlides.length - 2);
        } else if (currentSlide === visibleSlides.length - 1) {
            setCurrentSlide(1);
        }
    };

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoplay);
    }, [visibleSlides.length]);

    return (
        <div className="swiper-container overflow-hidden relative w-full">
            {/* Swiper Track */}
            <div
                className="swiper-track flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentSlide<6 ? currentSlide * 100 : setCurrentSlide(0)}%)`,
                    transition: isTransitioning ? "transform 0.5s ease" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {visibleSlides.map((slide, index) => (
                    <div
                        className="swiper-slide flex-shrink-0 w-full h-full"
                        key={index}
                    >
                        <div className="swiper-item h-[300px] md:h-[500px] relative w-full">
                            {/* Gradient overlay */}
                            <div className="blind absolute top-0 left-0"></div>

                            {/* Slide Content */}
                            <div className="text z-[11] absolute middle:bottom-[20%] bottom-[10%] left-[50px]">
                                <h1 className="text-2xl sm:text-3xl lg:text-6xl lg:max-w-[400px] sm:max-w-[200px] font-bebas max-w-[150px] font-bold text-white">
                                    {slide.title}
                                </h1>
                                <ul className="flex sm:text-[12px] lg:text-[14] text-[8px] gap-1 font-poppins text-yellow font-medium">
                                    <li>{slide.filmType},</li>
                                    <li>{slide.genre}</li>
                                </ul>
                                <button className="text-[12px] sm:text-[16px] lg:text-[24px] lg:w-[200px] font-bebas flex items-center justify-center pt-[7px] w-[150px] text-center bg-main text-white py-[3px] rounded-md">
                                    Tomosha qilish
                                </button>
                            </div>

                            {/* Slide Image */}
                            <img
                                className="image w-full h-[700px] object-cover rounded-sm"
                                src={slide.img}
                                alt={slide.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swiper;
