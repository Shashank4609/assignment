import React, { useState } from 'react';
import '../css/profile.css';
import { IoHomeOutline, IoSettingsOutline, IoAddOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { LogOut, Phone, X, Menu } from 'lucide-react';
import RepositoryData from '../components/RepositoryData.jsx';
import { IoIosSearch } from "react-icons/io";
 function Profile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <div className="app-container">
      
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <img src="/images/logo (1).png" alt="CodeAnt AI" className="logo" />
            <h1>CodeAnt AI</h1>
          </div>
          <button 
            className="close-button"
            onClick={toggleMobileMenu}
          >
            <X size={24} />
          </button>
          <div className="user-select">
            <button className="user-button">
              UtkarshDhairyaPanwar
              <span className="chevron">▼</span>
            </button>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item active">
            <IoHomeOutline /> Repositories
          </a>
          <a href="#" className="nav-item">
            <span className="code-icon">{"</>"}</span> AI Code Review
          </a>
          <a href="#" className="nav-item">
            <IoIosCloudOutline /> Cloud Security
          </a>
          <a href="#" className="nav-item">
            <IoHomeOutline /> How to Use
          </a>
          <a href="#" className="nav-item">
            <IoSettingsOutline /> Settings
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <Phone /> Support
          </a>
          
          <a href="#" className="nav-item">
            <LogOut /> Logout
          </a>
        </div>
      </aside>

      <main className="main-content">
        <div className="mobile-header">
        <div className="mobile-logo">
            <img src="/images/logo (1).png" alt="CodeAnt AI" className="logo" />
            <h1>CodeAnt AI</h1>
          </div>
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
        <div className='repoback'>
        <div className="repositories-header">
          <div className="title-section">
            <h1>Repositories</h1>
            <span className="repo-count">33 total repositories</span>
          </div>
          <div className="action-buttons">
            <button className="refresh-button">
              <FiRefreshCw /> Refresh All
            </button>
            <button className="add-button">
              <IoAddOutline /> Add Repository
            </button>
          </div>
        </div>

        <div className="search-bar">
      <IoIosSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search Repositories"
        className="search-input"
      />
    </div>

        <RepositoryData />
        </div>
      </main>
    </div>
  );
}

export default Profile;