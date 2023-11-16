import { useState } from "react";
import backgroundVid from "../videos/giphy.mp4"

const home = () => {
    return (
        <>
            <div className="h-screen w-full bg-[#000000]">
                <div className="flex flex-col h-[90%] w-full justify-center items-center">
                    <video autoPlay loop className="h-[60%] w-[90%]">
                        <source src={ backgroundVid }/>
                    </video>
                    <div>
                        <h1 className="text-[#FFFAFA]">Hello</h1>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default home;