import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/skills', name: 'Skills' },
    { path: '/projects', name: 'Projects' },
    { path: '/achievements', name: 'Achievements' },
    { path: '/resume', name: 'Resume' },
    { path: '/contact', name: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">KL</Link>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                style={location.pathname === link.path ? { color: '#3B82F6' } : {}}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar