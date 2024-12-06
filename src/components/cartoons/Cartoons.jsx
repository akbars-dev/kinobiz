import './Cartoons.css';
import React, { useRef, useEffect } from 'react';
import CartoonCard from './cartoon/Cartoon.jsx';
import useAppStore from '../../stores/app.js';

export default function Cartoons() {
    const scrollContainer = useRef(null);
    const scrollAmount = 400;

    const scroll = (direction) => {
        if (scrollContainer.current) {
            const newPosition =
                direction === 'left'
                    ? scrollContainer.current.scrollLeft - scrollAmount
                    : scrollContainer.current.scrollLeft + scrollAmount;

            scrollContainer.current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });
        }
    };

    const app = useAppStore();

    useEffect(() => {
        const autoScrollInterval = setInterval(() => {
            scroll('right');
        }, 3000);

        return () => clearInterval(autoScrollInterval);
    }, []);

    return (
        <div className="slider-container relative">
            <div
                ref={scrollContainer}
                className="cards overflow-x-scroll min-h-[430px] flex mb-[20px] items-center gap-[20px] scroll-smooth hide-scrollbar"
            >
                {app.cartoons.map((val) => (
                    <CartoonCard
                        id={val._id}
                        imageUrl={val.poster}
                        title={val.title}
                        genre={val.genres}
                    />
                ))}
            </div>
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow/50 hover:bg-yellow/70 text-white p-2 rounded-r"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow/50 hover:bg-yellow/70 text-white p-2 rounded-l"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
