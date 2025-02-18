import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <div className="logo">AI Tools Hub</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cursor">Cursor</Link></li>
            <li><Link to="/colab">Google Colab</Link></li>
            <li><Link to="/copilot">GitHub Copilot</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursor" element={<Cursor />} />
          <Route path="/colab" element={<Colab />} />
          <Route path="/copilot" element={<Copilot />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>&copy; 2024 AI Tools Hub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to AI Tools Hub</h1>
        <p>Discover the most powerful AI development tools</p>
      </section>

      <section className="tools-grid">
        <div className="tool-card">
          <h2>Cursor</h2>
          <p>The AI-first code editor</p>
          <Link to="/cursor" className="btn">Learn More</Link>
        </div>
        <div className="tool-card">
          <h2>Google Colab</h2>
          <p>AI-powered notebook with Gemini</p>
          <Link to="/colab" className="btn">Learn More</Link>
        </div>
        <div className="tool-card">
          <h2>GitHub Copilot</h2>
          <p>Your AI pair programmer</p>
          <Link to="/copilot" className="btn">Learn More</Link>
        </div>
      </section>
    </main>
  );
}

function Cursor() {
  return (
    <main className="tool-page">
      <h1>Cursor</h1>
      <div className="tool-content">
        <img 
          src="https://cursor.sh/cursor.png"
          alt="Cursor Logo" 
          className="tool-image" 
        />
        <div className="tool-description">
          <h2>The AI-first code editor</h2>
          <p>Cursor is a next-generation code editor that integrates AI capabilities directly into your workflow.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Built-in AI chat assistant</li>
            <li>Code completion and generation</li>
            <li>Smart code refactoring</li>
            <li>Integrated terminal</li>
          </ul>
          <a href="https://cursor.sh" className="btn" target="_blank" rel="noopener noreferrer">Visit Official Site</a>
        </div>
      </div>
    </main>
  );
}

function Colab() {
  return (
    <main className="tool-page">
      <h1>Google Colab with Gemini</h1>
      <div className="tool-content">
        <img 
          src="https://colab.research.google.com/img/colab_favicon_256px.png"
          alt="Colab Logo" 
          className="tool-image" 
        />
        <div className="tool-description">
          <h2>AI-powered Jupyter Notebooks</h2>
          <p>Google Colab is a cloud-based platform that combines Python notebooks with powerful AI capabilities.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Gemini AI integration</li>
            <li>Free GPU access</li>
            <li>Collaborative coding</li>
            <li>Pre-installed ML libraries</li>
          </ul>
          <a href="https://colab.research.google.com" className="btn" target="_blank" rel="noopener noreferrer">Visit Official Site</a>
        </div>
      </div>
    </main>
  );
}

function Copilot() {
  return (
    <main className="tool-page">
      <h1>GitHub Copilot</h1>
      <div className="tool-content">
        <img 
          src="https://github.githubassets.com/images/modules/site/copilot/copilot.png"
          alt="Copilot Logo" 
          className="tool-image" 
        />
        <div className="tool-description">
          <h2>Your AI Pair Programmer</h2>
          <p>GitHub Copilot is an AI-powered code completion tool that helps you write better code faster.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Real-time code suggestions</li>
            <li>Multiple IDE support</li>
            <li>Context-aware completions</li>
            <li>Natural language to code</li>
          </ul>
          <a href="https://github.com/features/copilot" className="btn" target="_blank" rel="noopener noreferrer">Visit Official Site</a>
        </div>
      </div>
    </main>
  );
}

export default App; 