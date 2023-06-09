function createContactPage() {
  const contact = document.createElement('section');
  contact.classList.add('contact');

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('section-title');
  sectionTitle.textContent = 'Contact';

  const address = document.createElement('p');
  address.classList.add('address');
  address.textContent =
    'Visit us in person at 1234 Oysters Rd, Oyster, USA, 12345';

  const phone = document.createElement('a');
  phone.setAttribute('href', 'tel:1234567');
  phone.textContent = 'Call us at 123-456-7891';

  const form = document.createElement('form');
  form.setAttribute('action', '/');
  form.setAttribute('method', 'post');
  form.classList.add('contact-form');

  const formTitle = document.createElement('h3');
  formTitle.textContent = 'Send us a message';
  form.appendChild(formTitle);

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  nameInput.classList.add('form-input');
  nameInput.setAttribute('placeholder', 'Name');
  nameInput.setAttribute('minlength', 2);
  nameInput.setAttribute('autocomplete', 'off');
  nameInput.setAttribute('required', true);
  nameLabel.appendChild(nameInput);

  const phoneLabel = document.createElement('label');
  phoneLabel.setAttribute('for', 'phone');
  const phoneInput = document.createElement('input');
  phoneInput.setAttribute('type', 'tel');
  phoneInput.setAttribute('name', 'phone');
  phoneInput.setAttribute('id', 'phone');
  phoneInput.classList.add('form-input');
  phoneInput.setAttribute('placeholder', '123-456-7890');
  phoneInput.setAttribute('autocomplete', 'off');
  phoneInput.setAttribute('pattern', '\d{3}[\-]\d{3}[\-]\d{4}')
  phoneInput.setAttribute('required', true);
  phoneLabel.appendChild(phoneInput);

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.classList.add('form-input');
  emailInput.setAttribute('placeholder', 'email@email.com');
  emailInput.setAttribute('autocomplete', 'off');
  emailInput.setAttribute('required', true);
  emailLabel.appendChild(emailInput);

  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  const messageInput = document.createElement('textarea');
  messageInput.setAttribute('name', 'message');
  messageInput.setAttribute('id', 'message');
  messageInput.classList.add('form-input');
  messageInput.setAttribute('cols', '30');
  messageInput.setAttribute('rows', '10');
  messageInput.setAttribute('required', true);
  messageInput.setAttribute('autocomplete', 'off');
  messageInput.setAttribute('minlength', 10);
  messageInput.setAttribute('placeholder', 'Message');
  messageLabel.appendChild(messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.textContent = 'Send';

  const formGroups = [
    nameLabel,
    phoneLabel,
    emailLabel,
    messageLabel,
    submitBtn,
  ];
  formGroups.forEach((group) => {
    const div = document.createElement('div');
    div.classList.add('form-group');
    div.appendChild(group);
    form.appendChild(div);
  });

  contact.append(sectionTitle, address, phone, form);
  return contact;
}

function renderContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContactPage());
}

export default renderContact;

