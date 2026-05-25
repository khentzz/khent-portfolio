import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpg'

function Home() {
    return (
        <section>
            <div className="container">
                <div className="hero">
                    <div>
                        <h1>KHENT LANZAR</h1>
                        <p style={{ fontSize: '1.25rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                            Bachelor of Science in Information Technology
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#06B6D4', marginBottom: '1rem' }}>
                            Full Stack Developer | Systems & Database Analyst
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Building practical web-based solutions through technology and innovation.
                        </p>
                        <Link to="/projects" className="btn-primary">View Projects</Link>
                        <a href="https://raw.githubusercontent.com/khentzz/khent-portfolio/main/public/resume.pdf" download className="btn-outline">Download CV</a>

                        <div className="stats">
                            <div className="stat-card glass-card">
                                <div className="stat-number">2+</div>
                                <div>Major Projects</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-number">1</div>
                                <div>Best Programmer Award</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-number">3+</div>
                                <div>Years Leadership</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-number">PHP</div>
                                <div>MySQL</div>
                                <div>JavaScript</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="Khent Lanzar" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home