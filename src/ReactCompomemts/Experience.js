import WorkIcon from '../svgComponents/WorkIcon';
import SchoolIcon from '../svgComponents/SchoolIcon';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'

function Experience(){
     
    const contentStyle={ background: 'var(--colorbg2)', color: '#fff', 'box-shadow':"0 0 0" };
    const contentArrowStyle = {borderRight: '7px solid  var(--colorbg2)' };
    const iconStyle = { background: 'var(--colorbg2)', color: 'var(--color1)', fill:'var(--color3)'};

    return <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            position='right'
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="September 2024 - June 2025"
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Masters of Engineering - Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Western Ontario</h4>
            <p>
            Member of the Skylark satellite development team, focusing on ground station system selection and implementation.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            position='left'
            date="August 2023 - September 2024"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">IT Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Schneider's Computing</h4>
            <p>
                Operated satellite store, managing retail operations and desktop and laptop repairs while offering expert advice to customers. Frequently went on service calls for general IT issues and assisting the ISP team in network maintenance and customer connection.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date='January 2023 - May 2023'
            position='left'
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Ontario Tech University</h4>
            <p>
                Mentored 20 students through lab activities for the Software Systems and Integration course, focusing on building full stack systems using Java and Glassfish for the backend and vanilla Javascript for the front end.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2018 - May 2023"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            position='right'
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Computer Science - Data Science Specialization</h3>
            <h4 className="vertical-timeline-element-subtitle">Ontario Tech University</h4>
            <p>
                Minored in Astronomy while attaining a Data Science Specialization through various specialized courses like Data Mining, Database Systems and Concepts, Computer Vision, Big Data Analytics, Machine Learning, and Information Visualization.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2022 - June 2022"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            position='left'
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Deputy Tabulator</h3>
            <h4 className="vertical-timeline-element-subtitle">Elections Ontario</h4>
            <p>
                Operated a tabulating machine for Elections Ontario in a temporary role during the 2022 provincial election.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2017"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            position='left'
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Frontend Cashier and Meat Department Clerk</h3>
            <h4 className="vertical-timeline-element-subtitle">Food Basics</h4>
            <p>
                As a meat department clerk I managed shelf stock and cleanliness. As a cashier my responsibilities included handling money and age verification for tobacco and lottery products.
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
}

export default Experience