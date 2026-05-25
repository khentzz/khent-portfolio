function Resume() {
  return (
    <section>
      <div className="container">
        <h2>Resume</h2>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1rem' }}>Click the button below to download my full resume.</p>
          <a href="/resume.pdf" download className="btn-primary">Download Resume (PDF)</a>
        </div>
        
        <div className="glass-card">
          <h3>Education</h3>
          <p><strong>Bachelor of Science in Information Technology</strong></p>
          <p>Central Philippines State University – Valladolid Extension</p>
          <p>Graduated with Magna Cum Laude</p>
          
          <h3 style={{ marginTop: '1.5rem' }}>Skills Summary</h3>
          <div className="skill-items">
            {['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Git', 'React'].map(skill => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
          
          <h3 style={{ marginTop: '1.5rem' }}>Projects</h3>
          <p><strong>Human Resource Information System (HRIS)</strong> - Web-based employee management system</p>
          <p><strong>Ordering System</strong> - Online ordering platform with cart functionality</p>
          
          <h3 style={{ marginTop: '1.5rem' }}>Awards & Leadership</h3>
          <p>🏆 Best Programmer Award</p>
          <p>🎓 Magna Cum Laude</p>
          <p>👔 SSG Vice President, Speaker, Spokesperson</p>
        </div>
      </div>
    </section>
  )
}

export default Resume