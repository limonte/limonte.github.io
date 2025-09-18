import { $ } from './utils';

export const getSweetAlert2Stars = () => {
  // get sweetalert2 stars count
  fetch('https://api.github.com/repos/limonte/sweetalert2')
    .then((response) => response.json())
    .then((data) => {
      const starsContainer = $('#sweetalert2-stars-count') as HTMLElement;
      starsContainer.innerText = data.stargazers_count ? new Intl.NumberFormat().format(data.stargazers_count) : '18k+';
    });
};
