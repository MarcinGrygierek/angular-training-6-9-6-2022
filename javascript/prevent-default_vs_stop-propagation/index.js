const form = document.querySelector('form');
const anchor = document.querySelector('a');

const child = document.querySelector('#child');
const parent = document.querySelector('#parent');
const grandparent = document.querySelector('#grandparent');

child.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('Kliknięto w dziecko');
});

parent.addEventListener('click', (e) => {
  e.currentTarget.style.padding =
    e.currentTarget.style.padding === '100px' ? '10px' : '100px';
  alert('Kliknięto w rodzica!');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

anchor.addEventListener('click', (e) => {
  e.preventDefault();

  const href = e.target.href;

  setTimeout(() => {
    window.location.replace(href);
  }, 1000);
});
