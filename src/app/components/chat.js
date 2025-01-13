'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FormspreeProvider } from '@formspree/react';
import ContactForm from './contactForm';
export default function Chat() {

    const parentRef = useRef(null);
    const [childStyle, setChildStyle] = useState({}); // Dynamic style for the child div

    useEffect(() => {
        const parentElement = parentRef.current;

        if (!parentElement) return;

        const handleResize = () => {
            const width = parentElement.offsetWidth;
            const height = parentElement.offsetHeight;

            if (window.matchMedia('(min-width: 720px)').matches) {
                // After md breakpoint: Swap width and height
                setChildStyle({
                    width:  `${(height * 0.95)}px`,
                });
            } else {
                // Reset for small screens
                setChildStyle({
                    width: '100%',
                });
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(parentElement);

        // Initial call to set the styles
        handleResize();

        // Cleanup the observer on component unmount
        return () => resizeObserver.disconnect();
    }, []);

    const [time, setTime] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure the component has mounted on the client side
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
        setTime(formattedTime);
    }, []);
    return (
        <div ref={parentRef} className="flex justify-end w-[95%] h-[90%] flex-col md:items-center md:justify-center md:h-full md:w-full md:rotate-90">
            <div className="chat chat-start" style={childStyle}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            src="/files/contactAvatar.jpg"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className="chat-header text-black">
                    Simon Blamo
                    <time className="text-xs opacity-50 text-black">{" " + time}</time>
                </div>
                <div className="chat-bubble chat-bubble-info text-white text-sm md:text-md">All ears!</div>
            </div>
            <div>
                <FormspreeProvider project="2648872743189085511">
                    <ContactForm style={childStyle} />
                </FormspreeProvider>
            </div>     
        </div>
    )
}