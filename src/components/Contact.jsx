import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email Address",
      value: "kabine.r27@gmail.com",
      link: "mailto:kabine.r27@gmail.com",
      actionText: "Send Mail"
    },
    {
      icon: <Phone size={22} />,
      title: "Phone Number",
      value: "948695385",
      link: "tel:948695385",
      actionText: "Call Direct"
    },
    {
      icon: <Linkedin size={22} />,
      title: "LinkedIn Profile",
      value: "kabine-ramamoorthi-846730326",
      link: "https://linkedin.com/in/kabine-ramamoorthi-846730326",
      actionText: "Connect on LinkedIn"
    },
    {
      icon: <Github size={22} />,
      title: "GitHub Repositories",
      value: "Kabine555",
      link: "https://github.com/Kabine555",
      actionText: "Explore GitHub"
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('submitting');
    setErrors({});

    // Simulate reliable submission action or mailto trigger
    setTimeout(() => {
      setSubmitStatus('success');
      // Create mailto fallback link for native mail dispatch
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:kabine.r27@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subheading">
            Whether you are looking for a Software Engineer, Java Developer, or Data Science Intern, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Official Contact Links */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Direct Contact Channels</h3>
            <p className="contact-col-desc">
              Connect directly via email, phone, or professional networks. All links are active and functional.
            </p>

            <div className="contact-cards-list">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="glass-card contact-card"
                >
                  <div className="contact-card-icon">{info.icon}</div>
                  <div className="contact-card-details">
                    <span className="contact-card-title">{info.title}</span>
                    <span className="contact-card-val">{info.value}</span>
                  </div>
                  <span className="contact-card-action">{info.actionText} →</span>
                </a>
              ))}
            </div>

            <div className="location-box glass-card">
              <MapPin size={20} className="location-icon" />
              <div>
                <h4 className="location-title">Location Base</h4>
                <p className="location-text">Erode & Coimbatore Region, Tamil Nadu, India (Open for Relocation)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Interactive Form */}
          <div className="contact-form-col glass-card">
            <div className="form-header">
              <Sparkles size={20} className="form-sparkle" />
              <h3 className="form-title">Send a Message</h3>
            </div>

            {submitStatus === 'success' && (
              <div className="form-alert success-alert">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message Form Validated!</strong>
                  <p>Your mail application has been triggered to deliver the message directly to kabine.r27@gmail.com.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-alert error-alert">
                <AlertCircle size={20} />
                <div>
                  <strong>Submission Needs Attention</strong>
                  <p>Please correct the highlighted fields below before submitting.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Recruiter / HR Manager"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. recruiter@company.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Opportunity / Campus Hiring"
                  className={errors.subject ? 'input-error' : ''}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry here..."
                  className={errors.message ? 'input-error' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit-btn"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
