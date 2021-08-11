import './App.scss';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Cursor from './component/Cursor';
import About from './pages/About';
import Project from './pages/Project';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import Loader from './pages/Loader';


function App() {

  const [preLoading, setPreLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setPreLoading(false);
    }, 7000)
  }, [preLoading]);

  const footerHeight = (window.innerHeight) / 1.5;
  return (
    <>
      {preLoading === false ? (
        <>
          <Cursor />
          <Navbar />
          <main className="app">
            <Home />
            <About />
            <hr className="partition" />
            <Project />
          </main>
          <hr className="partition" />
          <div id="contact" className="footer-wrapper" style={{ minHeight: `${footerHeight}px` }}>
            <Footer />
          </div>
        </>
      ) : (
        <Loader />

      )}
    </>
  );
}

export default App;
