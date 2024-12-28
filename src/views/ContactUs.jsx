import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', phone: '', email: '' }); 
  };

  return (
    <section className="text-center mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', }}>Contact Us</h2>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia lorem ipsum dolor sit amet.
      </p>

      <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
        <div className="mt-5">
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
