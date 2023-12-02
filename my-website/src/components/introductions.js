import React from 'react';
import Typed from 'typed.js';

const Introduction = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Web Developer.', 'Software Engineer.', 'Cyber-Security Specialist.'],
        typeSpeed: 75,
        backDelay: 1300,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
    });

    return () => {
        typed.destroy();
    };
}, []);

    return (
        <div id="textContainer" className="flex flex-col w-full items-center text-lg">
            <h1 id="introUpper" className="text-[#FFFAFA]">
                Hello, my name is Simon Blamo.
            </h1>
            <h1 id="introLower" className="text-[#FFFAFA]">I'm an aspiring <span id="dynamicText" className="text-[#FFFAFA]" ref={el}></span></h1>
        </div>
    );
}

export default Introduction;