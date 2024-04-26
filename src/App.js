import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './components/Home'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Contact from './components/Contact'
import About from './components/About'
import "./App.css";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
