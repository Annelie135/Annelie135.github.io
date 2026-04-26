
---
title: "Contact"
permalink: /pages/contact/
layout: single
---

<style>
.contact-wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 0;
  font-family: inherit;
}

.contact-intro {
  margin-bottom: 2.5rem;
}

.contact-intro p {
  color: #666;
  font-size: 1.05rem;
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 600px) {
  .contact-grid { grid-template-columns: 1fr; }
}

.contact-info h3 {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}

.info-label {
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 0.15rem;
}

.info-value {
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
}

.info-value a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  transition: border-color 0.2s;
}

.info-value a:hover {
  border-color: #333;
}

.availability-badge {
  display: inline-block;
  background: #f0faf0;
  color: #2d7a2d;
  font-size: 0.8rem;
  padding: 0.25rem 0.65rem;
  border-radius: 20px;
  font-weight: 500;
  margin-top: 0.25rem;
}

.contact-form h3 {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #333;
  background: #fafafa;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #aaa;
  background: #fff;
}

.contact-form textarea {
  resize: vertical;
  min-height: 130px;
}

.contact-form button {
  align-self: flex-start;
  padding: 0.65rem 1.75rem;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  text-decoration: none;
  display: block;
}

.contact-form button:hover {
  background: #444;
  color: #fff;
}

.divider {
  border: none;
  border-top: 1px solid #ebebeb;
  margin: 2rem 0;
}
</style>

<div class="contact-wrapper">

  <div class="contact-intro">
    <p>Whether you have a project in mind, a question, or just want to say hello — I'd love to hear from you.</p>
  </div>

  <hr class="divider">

  <div class="contact-grid">

    <div class="contact-info">
      <h3>Details</h3>

      <div class="info-item">
        <span class="info-label">Email</span>
        <span class="info-value"><a href="mailto:smit.annelie1@gmail.com">smit.annelie1@gmail.com</a></span>
      </div>

      <div class="info-item">
        <span class="info-label">Location</span>
        <span class="info-value">South Africa</span>
      </div>

      <div class="info-item">
        <span class="info-label">Status</span>
        <span class="availability-badge">● Available for full-time roles</span>
      </div>

      <div class="info-item">
        <span class="info-label">LinkedIn</span>
        <span class="info-value"><a href="https://www.linkedin.com/in/annelie-smit-86a615213" target="_blank">annelie-smit</a></span>
      </div>

      <div class="info-item">
        <span class="info-label">GitHub</span>
        <span class="info-value"><a href="https://github.com/Annelie135" target="_blank">Annelie135</a></span>
      </div>
    </div>

    <div class="contact-form">
      <h3>Send a Message</h3>
      <form action="https://formspree.io/f/xaqakvqn" method="POST">
        <input type="hidden" name="_replyto" value="smit.annelie1@gmail.com">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="your@email.com" required>
        <input type="text" name="subject" placeholder="Subject">
        <textarea name="message" placeholder="Your message..." required></textarea>
        <button type="submit">Send →</button>
      </form>
    </div>

  </div>

  <hr class="divider">

</div>
