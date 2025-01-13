import Link from "next/link";
import dynamic from "next/dynamic";

const About = dynamic(() => import('../about/page'), {
    loading: () => <p>Loading...</p>,
});

export default function Navbar() { 

    const navStyle = {
        zIndex: "2"
    }

    return (
        <nav
            className="navbar bg-base-100 rounded mt-4 sm:mt-10 mb-3 font-semibold"
            style={navStyle}
        >
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="/about">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                               Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>  
            </div>
            <div className="navbar-end pr-[10px] lg:navbar-start lg:pl-[10px] lg:pr-[0px]">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="28pt" height="28pt" viewBox="0 0 1212.000000 1212.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1212.000000) scale(0.100000,-0.100000)"
                        fill="#FFFAFA" stroke="none">
                        <path d="M450 10795 l0 -185 410 0 c226 0 410 -4 410 -8 0 -9 21 24 -478 -763 l-372 -587 0 -176 0 -176 675 0 675 0 0 185 0 185 -441 0 c-401 0 -441 1 -435 16 7 18 112 186 441 704 128 201 271 427 318 502 l87 137 0 176 0 175 -645 0 -645 0 0 -185z" />
                        <path d="M2290 10235 l0 -155 341 0 c269 0 340 -3 336 -12 -5 -13 -96 -159 -490 -780 l-207 -326 0 -146 0 -146 555 0 555 0 0 155 0 155 -361 0 c-285 0 -360 3 -356 13 2 6 45 76 95 155 50 78 206 324 347 546 l255 404 0 146 0 146 -535 0 -535 0 0 -155z" />
                        <path d="M3900 9510 l0 -100 220 -2 219 -3 -146 -230 c-80 -126 -183 -289 -229 -361 l-84 -131 0 -92 0 -91 360 0 360 0 0 100 0 100 -235 0 -235 0 52 83 c28 45 129 205 225 355 l173 272 0 100 0 100 -340 0 -340 0 0 -100z" />
                        <path d="M628 7896 c-94 -26 -172 -103 -198 -196 -6 -22 -10 -1151 -10 -3176 0 -3554 -9 -3206 85 -3300 83 -83 97 -86 502 -82 329 3 339 4 380 26 54 28 104 78 129 128 18 36 19 70 24 504 l5 465 4515 0 4515 0 5 -465 c5 -434 6 -468 24 -504 25 -50 75 -100 129 -128 41 -22 51 -23 380 -26 405 -4 419 -1 503 82 92 93 85 -88 81 1987 -3 1822 -3 1824 -25 1934 -110 563 -408 1013 -872 1318 -250 164 -579 277 -896 307 -71 6 -823 10 -2135 10 -1768 0 -2032 -2 -2076 -15 -60 -18 -135 -80 -166 -139 l-22 -41 -3 -1312 -2 -1313 -1980 0 -1980 0 0 1868 0 1867 -24 50 c-12 28 -42 67 -66 88 -79 72 -77 72 -445 74 -245 2 -342 -1 -377 -11z" />
                        <path d="M3380 7479 c-201 -17 -445 -93 -623 -194 -127 -73 -222 -148 -342 -269 -213 -214 -350 -472 -417 -780 -32 -147 -32 -455 0 -603 74 -342 234 -621 487 -851 408 -371 988 -495 1515 -322 540 176 933 621 1047 1185 25 127 25 452 0 580 -41 202 -126 405 -244 583 -79 120 -290 330 -412 411 -306 203 -647 290 -1011 260z" />
                    </g>
                </svg>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="uppercase" href="/">
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link className="uppercase" href="/about">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className="uppercase" href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="uppercase" href="/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}