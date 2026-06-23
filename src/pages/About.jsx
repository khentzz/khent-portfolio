import React, { useEffect, useRef } from 'react';

function About() {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timelineRef.current;
    items.forEach((el) => el && observer.observe(el));

    return () => {
      items.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const timelineData = [
    { year: '2022', title: 'Started Learning Programming', description: 'Began my journey into software development with HTML, CSS, and JavaScript.' },
    { year: '2023', title: 'Built First Ordering System', description: 'Developed my first full-stack web application using PHP and MySQL.' },
    { year: '2024', title: 'HRIS Capstone Project', description: 'Completed a comprehensive Human Resource Information System as a capstone project.' },
    { year: '2025', title: 'Built FoodHub POS', description: 'Created a complete Point of Sale system with inventory and reporting features.' },
    { year: '2026', title: 'Seeking Software Engineer Opportunities', description: 'Looking for roles where I can contribute, learn, and build impactful software.' },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="reveal">My Story</h2>
        <div className="glass-card" style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.1rem' }}>
            I am a BS Information Technology graduate from Central Philippines State University – Valladolid Campus.
            My passion lies in building practical, database-driven solutions that solve real problems.
            I thrive at the intersection of backend logic, frontend experience, and system architecture.
          </p>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              ref={(el) => (timelineRef.current[index] = el)}
            >
              <div className="timeline-content">
                <h3 style={{ color: 'var(--accent)' }}>{item.year}</h3>
                <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;