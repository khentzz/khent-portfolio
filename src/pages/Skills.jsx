function Skills() {
  const skills = {
    Languages: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Java', "C++", 'Kotlin'],
    Databases: ['MySQL', 'MySQL Workbench', 'Supabase'],
    Tools: ['VS Code', 'Git', 'GitHub', 'XAMPP', 'PHPMailer', 'Android Studio', 'Eclipse IDE', 'Formspree'],
    'Soft Skills': ['Leadership', 'Communication', 'Technical Writing', 'Problem Solving', 'Project Documentation']
  }

  return (
    <section>
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card skill-category">
              <h3>{category}</h3>
              <div className="skill-items">
                {items.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills