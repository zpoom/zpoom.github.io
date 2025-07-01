import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/styles/index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;