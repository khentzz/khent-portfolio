import React, { useEffect, useRef, useState } from 'react';

function Skills() {
  const [visibleBars, setVisibleBars] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleBars((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const refs = skillRefs.current;
    refs.forEach((el) => el && observer.observe(el));

    return () => {
      refs.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, description: 'Hooks, Context API, component architecture' },
        { name: 'JavaScript', level: 85, description: 'ES6+, DOM manipulation, async/await' },
        { name: 'HTML5 / CSS3', level: 90, description: 'Semantic HTML, Flexbox, Grid, animations' },
        { name: 'Vite', level: 80, description: 'Build tool, hot module replacement' },
        { name: 'Responsive Design', level: 88, description: 'Mobile-first, media queries, fluid layouts' },
      ],
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'PHP', level: 85, description: 'OOP, PDO, sessions, file handling' },
        { name: 'REST API Development', level: 82, description: 'Endpoint design, CRUD, JSON responses' },
        { name: 'Cron Jobs', level: 75, description: 'Scheduled tasks, automation scripts' },
        { name: 'Authentication & Authorization', level: 80, description: 'Session-based, role-based access' },
      ],
    },
    {
      name: 'Database & Data',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, description: 'Complex queries, joins, indexing, optimization' },
        { name: 'Database Design', level: 82, description: 'ER diagrams, normalization, relationships' },
        { name: 'Data Management', level: 78, description: 'CRUD operations, data integrity, backups' },
        { name: 'SQL Optimization', level: 75, description: 'Query tuning, EXPLAIN, indexing strategies' },
      ],
    },
    {
      name: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85, description: 'Version control, branching, pull requests' },
        { name: 'VS Code', level: 90, description: 'Extensions, debugging, shortcuts' },
        { name: 'XAMPP', level: 80, description: 'Local development environment' },
        { name: 'Postman', level: 72, description: 'API testing, collections, environments' },
        { name: 'GitHub Pages / Vercel', level: 75, description: 'Deployment, hosting, CI/CD' },
      ],
    },
    {
      name: 'Soft Skills',
      icon: '🧠',
      skills: [
        { name: 'Problem Solving', level: 90, description: 'Analytical thinking, debugging, optimization' },
        { name: 'Leadership', level: 85, description: 'Student government, team coordination' },
        { name: 'Technical Writing', level: 80, description: 'Documentation, reports, READMEs' },
        { name: 'Communication', level: 82, description: 'Technical explanations, presentations' },
        { name: 'Project Documentation', level: 78, description: 'System docs, user manuals, guides' },
      ],
    },
    {
      name: 'Currently Learning',
      icon: '📚',
      skills: [
        { name: '.NET / C#', level: 30, description: 'Building desktop and web applications' },
        { name: 'Advanced React', level: 40, description: 'Performance optimization, advanced patterns' },
        { name: 'Cloud Deployment', level: 25, description: 'AWS, Azure, Vercel, scaling' },
        { name: 'TypeScript', level: 35, description: 'Type safety, interfaces, generics' },
        { name: 'Docker', level: 20, description: 'Containerization, deployment' },
      ],
    },
  ];

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>Technical Skills</h2>
        <p style={{ color: 'var(--gray)', marginBottom: '2.5rem', fontSize: '1.2rem' }}>
          {totalSkills} skills across {skillCategories.length} categories · Hover over a skill for details
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem' }}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                borderRadius: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{category.icon}</span>
                <h3 style={{ color: 'var(--accent)', margin: 0, fontSize: '1.5rem' }}>{category.name}</h3>
              </div>

              {category.skills.map((skill, idx) => {
                const skillIndex = `${catIndex}-${idx}`;
                const isVisible = visibleBars[skillIndex];
                const isHovered = hoveredSkill === skillIndex;

                return (
                  <div
                    key={idx}
                    className="skill-bar-container"
                    ref={(el) => {
                      if (el && !el.hasAttribute('data-index')) {
                        el.setAttribute('data-index', skillIndex);
                        skillRefs.current[skillRefs.current.length] = el;
                      }
                    }}
                    style={{ marginBottom: '1.5rem' }}
                    onMouseEnter={() => setHoveredSkill(skillIndex)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.3rem',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: '600', fontSize: '1.05rem', cursor: 'default' }}>
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--gray)',
                            display: 'block',
                            fontStyle: 'italic',
                            maxHeight: isHovered ? '60px' : '0',
                            opacity: isHovered ? 1 : 0,
                            overflow: 'hidden',
                            marginTop: isHovered ? '0.3rem' : '0',
                            transition: 'max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease',
                          }}
                        >
                          {skill.description}
                        </span>
                      </div>
                      <span style={{ fontWeight: '700', color: 'var(--accent)', fontSize: '1rem', marginLeft: '1rem' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track" style={{ height: '12px', background: 'var(--bg)', borderRadius: '8px', overflow: 'hidden' }}>
                      <div
                        className="skill-bar-fill"
                        style={{
                          height: '100%',
                          width: isVisible ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, var(--primary), ${skill.level > 70 ? 'var(--accent)' : 'var(--primary)'})`,
                          borderRadius: '8px',
                          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
          }}
        >
          <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="stat-number" style={{ fontSize: '3.5rem' }}>{totalSkills}</div>
            <div style={{ color: 'var(--gray)', fontSize: '1rem' }}>Total Skills</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="stat-number" style={{ fontSize: '3.5rem' }}>{skillCategories.length}</div>
            <div style={{ color: 'var(--gray)', fontSize: '1rem' }}>Categories</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="stat-number" style={{ fontSize: '3.5rem' }}>5+</div>
            <div style={{ color: 'var(--gray)', fontSize: '1rem' }}>Currently Learning</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="stat-number" style={{ fontSize: '3.5rem' }}>3+</div>
            <div style={{ color: 'var(--gray)', fontSize: '1rem' }}>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;