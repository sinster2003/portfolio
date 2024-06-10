import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';
import experiences from '@/utils/experience.json';

const Timeline = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 py-10'>
            <p className='text-4xl text-primary-foreground'>Work Experience</p>
        </div>
        <VerticalTimeline
            layout='1-column-left'
        >
            {
                experiences.map(experience => <TimelineElement key={experience.id} experience={experience}/>)
            }
        </VerticalTimeline>
    </div>
  )
}

export default Timeline