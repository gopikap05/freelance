// App.jsx
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/utils/BackToTop';
import ScrollToTop from './components/utils/ScrollToTop';
import AppLoader from './components/utils/Apploader';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Work from './pages/Work';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (!appReady) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    let rafId;
    let running = true;

    function raf(time) {
      if (!running) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    window.lenisReset = () => {
      running = false;
      cancelAnimationFrame(rafId);
      lenis.stop();

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      requestAnimationFrame(() => {
        lenis.scrollTo(0, { immediate: true });

        requestAnimationFrame(() => {
          running = true;
          rafId = requestAnimationFrame(raf);
          lenis.start();
        });
      });
    };

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
      delete window.lenisReset;
    };
  }, [appReady]);

  return (
    <>
      {!appReady && <AppLoader onComplete={() => setAppReady(true)} />}

      {appReady && (
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;