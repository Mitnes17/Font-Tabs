const navigation = (e) => {
  const element = e.target;
  const id = element.dataset.id;

  document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));

  document
    .querySelectorAll(`[data-id='${id}']`)
    .forEach((item) => item.tagName !== 'DIV' && item.classList.add('active'));

  setTimeout(() => {
    document.querySelector(`div[data-id='${id}']`).classList.add('active');
  }, 1);
};

const tabs = document.querySelectorAll('.fonts__list li');

tabs.forEach((tab) => tab.addEventListener('click', navigation));
