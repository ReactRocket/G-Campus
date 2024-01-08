// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 100); // Adjust the scroll threshold as needed
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-3 right-3 hover:bg-blue-500 bg-gray-200  border-none rounded-full p-2  cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}
            onClick={scrollToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" hover:text-white text-black font-extrabold  bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
