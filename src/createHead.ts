import './components/my-skill.ts';
import { $, $$ } from './utils';

// In SVG file there's only left half of the head, create the symmetrical right half programmatically
const headSymmetry = (svg: HTMLObjectElement) => {
  const width = svg.offsetWidth;
  const svgDoc = svg.contentDocument as Document;
  const symmetrySource = svgDoc.getElementById('symmetry-source') as HTMLElement;
  const symmetryTarget = svgDoc.getElementById('symmetry-target') as HTMLElement;

  const elementsToFlip = Array.from(
    symmetrySource.querySelectorAll('path, polygon, line, circle') as NodeListOf<HTMLElement>
  );

  for (let original of elementsToFlip) {
    if (original.id === 'background') {
      continue;
    }

    const flipped = original.cloneNode(true) as HTMLElement;
    if (original.getAttribute('symmetry-id')) {
      flipped.setAttribute('id', original.getAttribute('symmetry-id') as string);
      flipped.removeAttribute('symmetry-id');
      flipped.setAttribute('aria-label', original.getAttribute('symmetry-aria-label') as string);
      flipped.removeAttribute('symmetry-aria-label');
    }

    // flip line
    if (flipped.tagName === 'line') {
      const x1 = width - parseInt(flipped.getAttribute('x1') as string);
      const x2 = width - parseInt(flipped.getAttribute('x2') as string);
      flipped.setAttribute('x1', `${x1}`);
      flipped.setAttribute('x2', `${x2}`);

      // flip circle
    } else if (flipped.tagName === 'circle') {
      const cx = width - parseInt(flipped.getAttribute('cx') as string);
      flipped.setAttribute('cx', `${cx}`);

      // flip path, polygon
    } else {
      const attr = flipped.tagName === 'path' ? 'd' : 'points';

      let points = (flipped.getAttribute(attr) as string).split(' ');
      for (let j = 0; j < points.length; j++) {
        let match = points[j].match(/(\d+),/);
        if (match) {
          const x = width - parseInt(match[1]);
          points[j] = points[j].replace(/\d+,/, x + ',');
        } else {
          continue;
        }
      }
      flipped.setAttribute(attr, points.join(' '));
    }

    symmetryTarget.appendChild(flipped);
  }
};

export const createHead = () => {
  let headSvgDoc: Document;
  window.addEventListener('load', () => {
    const head = $('#head') as HTMLObjectElement;
    headSymmetry(head);

    headSvgDoc = head.contentDocument as Document;
    headSvgDoc.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('skill') && !target.classList.contains('current')) {
        const current = headSvgDoc.querySelector('.current');
        if (current) {
          current.classList.remove('current');
        }

        target.classList.add('current');

        const skillName = target.getAttribute('id') as string;
        const skillBoxes = $$('.skill-box') as NodeListOf<HTMLElement>;
        Array.from(skillBoxes).forEach((box) => {
          box.classList.remove('active');
          box.style.height = '1px';
          box.style.opacity = '0';
          box.style.top = '400px';
          if (box.classList.contains(skillName)) {
            box.classList.add('active');
            box.style.height = `${box.scrollHeight}px`;
            box.style.top = '430px';
            box.style.opacity = '1';
          }
        });
        $('#head')?.classList.add('skillbox-open');
        $('#earpod-container')?.classList.add('skillbox-open');
      }
    };

    headSvgDoc.onkeyup = (e) => {
      const target = e.target as HTMLElement;
      if (e.key === 'Enter' || e.key === ' ') {
        if (target.tagName === 'polygon' && target.classList.contains('skill')) {
          const clickEvent = new MouseEvent('click');
          Object.defineProperty(clickEvent, 'target', { value: target });
          headSvgDoc.dispatchEvent(clickEvent);
        }
      }
      if (e.key === 'Escape') {
        const closeButton = $('.skill-box[style*="opacity: 1"] .close-button') as HTMLElement;
        closeButton?.click();
      }
    };

    const earpod = $('#earpod') as HTMLObjectElement;

    const earpodSvgDoc = earpod.contentDocument as Document;
    earpodSvgDoc.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains('earpod')) {
        return;
      }
      const player = $('#music-player') as HTMLAudioElement;
      player.volume = 0.5;
      player.paused ? player.play() : player.pause();
    };
  });

  Array.from($$('.close-button') as NodeListOf<HTMLElement>).forEach((closeButton) => {
    closeButton.onclick = () => {
      closeButton.closest('.skill-box')?.classList.remove('active');
      headSvgDoc.querySelector('.current')?.classList.remove('current');
      $('#head')?.classList.remove('skillbox-open');
      $('#earpod-container')?.classList.remove('skillbox-open');
    };
  });
};
