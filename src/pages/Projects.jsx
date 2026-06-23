import React, { useState, useEffect, useCallback } from 'react';
import { projectsData } from '../data/projectsData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const getProjectImages = (project) => {
    const images = [];
    if (project.id === 1) {
      if (project.screenshots.login) images.push({ url: project.screenshots.login, title: 'Login Page' });
      if (project.screenshots.dashboard) images.push({ url: project.screenshots.dashboard, title: 'Dashboard' });
      if (project.screenshots.profile) images.push({ url: project.screenshots.profile, title: 'Employee Profile' });
      if (project.screenshots.leave) images.push({ url: project.screenshots.leave, title: 'Leave Management' });
      if (project.screenshots.admin) images.push({ url: project.screenshots.admin, title: 'Admin Dashboard' });
      if (project.screenshots.erd) images.push({ url: project.screenshots.erd, title: 'Database ERD' });
      if (project.screenshots.attendanceKiosk) images.push({ url: project.screenshots.attendanceKiosk, title: 'Mobile Attendance Kiosk' });
      if (project.screenshots.dtr) images.push({ url: project.screenshots.dtr, title: 'Daily Time Record (DTR)' });
    } else if (project.id === 2) {
      if (project.screenshots.products) images.push({ url: project.screenshots.products, title: 'Product Listing' });
      if (project.screenshots.checkout) images.push({ url: project.screenshots.checkout, title: 'Checkout' });
      if (project.screenshots.database) images.push({ url: project.screenshots.database, title: 'Database Design' });
    } else if (project.id === 3) {
      if (project.screenshots.dashboard) images.push({ url: project.screenshots.dashboard, title: 'Admin Dashboard' });
      if (project.screenshots.pos) images.push({ url: project.screenshots.pos, title: 'Cashier POS' });
      if (project.screenshots.reports) images.push({ url: project.screenshots.reports, title: 'Sales Reports' });
      if (project.screenshots.receipt) images.push({ url: project.screenshots.receipt, title: 'Receipt Sample' });
    }
    return images;
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsViewerOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openViewer = (index) => {
    setViewerIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const nextImage = () => {
    const images = getProjectImages(selectedProject);
    if (viewerIndex < images.length - 1) {
      setViewerIndex(viewerIndex + 1);
    }
  };

  const prevImage = () => {
    if (viewerIndex > 0) {
      setViewerIndex(viewerIndex - 1);
    }
  };

  // Keyboard support
  const handleKeyDown = useCallback((e) => {
    if (isViewerOpen) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'Escape') {
        closeViewer();
      }
    }
    if (e.key === 'Escape' && selectedProject) {
      closeModal();
    }
  }, [isViewerOpen, viewerIndex, selectedProject]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!selectedProject) {
    return (
      <section>
        <div className="container">
          <h2 className="reveal">Projects</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>
            Click on a project to explore the full case study.
          </p>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="project-card-mini"
                onClick={() => openModal(project)}
              >
                <div className="icon">{project.id === 1 ? '👔' : project.id === 2 ? '🛒' : '🍔'}</div>
                <h3>{project.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{project.technologies.slice(0, 3).join(' · ')}</p>
                <div style={{ marginTop: '1rem' }}>
                  <span style={{ background: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem' }}>View Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const images = getProjectImages(selectedProject);

  return (
    <>
      {/* Project Detail Modal */}
      <div className="project-modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '1000px', padding: '2rem' }}>
          <button className="modal-close" onClick={closeModal}>✕</button>
          <h2 style={{ marginBottom: '1rem' }}>{selectedProject.title}</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '1.5rem' }}>{selectedProject.overview}</p>

          <h3 style={{ marginBottom: '0.5rem' }}>Technologies</h3>
          <div className="skill-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {selectedProject.technologies.map(tech => (
              <span key={tech} style={{ background: 'var(--card)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem' }}>{tech}</span>
            ))}
          </div>

          <h3 style={{ marginBottom: '0.5rem' }}>Features</h3>
          <div className="feature-grid">
            {selectedProject.features.map(feature => (
              <div key={feature} className="feature-item">✓ {feature}</div>
            ))}
          </div>

          <h3 style={{ marginBottom: '0.5rem' }}>My Contributions</h3>
          <ul style={{ color: 'var(--gray)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            {selectedProject.contributions.map(contribution => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>

          <h3 style={{ marginBottom: '0.5rem' }}>Challenge Solved</h3>
          <p style={{ color: 'var(--gray)', marginBottom: '1.5rem' }}>{selectedProject.challenge}</p>

          <h3 style={{ marginBottom: '0.5rem' }}>Screenshots</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            cursor: 'pointer',
          }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openViewer(idx)}
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  transition: 'all 0.3s ease',
                  aspectRatio: '16/9',
                  background: 'var(--bg)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.7)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'white',
                  pointerEvents: 'none',
                }}>
                  🔍 {idx + 1}/{images.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Image Viewer */}
      {isViewerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.92)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeViewer}
        >
          <button
            onClick={closeViewer}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2.5rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              zIndex: 3001,
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(90deg)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(0)'}
          >
            ✕
          </button>

          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '80%' }} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[viewerIndex]?.url}
              alt={images[viewerIndex]?.title}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '0.5rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
            
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'var(--gray)',
              fontSize: '0.9rem',
              textAlign: 'center',
            }}>
              {images[viewerIndex]?.title} · {viewerIndex + 1} / {images.length}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '16px 20px',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  opacity: viewerIndex === 0 ? 0.3 : 1,
                  pointerEvents: viewerIndex === 0 ? 'none' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '16px 20px',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  opacity: viewerIndex === images.length - 1 ? 0.3 : 1,
                  pointerEvents: viewerIndex === images.length - 1 ? 'none' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Projects;