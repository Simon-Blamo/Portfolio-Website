import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav id='navBar' className='w-full bg-slate-100'>
                <a>
                    Home
                </a>
                <a>
                    About
                </a>
                <a>
                    Projects
                </a>
                <a>
                    Contact Me
                </a>
            </nav>
        </>
    );
}

export default Navbar;