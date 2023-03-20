import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
