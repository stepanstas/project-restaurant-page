function createHomePage() {
    const home = document.createElement('section');
    home.classList.add('home');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = 'Welcome to HealthFully';

    const oystersImage = document.createElement('img');
    oystersImage.src = './images/raw-oysters.jpg';
    oystersImage.alt = 'Raw Oysters';

    home.appendChild(sectionTitle);
    home.appendChild(createParagraph('We serve the best oysters in the world'));
    home.appendChild(oystersImage);
    home.appendChild(createParagraph('Please visit our menu page to see our menu'));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function renderHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHomePage());
  }
  
export default renderHome;