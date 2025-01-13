import Chat from "../components/chat"

export default function Contact() { 
    const messagingContainerStyles1 = {
        backgroundColor: "rgb(253, 251, 251)",
        borderColor: "rgba(26, 26, 26, 0.7)"
    }
    return (
        // <div className="flex justify-center w-[70vw] h-[100vw] min-w-[420px] min-h-[546px] md:w-[450px] md:h-[80vw] md:max-h-[900px] ">
        //     <div className="mockup-phone w-[80%] md:rotate-[-90deg] md:w-full">
        //         <div className="camera"></div>
        //         <div className="display w-full h-full md:h-[103%]">
        //             <div className="w-full h-full rounded-[35px] flex justify-center items-end md:h-[97%] md:h-[850px] md:w-full md:max-w-[900px] md:items-center" style={messagingContainerStyles1}>
        //                 <Chat></Chat>
        //             </div>
        //         </div>
                
        //     </div>
        // </div>
        <div className="flex justify-center w-[70vw] h-[100vw] min-w-[420px] min-h-[546px] md:w-[450px] md:h-[80vw] md:max-h-[900px] md:rotate-[-90deg]">
            <div className="mockup-phone w-[80%] md:w-full">
                <div className="camera"></div>
                <div className="display w-full h-full md:h-[103%]">
                    <div className="w-full h-full rounded-[35px] flex justify-center items-end md:h-[97%] md:h-[850px] md:w-full md:max-w-[900px] md:items-center" style={messagingContainerStyles1}>
                        <Chat></Chat>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}