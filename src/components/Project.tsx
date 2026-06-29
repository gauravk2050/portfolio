import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>🔄</span>
                </div>
                <h2>Trillium Data Migration</h2>
                <p>Migrated legacy compliance systems to IICS and PySpark. Built fraud detection algorithms and data quality solutions. Delivered 20+ automated taskflows for enterprise data processing.</p>
                <div className="project-tags">
                    <span>IICS</span>
                    <span>PySpark</span>
                    <span>AutoSys</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>🌐</span>
                </div>
                <h2>Global Remittance Pipeline</h2>
                <p>Led development of CSV to XML automated pipeline for international money transfers. Implemented REST/SOAP API integrations with comprehensive error handling and retry mechanisms.</p>
                <div className="project-tags">
                    <span>PySpark</span>
                    <span>REST API</span>
                    <span>SOAP</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>📊</span>
                </div>
                <h2>Enterprise Data Mart</h2>
                <p>Built centralized repository consolidating HR, Finance, and Business metrics. Streamlined reporting processes and achieved 70% reduction in manual effort across departments.</p>
                <div className="project-tags">
                    <span>SQL</span>
                    <span>IICS</span>
                    <span>Data Modeling</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>💱</span>
                </div>
                <h2>FX Rates System</h2>
                <p>Architected real-time ETL pipelines for financial conversion rates from SAP to SQL servers. Enabled real-time data synchronization for critical financial operations.</p>
                <div className="project-tags">
                    <span>SAP</span>
                    <span>SQL Server</span>
                    <span>SharePoint API</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>☁️</span>
                </div>
                <h2>AWS Data Lake Architecture</h2>
                <p>Designed and implemented scalable data lake on AWS using S3, Glue, and Athena. Built cost-effective storage and processing solutions for multi-million record datasets.</p>
                <div className="project-tags">
                    <span>AWS</span>
                    <span>Terraform</span>
                    <span>CI/CD</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #5000ca 0%, #8b5cf6 100%)', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '3rem'}}>🤖</span>
                </div>
                <h2>GenAI Code Optimization</h2>
                <p>Integrated Claude AI into development workflows for code optimization, automated testing, and accelerated development cycles. Significantly improved team productivity.</p>
                <div className="project-tags">
                    <span>Claude AI</span>
                    <span>Python</span>
                    <span>Automation</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;
