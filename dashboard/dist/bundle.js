// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// File: src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

// File: src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav>
      <h2>Wanderlust-Travel</h2>
      <ul>
        <li>Home</li>
        <li>Travel</li>
        <li>Book Now</li>
        <li>Gallery</li>
        <li>Holiday</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;

// File: src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Adventure Awaits</h1>
      <p>We travel not to escape life, but for life not to escape us.</p>
    </header>
  );
}

export default Header;

// File: src/components/Section.js
import React from 'react';

function Section() {
  return (
    <section>
      <h2>Welcome to Wanderlust</h2>
      <p>Your adventure begins here.</p>
    </section>
  );
}

export default Section;

// File: src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Wanderlust-Travel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

// File: src/index.css
body {
  font-family: 'Raleway', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

header {
  background: url('/path/to/background-image.jpg') no-repeat center center/cover;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

section {
  padding: 2rem;
  text-align: center;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
