import renderWebsite from "./renderWebsite";

renderWebsite();

/*import _ from 'lodash';

import BasilOysters from './images/basil-oysters.jpg';
import GarlicOysters from './images/garlic-oysters.jpg';
import LeekOysters from './images/leek-oysters.jpg';
import LemonOysters from './images/lemon-oysters.jpg';
import LimeOysters from './images/lime-oysters.jpg';
import OnionOysters from './images/onion-oysters.jpg';
import Oysters from './images/oysters.jpg';
import RawOysters from './images/raw-oysters.jpg';
*/



/*function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

*/

/*const navLinks = document.querySelectorAll('.nav-link');

// Function to load content based on clicked link
function loadContent(target) {
  const content = document.querySelector('#content');

  fetch(`pages/${target}.html`)
    .then(response => response.text())
    .then(html => {
      content.innerHTML = html;
    });
}

// Add click event listeners to navigation links
navLinks.forEach(navLink => {
  navLink.addEventListener('click', event => {
    const target = event.target.dataset.target;

    loadContent(target);

    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    navLink.classList.add('active');
  });
});

// Trigger click event of "Home" link on page load
window.addEventListener('load', () => {
  const homeLink = document.querySelector('.nav-link[data-target="home"]');
  homeLink.click();
});
*/