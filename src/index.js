import navBar from './components/navbar';
import heroPage from './components/hero';
import menu from './components/menuCards';
import contact from './components/contactPage';

import './style.css';

const app = document.createElement('div');
app.id = 'content';

document.body.appendChild(app);

const pageContent = document.createElement('div');

app.appendChild(navBar());
app.appendChild(pageContent);

pageContent.appendChild(heroPage());

const switchTabs = () => {
  const menuBtn = document.querySelector('.menu');
  const homeBtn = document.querySelector('.home');
  const contactBtn = document.querySelector('.contact');

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.add('active:bg-indigo-500');
    pageContent.innerHTML = '';
    pageContent.appendChild(menu());
  });

  homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    homeBtn.classList.add('active:bg-indigo-500');
    pageContent.innerHTML = '';
    pageContent.appendChild(heroPage());
  });

  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactBtn.classList.add('active:bg-indigo-500');
    pageContent.innerHTML = '';
    pageContent.appendChild(contact());
  });
};

switchTabs();
