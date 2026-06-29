import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "PySpark",
    "SQL",
    "Java",
    "Shell Scripting",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Kafka",
    "IICS",
];

const labelsSecond = [
    "AWS",
    "GCP",
    "Terraform",
    "Docker",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Linux",
    "AutoSys",
];

const labelsThird = [
    "OpenAI",
    "Claude AI",
    "LangChain",
    "RAG",
    "Vector Databases",
    "LLM Integration",
    "Prompt Engineering",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Building scalable data pipelines processing 10M+ records daily. Expert in ETL/ELT processes, data warehousing, and creating robust data architectures for enterprise systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Designing and deploying cloud-native data solutions on AWS and GCP. Implementing Infrastructure as Code, CI/CD pipelines, and automated deployment workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & Automation</h3>
                    <p>Integrating AI/ML capabilities into data workflows. Experience with LLM integration for code optimization, automated testing, and intelligent data processing solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
