'use client'
import BackgroundVideo from './backgroundVideo/backgroundVideo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Main({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    const mainStyle = {
        zIndex: "1",
        position: "relative"
    };

    return (
        <>
            <BackgroundVideo />
            {isLoading ? (
                <div className="loading-container">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            ) : (
                <main
                    className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-[family-name:var(--font-geist-sans)]"
                    style={mainStyle}
                >
                    {children}
                </main>
            )}
        </>
    );
}