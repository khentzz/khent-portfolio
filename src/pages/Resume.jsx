import React from 'react';

function Resume() {
  return (
    <section>
      <div className="container">
        <h2 className="reveal">Resume</h2>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--gray)' }}>Download my full resume for a detailed overview of my experience and skills.</p>
          <a href="/resume.pdf" download className="btn-primary">Download Resume (PDF)</a>
        </div>
        <div className="glass-card glass-card-dark">
          <h3>Education</h3>
          <p><strong>BS Information Technology</strong></p>
          <p style={{ color: 'var(--gray)' }}>Central Philippines State University – Valladolid Extension</p>
          <p style={{ color: 'var(--gray)' }}>Magna Cum Laude</p>
          <h3 style={{ marginTop: '1.5rem' }}>Key Skills</h3>
          <div className="skill-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs', 'Database Design'].map(skill => (
              <span key={skill} style={{ background: 'var(--card)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem' }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;