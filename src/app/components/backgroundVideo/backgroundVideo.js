'use client';

import { useState, useEffect } from 'react';

export default function BackgroundVideo() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        setIsWideScreen(window.innerWidth >= 768);

        const handleResize = () => setIsWideScreen(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const parentStyles = {
        position: 'absolute',
        opacity: '.5',
    };

    const vidStyles = {
        position: 'fixed',
        top: '0',
        left: isWideScreen ? '0' : '-340px',
        background: 'no-repeat center',
        userSelect: 'none',
        pointerEvents: 'none',
        height: '100%',
        width: '177.77777778vh',
        minHeight: '56.25vw',
        minWidth: '100%',
        objectFit: 'cover',
        zIndex: '0',
        border: '0px',
    };

    const placeholder = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        background: '#000',
        zIndex: '3',
        transition: 'opacity 0.5s ease',
        opacity: showPlaceholder ? 1 : 0,
    };

    const handleIframeLoad = () => {
        setTimeout(() => {
            setShowPlaceholder(false);
        }, 5000);
    };

    return (
        <div style={parentStyles}>
            <iframe
                src="https://player.vimeo.com/video/1021180782?background=1&autoplay=1&loop=1&autopause=0&controls=0&muted=1"
                allowFullScreen
                fetchPriority="high"
                allow="autoplay; fullscreen"
                style={vidStyles}
                onLoad={handleIframeLoad}
            />
            <div style={placeholder}></div>
        </div>
    );
}
