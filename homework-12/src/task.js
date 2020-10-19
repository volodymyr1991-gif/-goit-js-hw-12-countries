import fechArticles from './js/fetch-articles.js';

import updateListMarcup from './js/update-list-marcup.js';

import updateArticlesMarcup from './js/update-articles-marcup.js';
import debounce from 'debounce';

import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

const refs = {
  articles: document.querySelector('.js-articles'),
  searchInput: document.querySelector('.input'),
  list: document.querySelector('.artlist-js'),
};

refs.searchInput.addEventListener(
  'input',
  debounce(function (event) {
    event.preventDefault();
    const inputValue = event.target.value;

    refs.list.innerHTML = '';
    refs.articles.innerHTML = '';
    fechArticles(inputValue).then(res => {
      if (res.length > 10) {
        setTimeout(() => {
          PNotify.error({
            text: 'Запит потрібно зробити більш специфічним.',
            delay: 2000,
          });
        }, 600);
      } else if (res.length >= 2 && res.length <= 10) {
        updateListMarcup(res);
      } else if ((res.length = 1)) {
        updateArticlesMarcup(res);
        refs.list.innerHTML = '';
      }
    });
  }, 600),
  refs.list.addEventListener('click', event => {
    event.preventDefault();
    const inputValues = event.target.outerText;

    refs.list.innerHTML = '';
    refs.searchInput.value = inputValues;

    fechArticles(inputValues).then(updateArticlesMarcup);
  }),
);
