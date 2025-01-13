import { Carousel } from "@material-tailwind/react"
import ProjectCard from "./projectCard"
import ProjectData from "../assets/projects/projects.json"

export default function CarouselComp() { 

    function groupData(data, size) { 
        const grouped = [];
        for (let i = 0; i < data.length; i += size) { 
            grouped.push(data.slice(i, i + size));
        }
        return grouped;
    }
    const slideContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const slideContainerClassName = "justify-between"
    const groupedData = groupData(ProjectData, 2);
    return (
        <div className="hidden md:block w-[90vw] max-w-[1200px] overflow-x-hidden">
            <Carousel
                className="rounded-xl overflow-x-hidden h-[600px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 overflow-x-hidden">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {groupedData.map((group, index) => (
                    <div key={index} className="flex justify-center">
                        <div style={slideContainerStyle} className={slideContainerClassName}>
                            <div className="flex justify-between">
                                {group.map((item, itemIndex) => (
                                    <ProjectCard key={itemIndex} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                ))}
            </Carousel>
        </div>
    )
}