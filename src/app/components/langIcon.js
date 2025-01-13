import Image from 'next/image'

export default function LanguageIcon({ children }) { 
    return (
        <Image
            className='h-[36px] w-[36px] md:h-[48px] md:w-[48px]'
            src={children.img}
            alt={children.alt}
            title={children.title}
        />
    )
    
}