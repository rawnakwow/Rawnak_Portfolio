"use client";

import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a mock form. In a real app, this would send an email!");
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
                  <p>rawnak@example.com</p>
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
              <input type="text" id="name" required className={styles.formInput} placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required className={styles.formInput} placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" required className={styles.formInput} placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
