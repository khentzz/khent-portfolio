import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/mkoeqoyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent successfully! I will get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus({ 
            type: 'error', 
            message: '❌ ' + data.errors.map(err => err.message).join(', ') 
          });
        } else {
          setStatus({ 
            type: 'error', 
            message: '❌ Something went wrong. Please try again.' 
          });
        }
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '❌ Network error. Please check your connection.' 
      });
    }

    setIsSending(false);
  };

  return (
    <section>
      <div className="container">
        <h2 className="reveal">Contact</h2>
        <div className="contact-grid">
          <div className="glass-card">
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
            {status.message && (
              <div style={{ 
                padding: '0.75rem 1rem', 
                borderRadius: '0.5rem',
                background: status.type === 'success' ? 'rgba(46, 182, 125, 0.15)' : 'rgba(224, 30, 90, 0.15)',
                color: status.type === 'success' ? '#2EB67D' : '#E01E5A',
                border: `1px solid ${status.type === 'success' ? '#2EB67D' : '#E01E5A'}`,
              }}>
                {status.message}
              </div>
            )}
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ 
                padding: '18px 22px', 
                fontSize: '1rem', 
                borderRadius: '12px',
                background: 'var(--card)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: 'var(--text)',
                width: '100%',
                marginBottom: '12px',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3B82F6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ 
                padding: '18px 22px', 
                fontSize: '1rem', 
                borderRadius: '12px',
                background: 'var(--card)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: 'var(--text)',
                width: '100%',
                marginBottom: '12px',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3B82F6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ 
                padding: '18px 22px', 
                fontSize: '1rem', 
                borderRadius: '12px',
                background: 'var(--card)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: 'var(--text)',
                width: '100%',
                resize: 'vertical',
                fontFamily: 'inherit',
                marginBottom: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                minHeight: '120px',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3B82F6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isSending} 
              style={{ 
                padding: '16px 28px', 
                fontSize: '1rem',
                width: '100%',
                borderRadius: '12px',
                fontWeight: '600',
              }}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;