import React from 'react';
import '../css/StatCard.css';

const StatCard = () => (
  <div className="stat-card">
    <div className="stat-header">
      <img src="/images/logo (1).png" alt="CodeAnt AI Logo" className="stat-logo" />
      <h3>AI to Detect & Autofix Bad Code</h3>
    </div>
    
    <div className="stat-metrics">
      <div className="metric">
        <div className="metric-value">30+</div>
        <div className="metric-label">Language Support</div>
      </div>
      <div className="metric">
        <div className="metric-value">10K+</div>
        <div className="metric-label">Developers</div>
      </div>
      <div className="metric">
        <div className="metric-value">100K+</div>
        <div className="metric-label">Hours Saved</div>
      </div>
    </div>
    
    <div className="issues-card">
      <div className="issues-content">
        <div className="issues-top-row">
          <div className="issues-icon">
            <img src="/images/Group 4.png" alt="Chart" className="chart-icon" />
          </div>
          <div className="trend-container">
            <div className="trend">
              <span className="trend-arrow">↑</span>
              <span className="trend-value">14%</span>
            </div>
            <div className="issues-period">This week</div>
          </div>
        </div>
        <div className="issues-bottom-row">
          <div className="issues-label">Issues Fixed</div>
          <div className="issues-value">500K+</div>
        </div>
      </div>
    </div>
  </div>
);

export default StatCard;

