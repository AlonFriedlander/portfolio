import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-center space-x-6 py-4">
          <a href="#home" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-500">About</a>
          <a href="#experience" className="text-gray-800 hover:text-blue-500">Experience</a>
          <a href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main> {/* Added padding for the fixed navbar */}

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Alon Friedlander | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Layout;
