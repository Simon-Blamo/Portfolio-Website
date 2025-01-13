'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FormspreeProvider } from '@formspree/react';
import ContactForm from './contactForm';
import Typing from './typing';

export default function Chat() {

    const parentRef = useRef(null);
    const [childStyle, setChildStyle] = useState({});

    useEffect(() => {
        const parentElement = parentRef.current;

        if (!parentElement) return;

        const handleResize = () => {
            const width = parentElement.offsetWidth;
            const height = parentElement.offsetHeight;

            if (window.matchMedia('(min-width: 720px)').matches) {
                setChildStyle({
                    width:  `${(height * 0.95)}px`,
                });
            } else {
                setChildStyle({
                    width: '100%',
                });
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(parentElement);

        handleResize();

        return () => resizeObserver.disconnect();
    }, []);


    const [time, setTime] = useState('');
    const [mounted, setMounted] = useState(false);

    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 3000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setMounted(true);
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
                    <time className="text-xs opacity-50 text-black" suppressHydrationWarning={true}>{" " + time}</time>
                </div>
                <div className="chat-bubble chat-bubble-info text-white text-sm md:text-md">
                    <div className='mb-1'></div>
                    { showAnimation ? <Typing/> : <p>Hey, I&#39;m all ears!</p> }
                </div>
            </div>
            <div>
                <FormspreeProvider project="2648872743189085511">
                    <ContactForm style={childStyle} />
                </FormspreeProvider>
            </div>     
        </div>
    )
}