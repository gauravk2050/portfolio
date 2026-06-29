import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Multiplier AI · ZeroToOne AI (Remote)</h4>
            <p>
              Leading data engineering initiatives, building scalable AWS pipelines processing multi-million records daily. Integrated Claude AI for code optimization and accelerated development cycles.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Analyst Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Sun Life Global Solutions · Gurugram, India</h4>
            <p>
              Delivered 35+ production data taskflows. Led migration of legacy systems to IICS/PySpark. Mentored junior engineers and achieved 70% efficiency gains. Received 2x Client Appreciation Awards and Owner's Mindset Award.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">ABES Institute of Technology</h4>
            <p>
              Foundation in computer science, algorithms, and software engineering principles.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
