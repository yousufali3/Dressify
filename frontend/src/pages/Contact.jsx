import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Simulate form submission (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Us</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or feedback? Feel free to reach out to us via the contact form below or email us directly at{' '}
          <a href="mailto:contact@yourcompany.com" className="text-blue-600 hover:underline">contact@yourcompany.com</a>.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {successMessage && <p className="mt-4 text-green-600 text-center">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-600 text-center">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
