// @ts-ignore CDN
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm';
// @ts-ignore CDN
import { loadBasic } from 'https://cdn.jsdelivr.net/npm/@tsparticles/basic@3.1.0/+esm';
// @ts-ignore CDN
import { loadParticlesLinksInteraction } from 'https://cdn.jsdelivr.net/npm/@tsparticles/interaction-particles-links@3.1.0/+esm';

export const createBackground = async () => {
  await loadBasic(tsParticles);
  await loadParticlesLinksInteraction(tsParticles);

  const numParticles = Math.round((window.screen.availWidth * window.screen.availHeight) / 10_000);

  await tsParticles.load({
    id: 'tsparticles',
    options: {
      particles: {
        number: {
          value: numParticles,
        },
        color: {
          value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'],
        },
        links: {
          enable: true,
          distance: 150,
          opacity: 0.3,
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.3,
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
        },
      },
      background: {
        color: '#000',
      },
    },
  });
};
