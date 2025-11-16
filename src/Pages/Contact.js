const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you — your message has been sent.');
  };

  return (
    <div className="contact">
      <h2>Let's Connect</h2>
      <p>Visit us at 123 Corniche Street, Beirut, Lebanon, or drop us a message below.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <h3>Opening Hours</h3>
        <p>Mon–Fri: 8am – 6pm</p>
        <p>Sat–Sun: 9am – 4pm</p>
      </div>
    </div>
  );
}
export default Contact;