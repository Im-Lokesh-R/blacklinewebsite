import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip preloader if already seen this session
    if (sessionStorage.getItem('bl_preloader_done')) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      return;
    }

    // Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after everything mounts
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      clearTimeout(refreshTimer);
    };
  }, [loading]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('bl_preloader_done', '1');
    setLoading(false);
  };

  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
