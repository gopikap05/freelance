import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Project details are required';
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Form is valid - handle submission
    setFormData({ fullName: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' });
    setErrors({});
    setToast(true);
    setTimeout(() => setToast(false), 5000);
  };

  const inputStyle = (hasError) => ({
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '14px',
    color: '#3d3529',
    background: '#fff',
    border: hasError ? '1px solid #e74c3c' : '0.5px solid #ddd6ca',
    borderRadius: '8px',
    padding: '10px 13px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });

  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#7a6e5f',
    marginBottom: '5px',
    display: 'block',
  };

  const errorStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '14px',
    color: '#e74c3c',
    marginTop: '4px',
    display: 'block',
  };

  const infoItems = [
    { icon: '✉', label: 'Email', value: 'gopikap026@gmail.com', link: 'mailto:gopikap026@gmail.com' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/gopika05', link: 'https://www.linkedin.com/in/gopika05/' },
    { icon: '⌖', label: 'Location', value: 'Available Worldwide (Remote)' },
    { icon: '◷', label: 'Response Time', value: 'Within 24 hours' },
  ];

  return (
    <div
      style={{
        padding: '64px 5%',
        background: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1350px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}
      >
        {/* Left — Contact Info */}
        <div
          style={{
            background: '#f7f3ec',
            border: '0.5px solid #e0d9ce',
            borderRadius: '14px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8a9a5b',
              marginBottom: '10px',
            }}
          >
            Get in touch
          </p>

          <h2
            style={{
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              color: '#3d3529',
              marginBottom: '10px',
              lineHeight: 1.25,
            }}
          >
            Contact Information
          </h2>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              color: '#7a6e5f',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            Feel free to reach out through any of these channels.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px', flex: 1 }}>
            {infoItems.map(({ icon, label, value, link }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#edeae3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '16px',
                    color: '#8a9a5b',
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#8a9a5b',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {label}
                  </p>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                        color: '#3d3529',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#8a9a5b'}
                      onMouseLeave={(e) => e.target.style.color = '#3d3529'}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                        color: '#3d3529',
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Response time note */}
          <div
            style={{
              background: '#fff',
              border: '0.5px solid #e0d9ce',
              borderRadius: '10px',
              padding: '14px 16px',
              marginTop: 'auto',
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#8a9a5b',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              ⏱ I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div
          style={{
            background: '#faf7f2',
            border: '0.5px solid #e0d9ce',
            borderRadius: '14px',
            padding: '36px',
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8a9a5b',
              marginBottom: '10px',
            }}
          >
            Let's work together
          </p>

          <h2
            style={{
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              color: '#3d3529',
              marginBottom: '24px',
              lineHeight: 1.25,
            }}
          >
            Tell Me About Your Project
          </h2>

          {/* Toast */}
          {toast && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#eef4e2',
                border: '0.5px solid #c8d9a0',
                borderRadius: '8px',
                padding: '12px 16px',
                marginBottom: '20px',
              }}
            >
              <span style={{ fontSize: '16px' }}>✓</span>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#3d5c1a' }}>
                Message sent! I'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Full name *</label>
              <input 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Jane Smith" 
                style={inputStyle(!!errors.fullName)} 
              />
              {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
            </div>
            <div>
              <label style={labelStyle}>Email address *</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="jane@example.com" 
                style={inputStyle(!!errors.email)} 
              />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Phone number</label>
              <input 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+91 12345 67890" 
                style={inputStyle(false)} 
              />
            </div>
            <div>
              <label style={labelStyle}>Project type</label>
              <input 
                name="projectType" 
                value={formData.projectType} 
                onChange={handleChange} 
                placeholder="React, WordPress, E-Commerce…" 
                style={inputStyle(false)} 
              />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Budget range</label>
              <input 
                name="budget" 
                value={formData.budget} 
                onChange={handleChange} 
                placeholder="e.g. ₹15,000–₹30,000" 
                style={inputStyle(false)} 
              />
            </div>
            <div>
              <label style={labelStyle}>Expected timeline</label>
              <input 
                name="timeline" 
                value={formData.timeline} 
                onChange={handleChange} 
                placeholder="e.g. 2–4 weeks" 
                style={inputStyle(false)} 
              />
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Project details *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your goals and any specific requirements…"
              style={{ ...inputStyle(!!errors.message), resize: 'vertical' }}
            />
            {errors.message && <span style={errorStyle}>{errors.message}</span>}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '13px',
              background: '#8a9a5b',
              color: '#fff',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              border: 'none',
              borderRadius: '9px',
              cursor: 'pointer',
              marginTop: '6px',
            }}
          >
            Send Message
          </button>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              color: '#9a8e7f',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            * Required fields. I'll respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;