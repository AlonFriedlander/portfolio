const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8"
    >
      <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Feel free to reach out to me via email or connect on LinkedIn. I'd love to hear from you!
      </p>
      <div className="flex space-x-6">
        <a
          href="mailto:alonf1536@gmail.com"
          className="flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/alon-friedlander-42a851215/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-lg shadow hover:bg-gray-900 transition"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
