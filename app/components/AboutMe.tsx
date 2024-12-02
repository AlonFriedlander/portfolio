const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
      <p className="text-lg text-gray-600 max-w-3xl text-center">
        Hi! I'm Alon Friedlander, a software engineer with a deep passion for
        writing code and solving challenging problems. I hold a bachelor's degree in Civil Engineering, 
        and after completing my degree, I transitioned into software engineering through an 8-month 
        intensive program at Infinity Labs. This was followed by 6 months of hands-on experience as a 
        Software Developer at Omnicon Systems, where I worked on cross-platform projects. 
        I thrive on tackling complex issues and continuously strive to improve my skills.
      </p>

      {/* Add Technologies Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Technologies I've Worked With
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <img
          src="/icons/python-logo.svg"
          alt="Python"
          className="w-12 h-12"
        />
        <img
          src="/icons/js-logo.svg"
          alt="JavaScript"
          className="w-12 h-12"
        />
        <img
          src="/icons/c-logo.svg"
          alt="C"
          className="w-12 h-12"
        />
        <img
          src="/icons/cpp-logo.svg"
          alt="C++"
          className="w-12 h-12"
        />
        <img
          src="/icons/java-logo.svg"
          alt="Java"
          className="w-12 h-12"
        />
        <img
          src="/icons/nodejs-logo.svg"
          alt="Node.js"
          className="w-12 h-12"
        />
        <img
          src="/icons/react-logo.svg"
          alt="React"
          className="w-12 h-12"
        />
        <img
          src="/icons/database-logo.svg"
          alt="Databases"
          className="w-12 h-12"
        />
      </div>
    </section>
  );
};

export default AboutMe;
