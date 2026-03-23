'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        color: {
          value: '#a78bfa',
        },
        links: {
          color: '#8b5cf6',
          distance: 140,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 45,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onClick: { enable: false, mode: 'push' },
          onHover: { enable: false, mode: 'repulse' },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
    }),
    []
  );

  if (!isReady) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <Particles id="portfolio-particles" options={options} className="h-full w-full opacity-80" />
    </div>
  );
};

export default ParticlesBackground;