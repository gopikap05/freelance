import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const COUNTRIES = [
  { name: 'India', code: 'IN', dial: '+91', flag: '🇮🇳' },
  { name: 'United States', code: 'US', dial: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', dial: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', dial: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', dial: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: 'DE', dial: '+49', flag: '🇩🇪' },
  { name: 'France', code: 'FR', dial: '+33', flag: '🇫🇷' },
  { name: 'Spain', code: 'ES', dial: '+34', flag: '🇪🇸' },
  { name: 'Italy', code: 'IT', dial: '+39', flag: '🇮🇹' },
  { name: 'Netherlands', code: 'NL', dial: '+31', flag: '🇳🇱' },
  { name: 'Singapore', code: 'SG', dial: '+65', flag: '🇸🇬' },
  { name: 'United Arab Emirates', code: 'AE', dial: '+971', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: 'SA', dial: '+966', flag: '🇸🇦' },
  { name: 'Pakistan', code: 'PK', dial: '+92', flag: '🇵🇰' },
  { name: 'Bangladesh', code: 'BD', dial: '+880', flag: '🇧🇩' },
  { name: 'Sri Lanka', code: 'LK', dial: '+94', flag: '🇱🇰' },
  { name: 'Nepal', code: 'NP', dial: '+977', flag: '🇳🇵' },
  { name: 'China', code: 'CN', dial: '+86', flag: '🇨🇳' },
  { name: 'Japan', code: 'JP', dial: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: 'KR', dial: '+82', flag: '🇰🇷' },
  { name: 'Indonesia', code: 'ID', dial: '+62', flag: '🇮🇩' },
  { name: 'Malaysia', code: 'MY', dial: '+60', flag: '🇲🇾' },
  { name: 'Philippines', code: 'PH', dial: '+63', flag: '🇵🇭' },
  { name: 'Thailand', code: 'TH', dial: '+66', flag: '🇹🇭' },
  { name: 'Vietnam', code: 'VN', dial: '+84', flag: '🇻🇳' },
  { name: 'New Zealand', code: 'NZ', dial: '+64', flag: '🇳🇿' },
  { name: 'South Africa', code: 'ZA', dial: '+27', flag: '🇿🇦' },
  { name: 'Nigeria', code: 'NG', dial: '+234', flag: '🇳🇬' },
  { name: 'Egypt', code: 'EG', dial: '+20', flag: '🇪🇬' },
  { name: 'Kenya', code: 'KE', dial: '+254', flag: '🇰🇪' },
  { name: 'Brazil', code: 'BR', dial: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: 'MX', dial: '+52', flag: '🇲🇽' },
  { name: 'Argentina', code: 'AR', dial: '+54', flag: '🇦🇷' },
  { name: 'Russia', code: 'RU', dial: '+7', flag: '🇷🇺' },
  { name: 'Turkey', code: 'TR', dial: '+90', flag: '🇹🇷' },
  { name: 'Sweden', code: 'SE', dial: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: 'NO', dial: '+47', flag: '🇳🇴' },
  { name: 'Switzerland', code: 'CH', dial: '+41', flag: '🇨🇭' },
  { name: 'Poland', code: 'PL', dial: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: 'PT', dial: '+351', flag: '🇵🇹' },
  { name: 'Ireland', code: 'IE', dial: '+353', flag: '🇮🇪' },
];

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
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  // Country code dropdown state
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setCountrySearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch)
  );

  // Validation
  const validateFullName = (v) =>
    !v.trim() ? 'Full name is required'
    : !/^[A-Za-z\s]+$/.test(v) ? 'Letters only'
    : v.trim().length < 2 ? 'Min 2 characters'
    : '';

  const validateEmail = (v) =>
    !v.trim() ? 'Email is required'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Invalid email'
    : '';

  const validatePhone = (v) =>
    !v.trim() ? 'Phone number is required'
    : !/^\d{7,12}$/.test(v) ? 'Enter a valid phone number'
    : '';

  const validateMessage = (v) =>
    !v.trim() ? 'Project details are required'
    : v.trim().length < 10 ? 'Min 10 characters'
    : '';

  const validators = {
    fullName: validateFullName,
    email: validateEmail,
    phone: validatePhone,
    message: validateMessage,
  };

  const getError = (name, value) => validators[name] ? validators[name](value) : '';

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'fullName') value = value.replace(/[^A-Za-z\s]/g, '');
    else if (name === 'phone') value = value.replace(/\D/g, '').slice(0, 12);

    setFormData((f) => ({ ...f, [name]: value }));

    if (touched[name]) {
      setErrors((er) => ({ ...er, [name]: getError(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: getError(name, formData[name]) }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched({ fullName: true, email: true, phone: true, message: true });

    if (Object.values(newErrors).some(Boolean)) {
      setToast({ show: true, type: 'error', message: 'Please fix the errors before submitting.' });
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_sk6hkrw',
      'template_to7awq8',
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: `${country.dial}${formData.phone}`,
        projectType: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
      },
      'cUnmZKOwwkhG4-64c'
    )
      .then(() => {
        setToast({ show: true, type: 'success', message: "Message sent! I'll get back to you within 24 hours." });
        setFormData({ fullName: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' });
        setErrors({});
        setTouched({});
      })
      .catch(() => {
        setToast({ show: true, type: 'error', message: 'Something went wrong. Please try again.' });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
      });
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
                      onMouseEnter={(e) => (e.target.style.color = '#8a9a5b')}
                      onMouseLeave={(e) => (e.target.style.color = '#3d3529')}
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
          {toast.show && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: toast.type === 'success' ? '#eef4e2' : '#fbeaea',
                border: toast.type === 'success' ? '0.5px solid #c8d9a0' : '0.5px solid #f0baba',
                borderRadius: '8px',
                padding: '12px 16px',
                marginBottom: '20px',
              }}
            >
              <span style={{ fontSize: '16px' }}>{toast.type === 'success' ? '✓' : '✕'}</span>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  color: toast.type === 'success' ? '#3d5c1a' : '#a33a3a',
                  margin: 0,
                }}
              >
                {toast.message}
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
                onBlur={handleBlur}
                placeholder="Enter Your Name"
                style={inputStyle(touched.fullName && !!errors.fullName)}
              />
              {touched.fullName && errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
            </div>
            <div>
              <label style={labelStyle}>Email address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Email"
                style={inputStyle(touched.email && !!errors.email)}
              />
              {touched.email && errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={labelStyle}>Phone number *</label>
              <div style={{ display: 'flex', gap: '8px', position: 'relative' }} ref={dropdownRef}>
                {/* Country code selector */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#3d3529',
                    background: '#fff',
                    border: '0.5px solid #ddd6ca',
                    borderRadius: '8px',
                    padding: '10px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{country.flag}</span>
                  <span>{country.dial}</span>
                  <span style={{ fontSize: '10px', color: '#9a8e7f' }}>▾</span>
                </button>

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter phone number"
                  inputMode="numeric"
                  maxLength={12}
                  style={inputStyle(touched.phone && !!errors.phone)}
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: 0,
                      width: '260px',
                      maxHeight: '260px',
                      overflowY: 'auto',
                      background: '#fff',
                      border: '0.5px solid #ddd6ca',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(61,53,41,0.12)',
                      zIndex: 20,
                    }}
                  >
                    <div style={{ padding: '8px' }}>
                      <input
                        autoFocus
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        placeholder="Search country or code…"
                        style={{
                          ...inputStyle(false),
                          fontSize: '13px',
                          padding: '8px 10px',
                        }}
                      />
                    </div>
                    <div>
                      {filteredCountries.length === 0 && (
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '13px',
                            color: '#9a8e7f',
                            padding: '10px 14px',
                            margin: 0,
                          }}
                        >
                          No matches
                        </p>
                      )}
                      {filteredCountries.map((c) => (
                        <div
                          key={c.code}
                          onClick={() => {
                            setCountry(c);
                            setDropdownOpen(false);
                            setCountrySearch('');
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 14px',
                            cursor: 'pointer',
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '13px',
                            color: '#3d3529',
                            background: c.code === country.code ? '#f7f3ec' : 'transparent',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f3ec')}
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = c.code === country.code ? '#f7f3ec' : 'transparent')
                          }
                        >
                          <span>{c.flag}</span>
                          <span style={{ flex: 1 }}>{c.name}</span>
                          <span style={{ color: '#8a9a5b' }}>{c.dial}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {touched.phone && errors.phone && <span style={errorStyle}>{errors.phone}</span>}
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
              onBlur={handleBlur}
              rows={5}
              placeholder="Tell me about your goals and any specific requirements…"
              style={{ ...inputStyle(touched.message && !!errors.message), resize: 'vertical' }}
            />
            {touched.message && errors.message && <span style={errorStyle}>{errors.message}</span>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '13px',
              background: loading ? '#a8b487' : '#8a9a5b',
              color: '#fff',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              border: 'none',
              borderRadius: '9px',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    width: '14px',
                    height: '14px',
                    border: '2px solid rgba(255,255,255,0.5)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 0.7s linear infinite',
                  }}
                />
                Sending…
              </>
            ) : (
              'Send Message'
            )}
          </button>

          <style>{`
            @keyframes spin { to { transform: rotate(360deg); } }
          `}</style>

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