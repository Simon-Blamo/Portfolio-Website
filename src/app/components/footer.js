"use client";
import React, { useEffect, useState } from 'react';
import usePathChangeDetection from '../../../hooks/usePathChangeDetection'; // Import the custom hook

export default function Footer() {
    const { changes, style } = usePathChangeDetection();
    return (
        <footer style={style}>
            <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                Copyright © 2025 Simon Blamo
            </div>
        </footer>
    )
}