import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile.jpg';

function Home() {
  useEffect(() => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
      hero.classList.add('animate-fade-up');
    }
  }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 20 + 10 + 's',
              animationDelay: Math.random() * 10 + 's',
              background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
            }}
          />
        ))}
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        <div className="hero-content" style={{ opacity: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ 
                color: 'var(--accent)', 
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', 
                marginBottom: '0.5rem', 
                letterSpacing: '3px',
                fontWeight: '500',
              }}>
                KHENT LANZAR
              </p>
              <h1 style={{ 
                fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
                marginBottom: '0.5rem',
                lineHeight: '1.3',
              }}>
                Aspiring<br />Software Engineer
              </h1>
              <p style={{ 
                fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', 
                color: 'var(--gray)', 
                marginBottom: '2.5rem', 
                maxWidth: '550px',
                lineHeight: '1.6',
              }}>
                I build real-world software solutions using React, PHP, MySQL, REST APIs, and modern web technologies.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '12px' }}>
                  View Projects
                </Link>
                <a href="/resume.pdf" download className="btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '12px' }}>
                  Download Resume
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                width: 'clamp(250px, 30vw, 380px)', 
                height: 'clamp(250px, 30vw, 380px)', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '4px solid var(--primary)',
                boxShadow: '0 0 80px rgba(59, 130, 246, 0.25)',
              }}>
                <img src={profilePhoto} alt="Khent Lanzar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem', 
            marginTop: '4rem',
          }}>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem' }}>
              <div className="stat-number" style={{ fontSize: '3.2rem' }}>3+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--gray)' }}>Major Projects</div>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem' }}>
              <div className="stat-number" style={{ fontSize: '3.2rem' }}>1</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--gray)' }}>Best Programmer Award</div>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem' }}>
              <div className="stat-number" style={{ fontSize: '3.2rem' }}>3+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--gray)' }}>Years Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;