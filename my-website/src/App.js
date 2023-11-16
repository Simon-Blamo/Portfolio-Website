import './styles/App.css';
import Home from './pages/home.js';
import AboutMe from './pages/aboutMe.js';
import ContactMe from './pages/contactMe.js';
import Projects from './pages/projects.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutMe" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contactMe" element={<ContactMe/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
