import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section>
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info glass-card">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:khentlanzar@gmail.com" style={{ color: '#3B82F6' }}>khentlanzar@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>🐙</span>
              <a href="https://github.com/khentzz" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6' }}>github.com/khentzz</a>
            </div>
            <div className="contact-item">
              <span>🔗</span>
              <a href="https://www.linkedin.com/in/khent-lanzar-97ba23343/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6' }}>linkedin.com/in/khent-lanzar</a>
            </div>
            <div className="contact-item">
              <span>📘</span>
              <a href="https://facebook.com/khent.lanzar.2025" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6' }}>facebook.com/khent.lanzar.2025</a>
            </div>
          </div>
          
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea 
              rows="5" 
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact