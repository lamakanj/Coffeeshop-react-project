import React, { useState } from "react";

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    setSubmittedData(formData);
  };

  return (
    <div className="contact">
      <h2>Let's Connect</h2>
      <p>
        Visit us at 123 Corniche Street, Beirut, Lebanon, or drop us a message
        below.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {submittedData && (
        <div className="submitted-info">
          <h3>Your Submitted Information</h3>
          <table className="submitted-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{submittedData.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <td>Message</td>
                <td>{submittedData.message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <p>Mon–Fri: 8am – 6pm</p>
        <p>Sat–Sun: 9am – 4pm</p>
      </div>
    </div>
  );
};

export default Contact;
