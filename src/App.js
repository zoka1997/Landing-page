import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import './Components/Header.css';
import SectionOne from './Components/SectionOne';
import './Components/SectionOne.css';
import SectionTwo from './Components/SectionTwo';
import './Components/SectionTwo.css';
import Aboutus from './Components/Aboutus';
import './Components/Aboutus.css';
import Footer from './Components/Footer';
import './Components/Footer.css';
import Gallery from './Components/Gallery';
import './Components/Gallery.css';
import Contact from './Components/Contact';
import './Components/Contact.css';

function App() {
  return (
    <div className="App">
          <Header />
          <SectionOne />
          <SectionTwo />
          <Aboutus />
          <Gallery />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
