import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="app" style={{ backgroundColor: theme.background }}>
      <Navigation />
      <main className="main-content" style={{ color: theme.textPrimary }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<TheApp />} />
          <Route path="/business-solution" element={<BusinessSolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-home" element={<BusinessHome />} />
        </Routes>
      </main>
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

// Placeholder components
const Home = () => <div>Home Page</div>;
const TheApp = () => <div>The App Page</div>;
const BusinessSolution = () => <div>Business Solution Page</div>;
const About = () => <div>About Us Page</div>;
const BusinessHome = () => <div>Business Home Page</div>;

export default App;
