
import React from "react";
import { useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectData from "../assets/projects/projects.json"

export default function AccordionComp() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const accordionContainerStyle = {
        backgroundColor: "rgb(131, 140, 141)",
        backdropFilter: "blur(45px)"
    }

    return (
        <div className="max-h-[575px] rounded-lg overflow-y-auto p-4 md:hidden mt-2" style={accordionContainerStyle}>
            {ProjectData.map((project, index) => (
                <Accordion key={index} open={open===index+1}>
                    <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-stone-50 justify-start">{project.title} {
                        project.github &&
                        <a href={project.github}>
                            <FontAwesomeIcon icon={faGithub} className="ml-3"/>
                        </a>
                    }</AccordionHeader>
                    <AccordionBody>
                        <div className="text-white">
                            {project.description}
                            <div className='my-3'>
                                <p>{project.timeFrame}</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            {project.languages.map((language, index) => (
                                <div
                                    key={index}
                                    data-te-chip-init
                                    data-te-ripple-init
                                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-800 dark:text-neutral-200 max-w-fit"
                                    data-te-close="true"
                                >
                                    {language}
                                </div>
                            ))}
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
}