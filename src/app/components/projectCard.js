import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ item }) {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:max-w-[450px] md:max-h-[550px] w-[90%]">
                <figure>
                    <img
                        src={item.image}
                        alt=""
                    />
                </figure>
                <div className="card-body overflow-y-auto md:min-h-[200px] md:max-h-[355px]">
                    
                    <div className='min-h-[235px] max-h-[235px] overflow-y-scroll no-scrollbar'>
                        <h5 className="card-title my-2">{item.title}{
                            item.github &&
                            <a href={item.github}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        }
                        </h5>
                        <p>{item.description}</p>
                    </div>
                    <div className='my-3'>
                        <p>{item.timeFrame}</p>
                    </div>
                    
                    <div className='flex flex-wrap'>
                        {item.languages.map((language, index) => (
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
                </div>
            </div>
        </div>
    )
}