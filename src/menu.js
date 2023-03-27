function createMenuPage() {
  const menu = document.createElement('section');
  menu.classList.add('menu');

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('section-title');
  sectionTitle.textContent = 'Menu';
  menu.appendChild(sectionTitle);

  const containerMenuItems = document.createElement('div');
  containerMenuItems.classList.add('container-menu-items');
  menu.appendChild(containerMenuItems);

  const menuItems = [
    {
      name: 'Garlic Oysters',
      imgSrc: './images/garlic-oysters.jpg',
      imgAlt: 'Garlic Oysters',
      description: 'oysters, garlic',
    },
    {
      name: 'Lemon Oysters',
      imgSrc: './images/lemon-oysters.jpg',
      imgAlt: 'Lemon Oysters',
      description: 'oysters, lemon',
    },
    {
      name: 'Lime Oysters',
      imgSrc: './images/lime-oysters.jpg',
      imgAlt: 'Lime Oysters',
      description: 'oysters, lime',
    },
    {
      name: 'Onion Oysters',
      imgSrc: './images/onion-oysters.jpg',
      imgAlt: 'Onion Oysters',
      description: 'oysters, onions',
    },
    {
      name: 'Leek Oysters',
      imgSrc: './images/leek-oysters.jpg',
      imgAlt: 'Leek Oysters',
      description: 'oysters, leeks',
    },
    {
      name: 'Basil Oysters',
      imgSrc: './images/basil-oysters.jpg',
      imgAlt: 'Basil Oysters',
      description: 'oysters, mustard',
    },
  ];

  menuItems.forEach((menuItem) => {
    const divMenuItem = document.createElement('div');
    divMenuItem.classList.add('menu-item');
    containerMenuItems.appendChild(divMenuItem);

    const menuName = document.createElement('h3');
    menuName.classList.add('menu-name');
    menuName.textContent = menuItem.name;
    divMenuItem.appendChild(menuName);

    const imgMenuItem = document.createElement('img');
    imgMenuItem.setAttribute('src', menuItem.imgSrc);
    imgMenuItem.setAttribute('alt', menuItem.imgAlt);
    divMenuItem.appendChild(imgMenuItem);

    const description = document.createElement('p');
    description.textContent = menuItem.description;
    divMenuItem.appendChild(description);
  });

  return menu;
}

function renderMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenuPage());
}

export default renderMenu;
