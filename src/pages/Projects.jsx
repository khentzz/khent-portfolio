import { useState } from 'react'
import { projectsData } from '../data/projectsData'

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeProject, setActiveProject] = useState(null)
    const [expandedProjects, setExpandedProjects] = useState({})

    const toggleExpand = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }))
    }

    const openModal = (projectId, imageUrl) => {
        setSelectedImage(imageUrl)
        setActiveProject(projectId)
    }

    const closeModal = () => {
        setSelectedImage(null)
        setActiveProject(null)
    }

const getProjectImages = (project) => {
    const images = []

    if (project.id === 1) {
        // HRIS images
        if (project.screenshots.login) images.push({ url: project.screenshots.login, title: 'Login Page' })
        if (project.screenshots.dashboard) images.push({ url: project.screenshots.dashboard, title: 'Dashboard' })
        if (project.screenshots.profile) images.push({ url: project.screenshots.profile, title: 'Employee Profile' })
        if (project.screenshots.leave) images.push({ url: project.screenshots.leave, title: 'Leave Management' })
        if (project.screenshots.admin) images.push({ url: project.screenshots.admin, title: 'Admin Dashboard' })
        if (project.screenshots.erd) images.push({ url: project.screenshots.erd, title: 'Database ERD' })
        if (project.screenshots.attendanceKiosk) images.push({ url: project.screenshots.attendanceKiosk, title: 'Mobile Attendance Kiosk' })
        if (project.screenshots.dtr) images.push({ url: project.screenshots.dtr, title: 'Daily Time Record (DTR)' })
    } else if (project.id === 2) {
        // Ordering System images
        if (project.screenshots.products) images.push({ url: project.screenshots.products, title: 'Product Listing' })
        if (project.screenshots.checkout) images.push({ url: project.screenshots.checkout, title: 'Checkout' })
        if (project.screenshots.database) images.push({ url: project.screenshots.database, title: 'Database Design' })
    } else if (project.id === 3) {
        // FoodHub POS images
        if (project.screenshots.dashboard) images.push({ url: project.screenshots.dashboard, title: 'Admin Dashboard' })
        if (project.screenshots.pos) images.push({ url: project.screenshots.pos, title: 'Cashier POS' })
        if (project.screenshots.reports) images.push({ url: project.screenshots.reports, title: 'Sales Reports' })
        if (project.screenshots.receipt) images.push({ url: project.screenshots.receipt, title: 'Receipt Sample' })
    }

    return images
}

    return (
        <section>
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectsData.map(project => {
                        const images = getProjectImages(project)
                        const mainImage = images[0]?.url || 'https://via.placeholder.com/800x400/1E293B/3B82F6?text=Project+Screenshot'
                        const isExpanded = expandedProjects[project.id] || false

                        return (
                            <div key={project.id} className="project-card">
                                <div className="project-screenshot" onClick={() => openModal(project.id, mainImage)} style={{ cursor: 'pointer' }}>
                                    <img
                                        src={mainImage}
                                        alt={project.title}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/800x400/1E293B/3B82F6?text=Click+to+view+screenshots'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        background: 'rgba(0,0,0,0.7)',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                    }}>
                                        📸 {images.length} screenshots
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p><strong>Overview:</strong> {project.overview}</p>

                                    <p><strong>Technologies:</strong></p>
                                    <div className="skill-items" style={{ marginBottom: '1rem' }}>
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="skill-badge">{tech}</span>
                                        ))}
                                    </div>

                                    {/* Always visible: First 5 features */}
                                    <p><strong>Key Features:</strong></p>
                                    <ul className="features-list">
                                        {project.features.slice(0, 5).map(feature => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>

                                    {/* If there are more than 5 features, show a hint */}
                                    {project.features.length > 5 && !isExpanded && (
                                        <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                            + {project.features.length - 5} more features...
                                        </p>
                                    )}

                                    {/* Expandable Content - Only shows when "See More" is clicked */}
                                    {isExpanded && (
                                        <>
                                            {/* Remaining features */}
                                            {project.features.length > 5 && (
                                                <>
                                                    <p><strong>Additional Features:</strong></p>
                                                    <ul className="features-list">
                                                        {project.features.slice(5).map(feature => (
                                                            <li key={feature}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}

                                            <p><strong>My Contributions:</strong></p>
                                            <ul className="features-list">
                                                {project.contributions.map(contribution => (
                                                    <li key={contribution}>{contribution}</li>
                                                ))}
                                            </ul>

                                            <p><strong>Challenge Solved:</strong></p>
                                            <p>{project.challenge}</p>

                                            {/* Image Gallery Thumbnails */}
                                            {images.length > 1 && (
                                                <div style={{ marginTop: '1.5rem' }}>
                                                    <p><strong>Screenshots Gallery:</strong> (click to enlarge)</p>
                                                    <div style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                                                        gap: '0.5rem',
                                                        marginTop: '0.5rem'
                                                    }}>
                                                        {images.slice(0, 6).map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                onClick={() => openModal(project.id, img.url)}
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    border: '2px solid var(--primary)',
                                                                    borderRadius: '0.5rem',
                                                                    overflow: 'hidden',
                                                                    aspectRatio: '16/9'
                                                                }}
                                                            >
                                                                <img
                                                                    src={img.url}
                                                                    alt={img.title}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                    onError={(e) => {
                                                                        e.target.src = 'https://via.placeholder.com/100x60/1E293B/3B82F6?text='
                                                                    }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {images.length > 6 && (
                                                        <p style={{ fontSize: '0.8rem', color: 'var(--gray)', marginTop: '0.5rem' }}>
                                                            +{images.length - 6} more screenshots
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* See More / See Less Button */}
                                    <button
                                        onClick={() => toggleExpand(project.id)}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid var(--primary)',
                                            color: 'var(--primary)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            cursor: 'pointer',
                                            marginTop: '1rem',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--primary)'
                                            e.target.style.color = 'white'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent'
                                            e.target.style.color = 'var(--primary)'
                                        }}
                                    >
                                        {isExpanded ? 'See Less ▲' : 'See More ▼'}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
                        <img
                            src={selectedImage}
                            alt="Full size screenshot"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '0.5rem'
                            }}
                        />
                        <div style={{
                            textAlign: 'center',
                            color: 'white',
                            marginTop: '1rem',
                            position: 'absolute',
                            bottom: '20px',
                            left: 0,
                            right: 0
                        }}>
                            <p>Click anywhere to close</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects