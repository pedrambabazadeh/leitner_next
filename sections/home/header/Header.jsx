'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Header({ children }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

  useEffect(() => {
    if (typeof window === 'undefined' || vantaEffect) return;

    const initVanta = async () => {
      window.THREE = THREE;
      await loadScript(
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
      );
      await loadScript(
        'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
      );


      // Wait until VANTA.NET exists
      await new Promise((resolve) => {
        const check = () => {
          if (window.VANTA?.NET) resolve();
          else setTimeout(check, 50);
        };
        check();
      });

      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        showDots: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 0.0,
        scaleMobile: 1.0,
        color:0x00f0ff ,
        backgroundColor: '#0a0a0a',
        points: 20.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });

      setVantaEffect(effect);
      setIsReady(true);  // Mark ready once effect is initialized
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <header
      ref={vantaRef}
      style={{
        width: '100%',
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        backgroundColor: isReady ? 'transparent' : '#0a0a0a', // fallback bg color
      }}
      className=' relative flex flex-col'
    >
      <div className="absolute flex flex-col items-center justify-center w-full h-full" style={{backdropFilter: 'blur(0px)'}}>
              <h2
        className="text-5xl font-bold text-[var(--color-primary)] mb-4"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Learn Any Language from any other language, make your own portable <span className='text-[var(--color-secondary)]'>dictionary</span> with customizable flashcards.
              </h2>
              <p className="text-xl mb-8 text-[var(--color-light)]">Use the Leitner system and AI-powered tools to retain words faster.</p>
              <div className="space-x-4">
                <button className=" text-sm btn-primary px-6 py-3 rounded-xl hover:scale-105 transition">Get Started</button>
                <button className=" text-sm btn-accent px-6 py-3 rounded-xl hover:scale-105 transition"> Try Demo</button>
              </div>
      </div>
      {children}
    </header>
  );
}
