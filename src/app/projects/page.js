"use client";
import { useEffect } from "react";
import Script from "next/script";
import CarouselComp from "../components/carouselComp"
import AccordionComp  from "../components/accordionComp";

export default function ProjectsPage() { 

    return (
        <div className="md:max-w-7xl overflow-hidden">
            <CarouselComp/>
            <AccordionComp/>
            <Script
                src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"
                defer
            />
        </div>
    )
}