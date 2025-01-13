'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Typed from "typed.js";

export default function Home() { 
    
    const typedRef = useRef(null);

    const router = useRouter();

    useEffect(() => {
        // Preload the pages
        router.prefetch('/about');
        router.prefetch('/projects');
        router.prefetch('/contact');
    }, [router]);
    
    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [" ruin my day with coding...", " brighten my day with coding!", " grapple for fun!", " go hiking!", " binge tv shows all day!", " debate who's MMA goat online for hours!", " go crazy for the eagles!"],
                typeSpeed: 60,
                backSpeed: 20,
                backDelay: 1500,
                loop: true,
            });

            return () => typed.destroy();
        }
    }, []);

    return (
        <div className='overflow-y-hidden'>
            <h2 className='text-2xl  lg:text-4xl px-8 text-center'>
                Hi, my name is Simon (some call me Sam).
                <br/>
                Sometimes, I <span ref={typedRef}></span>
            </h2>
        </div>
    )
    
}