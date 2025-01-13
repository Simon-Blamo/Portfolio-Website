
import Image from 'next/image'
import Avatar from '../assets/avatar.png'
import SkillsBar from '../components/skillsBar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function AboutPage() { 
    return (
        <div className="card md:card-side md:max-w-7xl max-h-[650px] md:max-h-[675px] bg-base-100 shadow-xl md:mt-6">
            <figure
                className='md:w-[50%] md:max-w-[1075px] md:min-h-full'
            >
                <Image
                    src={Avatar}
                    alt="Photo of Simon Blamo looking dapper."
                    className='md:min-h-full md:min-w-full'
                />
            </figure>
            <div className='card-body md:w-[50%] max-h-[400px] md:max-h-[1075px] flex justify-center justify-items-center'>
                <div className="h-[90%] overflow-y-auto flex flex-col justify-between">
                    <div className='flex flex-wrap mb-3'>
                        <h2 className="card-title uppercase mr-2 text-2xl">Who am I?</h2>
                        <div className="card-actions mx-2">
                            <Link href="/files/resume.pdf" rel="noopener noreferrer" target='blank'>
                                <button className="btn btn-primary uppercase text-lg md:text-xl">Resume</button>
                            </Link>
                        </div>
                        
                        <a href='https://github.com/Simon-Blamo' className='text-white mx-2 text-4xl md:text-5xl flex items-center'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://www.linkedin.com/in/simon-blamo/' className='text-white ml-2 text-4xl md:text-5xl flex items-center'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                    <p
                        className='md:text-xl md:font-semibold grow-0 mb-4'
                    >
                        Hi! My name is Simon Blamo. I&#39;m an avid fan of sports fan,
                        and superhero movies! In my free time, I enjoy practicing the guitar,
                        collecting vinyls, and working out. <br /><br />

                        I am a college graduate, receiving my Bachelor&#39;s of Science in Computer Science at the College of New Jersey. <br /><br />

                        I&#39;ve nearly had a year of professional experience so far. I&#39;m a life-long learner who love to make innovative solutions!
                    </p>
                    <div
                        className='flex flex-col'
                    >
                        <h6 className='italic'>
                            Known Languages & Technologies
                        </h6>
                        <SkillsBar />
                    </div>
                </div>
            </div> 
        </div>

    )
}