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
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
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
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              I'm currently looking for new opportunities. Whether you have a question, 
              a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>✉️</div>
                <div className={styles.methodDetails}>
                  <h4>Email</h4>
                  <p>mail.rawnakr955@gmail.com</p>
                </div>
              </div>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>📱</div>
                <div className={styles.methodDetails}>
                  <h4>WhatsApp</h4>
                  <p>+880 124131344</p>
                </div>
              </div>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>📞</div>
                <div className={styles.methodDetails}>
                  <h4>Phone</h4>
                  <p>+880 124131344</p>
                </div>
              </div>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>📍</div>
                <div className={styles.methodDetails}>
                  <h4>Location</h4>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required className={styles.formInput} placeholder="John Doe" disabled={status === 'loading'} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required className={styles.formInput} placeholder="john@example.com" disabled={status === 'loading'} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} required className={styles.formInput} placeholder="Hello, I'd like to talk about..." disabled={status === 'loading'}></textarea>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            
            {status === 'error' && (
              <p style={{ color: '#f87171', marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
