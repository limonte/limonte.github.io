import { trianglifyBackground } from './trianglify-background.js';
import { headSymmetry } from './head-symmetry.js';
import './my-skill.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let svgDoc;
window.addEventListener('load', (event) => {
  const svg = $('#head');
  headSymmetry(svg);

  svgDoc = svg.contentDocument;
  svgDoc.onclick = (e) => {
    const target = e.target;
    if (target.classList.contains('skill') && !target.classList.contains('current')) {
      const current = svgDoc.querySelector('.current');
      if (current) {
        current.classList.remove('current');
      }

      target.classList.add('current');

      const skillName = target.getAttribute('id');
      const skillBoxes = $$('.skill-box');
      Array.from(skillBoxes).forEach((box) => {
        box.classList.remove('active');
        box.style.height = '0';
        box.style.opacity = '0';
        box.style.top = '400px';
        if (box.classList.contains(skillName)) {
          box.classList.add('active');
          box.style.height = `${box.scrollHeight}px`;
          box.style.top = '430px';
          box.style.opacity = '1';
        }
      });
    }
  };
});

Array.from($$('.close-button')).forEach((closeButton) => {
  closeButton.onclick = () => {
    const skillBox = closeButton.closest('.skill-box');
    skillBox.classList.remove('active');
    svgDoc.querySelector('.current').classList.remove('current');
  };
});

trianglifyBackground();

// get sweetalert2 stargazers count
fetch('https://api.github.com/repos/limonte/sweetalert2')
  .then((response) => response.json())
  .then((data) => {
    $('#sweetalert2-stargazers-count').innerText = data.stargazers_count
      ? new Intl.NumberFormat().format(data.stargazers_count)
      : '14k+';
  });

// say hi to humans
fetch('/assets/alien.ascii')
  .then((response) => response.text())
  .then(console.log);
