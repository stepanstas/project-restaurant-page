import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'HealthFully';

    header.appendChild(logo);
    header.appendChild(createNavbar());

    return header;
}

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (event) => {
        if(event.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        renderHome();
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (event) => {
        if(event.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        renderMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (event) => {
        if(event.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        renderContact();
    })

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-button');
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove('active');
      }
    });
  
    button.classList.add('active');
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    const copyright = document.createElement('small');
    copyright.classList.add('copyright');
    copyright.textContent = `Created by Štěpán Š. ${new Date().getFullYear()}. All Rights Reserved.`;
  
    footer.appendChild(copyright);
  
    return footer;
}

function renderWebsite() {
    const content = document.getElementById('content');
  
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
  
    setActiveButton(document.querySelector('.nav-button'));
    renderHome();
}
  
export default renderWebsite;