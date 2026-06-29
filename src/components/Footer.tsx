import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  const name = process.env.REACT_APP_NAME || 'Your Name';
  const githubUrl = process.env.REACT_APP_GITHUB_URL || '#';
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL || '#';
  const email = process.env.REACT_APP_EMAIL || '';

  return (
    <footer>
      <div>
        <a href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        {email && <a href={`mailto:${email}`}><EmailIcon/></a>}
      </div>
      <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
