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

    // fechArticles(inputValue).then(updateArticlesMarcup);
    fechArticles(inputValue).then(updateListMarcup);
    setTimeout(() => {
      if (refs.list.childElementCount > 10) {
        PNotify.alert('Запит потрібно зробити більш специфічним');
      }
      // console.log(refs.articles.childElementCount)
    }, 600);
  }, 1000),
  refs.list.addEventListener('click', event => {
    event.preventDefault();
    const inputValu = event.target.outerText;

    refs.list.innerHTML = '';
    refs.searchInput.value = inputValu;

    fechArticles(inputValu).then(updateArticlesMarcup);
  }),
);

// event => {
//   event.preventDefault()
//     const inputValue = event.currentTarget.value;

//     fechArticles(inputValue).then(updateArticlesMarcup);
//   }
// let bebe = ()=>{

//         // const inputValue = event.currentTarget.value;

//         // refs.articles.innerHTML = '';

//         // fechArticles(inputValue).then(updateArticlesMarcup);
//       console.log('object');
// }

// bebe = debounce(bebe,500)
