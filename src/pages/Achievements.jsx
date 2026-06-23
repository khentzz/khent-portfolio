import React from 'react';

function Achievements() {
  return (
    <section>
      <div className="container">
        <h2 className="reveal">Achievements</h2>
        <div className="achievement-grid">
          <div className="achievement-card featured">
            <div className="icon">🏆</div>
            <h3>Best Programmer Award</h3>
            <p style={{ color: 'var(--gray)' }}>Central Philippines State University</p>
            <p style={{ color: 'var(--gray)' }}>A.Y. 2025–2026</p>
          </div>
          <div className="achievement-card">
            <div className="icon">🎓</div>
            <h3>Magna Cum Laude</h3>
            <p style={{ color: 'var(--gray)' }}>BS Information Technology</p>
          </div>
          <div className="achievement-card">
            <div className="icon">👔</div>
            <h3>Leadership Journey</h3>
            <p style={{ color: 'var(--gray)' }}>Spokesperson → Speaker → Vice President</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>Supreme Student Government (2022–2025)</p>
          </div>
          <div className="achievement-card">
            <div className="icon">✍️</div>
            <h3>Feature Article Writer</h3>
            <p style={{ color: 'var(--gray)' }}>School Publication</p>
            <p style={{ color: 'var(--gray)' }}>A.Y. 2022–2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;