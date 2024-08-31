import Image from 'next/image';
import { Experience } from './TimelineElement';
import Link from 'next/link';

const TimelineMobile = ({ experience }: { experience: Experience }) => {
    return(
        <div className="bg-primary/20 p-10 rounded-xl mx-5">
            <div className="flex gap-4 items-center">
                <div className="bg-white rounded-full w-[60px] p-2">
                    <Image src={experience.img} alt={experience.place} width={60} height={60} className=""/>
                </div>
                <div className='flex flex-col gap-1 my-4 w-fit'>
                    <span className="text-2xl text-primary-foreground w-fit">{experience.role}</span>
                    <Link href={experience.link} target="_blank"><span className='text-base text-[#9357fa] w-fit'>{experience.place}</span></Link>
                </div>
            </div>
            <ul className="list-disc m-4">
                {
                  experience.work.map(work => <li key={work} className='py-1'>{work}</li>) 
                }
            </ul>
            <p className="text-gray-300">{experience.timeline}</p>
        </div>
    );
}

export default TimelineMobile;