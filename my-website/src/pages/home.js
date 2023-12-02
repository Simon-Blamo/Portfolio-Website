import { useState } from "react";
import Introduction from "../components/introductions"
import Navbar from "../components/navbar"
import backgroundVid from "../videos/giphy.mp4"


const home = () => {
    return (
        <>
            <div className="h-screen w-full bg-[#000000]">
                <div className="flex flex-col h-[90%] w-full justify-center items-center">
                    <video src={backgroundVid} id="backgroundVideo" loop className="h-[60%] w-[90%]" autoPlay muted>
                    </video>
                    <Introduction/>
                    <Navbar/>
                </div>
            </div>
        </>
    )
}

export default home;