import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'Story' },
    { path: '/skills', name: 'Skills' },
    { path: '/projects', name: 'Projects' },
    { path: '/achievements', name: 'Achievements' },
    { path: '/resume', name: 'Resume' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="navbar" style={{ padding: '1.2rem 0' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <Link 
          to="/" 
          className="logo" 
          style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#06B6D4';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#3B82F6';
            e.target.style.transform = 'scale(1)';
          }}
        >
          KL
        </Link>
        
        <div 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ 
            fontSize: '1.8rem', 
            cursor: 'pointer',
            color: 'var(--text)',
            display: 'none',
          }}
        >
          ☰
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={{ 
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          {navLinks.map((link) => (
            <li key={link.path} style={{ display: 'inline-block' }}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                style={{
                  color: location.pathname === link.path ? '#3B82F6' : 'var(--text)',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  letterSpacing: '0.3px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#06B6D4';
                  e.target.style.transform = 'translateY(-2px)';
                  // Find the underline span inside this link
                  const underline = e.target.querySelector('.nav-underline');
                  if (underline) {
                    underline.style.width = '100%';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = location.pathname === link.path ? '#3B82F6' : 'var(--text)';
                  e.target.style.transform = 'translateY(0)';
                  const underline = e.target.querySelector('.nav-underline');
                  if (underline) {
                    underline.style.width = '0%';
                  }
                }}
              >
                {link.name}
                <span
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    width: location.pathname === link.path ? '100%' : '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '2px',
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu styles - inline for completeness */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger {
            display: block !important;
          }
          
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #0F172A;
            padding: 2rem;
            gap: 1.5rem !important;
            border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          }
          
          .nav-links.active {
            display: flex !important;
          }
          
          .nav-links li {
            display: block !important;
            text-align: center;
          }
          
          .nav-links a {
            font-size: 1.2rem !important;
            padding: 0.5rem 0;
            display: block !important;
          }
          
          .nav-underline {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;