import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Sparkles, CheckCircle2, AlertCircle, FileDown } from 'lucide-react';
import './Contact.css';

const RESUME_URL = '/Kabine_R_Resume.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'kabine.r27@gmail.com',
      href: 'mailto:kabine.r27@gmail.com',
      actionText: 'Send Email',
      color: 'emerald',
    },
    {
      icon: <Linkedin size={20} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/kabine27',
      href: 'https://linkedin.com/in/kabine27',
      actionText: 'Connect',
      color: 'lavender',
      newTab: true,
    },
    {
      icon: <Github size={20} />,
      title: 'GitHub',
      value: 'github.com/Kabine555',
      href: 'https://github.com/Kabine555',
      actionText: 'View Profile',
      color: 'emerald',
      newTab: true,
    },
  ];

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      setSubmitStatus('error');
      return;
    }
    setSubmitStatus('submitting');
    const mailtoLink = `mailto:kabine.r27@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_self');
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Open to software engineering opportunities, collaborations and internship roles. Let's connect!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  target={info.newTab ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`glass-card contact-card contact-card--${info.color}`}
                >
                  <div className={`contact-card-icon contact-card-icon--${info.color}`}>{info.icon}</div>
                  <div className="contact-card-details">
                    <span className="contact-card-title">{info.title}</span>
                    <span className="contact-card-val">{info.value}</span>
                  </div>
                  <span className="contact-card-action">{info.actionText} →</span>
                </a>
              ))}
            </div>

            <div className="glass-card location-box">
              <MapPin size={18} className="location-icon" />
              <div>
                <h4 className="location-title">Location</h4>
                <p className="location-text">Erode, Tamil Nadu, India — Open for Relocation</p>
              </div>
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary resume-dl-btn"
            >
              <FileDown size={18} />
              <span>Open Resume PDF</span>
            </a>
          </div>

          {/* Right Form */}
          <div className="contact-form-col glass-card">
            <div className="form-header">
              <Sparkles size={18} className="form-sparkle" />
              <h3 className="form-title">Send a Message</h3>
            </div>

            {submitStatus === 'success' && (
              <div className="form-alert success-alert">
                <CheckCircle2 size={18} />
                <span>Message sent! Your mail application should open shortly.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-alert error-alert">
                <AlertCircle size={18} />
                <span>Please fill in all required fields correctly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {[
                { id: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                { id: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                { id: 'subject', label: 'Subject', placeholder: 'e.g. Job Opportunity', type: 'text' },
              ].map(f => (
                <div key={f.id} className="form-group">
                  <label htmlFor={f.id}>{f.label} *</label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.id}
                    value={formData[f.id]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className={errors[f.id] ? 'input-error' : ''}
                  />
                  {errors[f.id] && <span className="error-text">{errors[f.id]}</span>}
                </div>
              ))}

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary form-submit-btn" disabled={submitStatus === 'submitting'}>
                <Send size={16} />
                <span>{submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
