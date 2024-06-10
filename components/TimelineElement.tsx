import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Blob from "@/public/blob1.svg";
import BlobComponent from './BlobComponent';

interface Experience {
  id: string,
  role: string,
  place: string,
  work: string[],
  timeline: string,
  img: string,
  background: string
}

const TimelineElement = ({ experience }: { experience: Experience }) => {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div ref={ref} className='my-10 relative'>
        <VerticalTimelineElement
            contentStyle={{ background: "hsl(var(--primary) / 0.2)", backdropFilter: "blur(64px)", padding: "16px 32px" }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.timeline}
            iconStyle={{ background: experience.background }}
            icon={<div className='flex justify-center items-center rounded-full'>
              <Image src={experience.img} alt={experience.place} width={30} height={30}/>
            </div>}
            visible={inView}
        >
            <div className='flex flex-col gap-1 my-4'>
              <span className="text-2xl text-primary-foreground">{experience.role}</span>
              <span className='text-base text-[#9357fa]'>{experience.place}</span>
            </div>
            <ul className="list-disc m-4">
                {
                  experience.work.map(work => <li key={work} className='py-1'>{work}</li>) 
                }
            </ul>
        </VerticalTimelineElement>
        <BlobComponent/>
    </div>
  )
}

export default TimelineElement