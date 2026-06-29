import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const name = process.env.REACT_APP_NAME || 'Your Name';
  const role = process.env.REACT_APP_ROLE || 'Your Role';
  const githubUrl = process.env.REACT_APP_GITHUB_URL || '#';
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL || '#';
  const avatarUrl = process.env.REACT_APP_AVATAR_URL || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=5000ca&color=fff&bold=true`;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarUrl} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{name}</h1>
          <p>{role}</p>

          <div className="mobile_social_icons">
            <a href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
