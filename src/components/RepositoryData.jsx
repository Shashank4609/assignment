import React from 'react';
import '../css/RepositoryData.css';
import { BsDatabase } from "react-icons/bs";
const repositories = [
  {
    id: 1,
    name: 'design-system',
    visibility: 'Public',
    language: 'React',
    size: '7320 KB',
    updatedAt: 'Updated 1 day ago'
  },
  {
    id: 2,
    name: 'codeant-ci-app',
    visibility: 'Private',
    language: 'Javascript',
    size: '5871 KB',
    updatedAt: 'Updated 2 days ago'
  },
  {
    id: 3,
    name: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    size: '4521 KB',
    updatedAt: 'Updated 5 days ago'
  },
  {
    id: 4,
    name: 'mobile-app',
    visibility: 'Public',
    language: 'Swift',
    size: '3096 KB',
    updatedAt: 'Updated 3 days ago'
  },
  {
    id: 5,
    name: 'e-commerce-platform',
    visibility: 'Private',
    language: 'Java',
    size: '6210 KB',
    updatedAt: 'Updated 6 days ago'
  },
  {
    id: 6,
    name: 'blog-website',
    visibility: 'Public',
    language: 'HTML/CSS',
    size: '1876 KB',
    updatedAt: 'Updated 4 days ago'
  },
  {
    id: 7,
    name: 'social-network',
    visibility: 'Private',
    language: 'PHP',
    size: '5432 KB',
    updatedAt: 'Updated 7 days ago'
  }
];

 function RepositoryData() {
  return (
    <div className="repository-list">
      {repositories.map((repo) => (
        <div key={repo.id} className="repository-item">
          <div className="repository-header">
            <h2 className="repository-name">{repo.name}</h2>
            <span className={`visibility-badge ${repo.visibility.toLowerCase()}`}>
              {repo.visibility}
            </span>
          </div>
          <div className="repository-details">
            <span className="language">
              
              {repo.language}
              <span className="language-dot"></span>
            </span>
            <span className="size"><BsDatabase />{repo.size}</span>
            <span className="updated-at">{repo.updatedAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepositoryData;