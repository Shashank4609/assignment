import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { CgBitbucket } from "react-icons/cg";
import { VscAzureDevops } from "react-icons/vsc";
import { SiGitlab } from "react-icons/si";
import { RiKey2Line } from "react-icons/ri";
import StatCard from '../components/StatCard.jsx';
import { useNavigate } from "react-router-dom";
import '../css/signin.css';

function SignIn() {
  const [selectedOption, setSelectedOption] = useState('saas');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSignIn = () => {
    navigate("/profile");
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="stats-container">
          <StatCard />
        </div>
        <img 
          src="/images/Subtract.png" 
          alt="background" 
          className="background-logo"
        />
      </div>
      
      <div className="signin-right">
        <div className="signin-content">
          <div className="logo-container">           
            <div className="logo-header">
      <img src="/images/logo (1).png" alt="CodeAnt AI Logo" className="logo-image" />    
      <h2>CodeAnt AI</h2>     
    </div>
       <div className='header'>
       <h1>Welcome to CodeAnt AI</h1>
       </div>
           
          </div>

          <div className="signin-options">
            <button 
              className={`option-button ${selectedOption === 'saas' ? 'active' : ''}`}
              onClick={() => handleOptionClick('saas')}
            >
              SAAS
            </button>
            <button 
              className={`option-button ${selectedOption === 'self-hosted' ? 'active' : ''}`}
              onClick={() => handleOptionClick('self-hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="signin-providers">
            {selectedOption === 'saas' ? (
              <>
                <button className="provider-button" onClick={handleSignIn}>
                  <IoLogoGithub className="provider-icon" /> 
                  <span>Sign in with Github</span>
                </button>
                <button className="provider-button" onClick={handleSignIn}>
                  <CgBitbucket className="provider-icon" /> 
                  <span>Sign in with Bitbucket</span>
                </button>
                <button className="provider-button" onClick={handleSignIn}>
                  <VscAzureDevops className="provider-icon" /> 
                  <span>Sign in with Azure Devops</span>
                </button>
                <button className="provider-button" onClick={handleSignIn}>
                  <SiGitlab className="provider-icon" /> 
                  <span>Sign in with GitLab</span>
                </button>
              </>
            ) : (
              <>
                <button className="provider-button" onClick={handleSignIn}>
                  <SiGitlab className="provider-icon" /> 
                  <span>Self Hosted GitLab</span>
                </button>
                <button className="provider-button" onClick={handleSignIn}>
                  <RiKey2Line className="provider-icon" /> 
                  <span>Sign in with SSO</span>
                </button>
              </>
            )}
          </div>

          <p className="privacy-policy">
            By signing up you agree to the <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

