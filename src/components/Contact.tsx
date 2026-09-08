"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success status message after 6 seconds
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <h2 className="heading-2">Get In Touch</h2>
        <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          Feel free to reach out for new opportunities, project inquiries, or technical collaborations. 
          I am always open to discussing new ideas!
        </p>

        <div className={styles.contactContainer}>
          {/* Interactive Contact Information Card */}
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              Connect directly through email, phone, or messaging platforms below:
            </p>

            <div className={styles.contactMethods}>
              <a 
                href="mailto:mail.rawnakr955@gmail.com" 
                className={styles.methodLink} 
                aria-label="Send Email"
              >
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>✉️</div>
                  <div className={styles.methodDetails}>
                    <h4>Email</h4>
                    <p>mail.rawnakr955@gmail.com</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://wa.me/8801724131344" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.methodLink} 
                aria-label="Chat on WhatsApp"
              >
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>💬</div>
                  <div className={styles.methodDetails}>
                    <h4>WhatsApp</h4>
                    <p>+880 1724-131344</p>
                  </div>
                </div>
              </a>

              <a 
                href="tel:+8801724131344" 
                className={styles.methodLink} 
                aria-label="Call Phone Number"
              >
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>📞</div>
                  <div className={styles.methodDetails}>
                    <h4>Phone</h4>
                    <p>+880 1724-131344</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Dhaka,Bangladesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.methodLink} 
                aria-label="View Location on Google Maps"
              >
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>📍</div>
                  <div className={styles.methodDetails}>
                    <h4>Location</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Dynamic Interactive Message Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className={styles.formInput} 
                placeholder="John Doe" 
                disabled={status === 'loading'} 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className={styles.formInput} 
                placeholder="john@example.com" 
                disabled={status === 'loading'} 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className={styles.formInput} 
                placeholder="Hello Rawnak, I'd like to discuss a project..." 
                disabled={status === 'loading'}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`} 
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className={styles.loadingWrapper}>
                  <span className={styles.spinner}></span> Sending...
                </span>
              ) : (
                'Send Message 🚀'
              )}
            </button>

            {status === 'success' && (
              <div className={styles.successBanner}>
                ✅ Message sent successfully! I will get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className={styles.errorBanner}>
                ⚠️ {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
