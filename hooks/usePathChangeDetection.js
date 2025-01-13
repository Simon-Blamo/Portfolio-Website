import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const usePathChangeDetection = () => {
    const [changes, setChanges] = useState(0);
    const [style, setStyle] = useState({});
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return; // Ensure pathname is valid

        const updateStyle = () => {
            if (window.matchMedia('(min-width: 720px)').matches) {
                if (pathname === '/contact') {
                    setStyle({
                        marginTop: '-200px',
                        zIndex: '2',
                    });
                } else {
                    setStyle({
                        marginTop: '0px',
                        zIndex: '2',
                    });
                }
            } else {
                setStyle({
                    marginTop: '0px',
                    zIndex: '2',
                });
            }
        };

        // Trigger style update and increment changes
        updateStyle();
        setChanges((prev) => prev + 1);

        // Add resize listener
        window.addEventListener('resize', updateStyle);

        return () => {
            window.removeEventListener('resize', updateStyle);
        };
    }, [pathname]);

    return { changes, style };
};

export default usePathChangeDetection;
