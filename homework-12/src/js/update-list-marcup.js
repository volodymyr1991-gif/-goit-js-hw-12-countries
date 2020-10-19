import articlesTpl from '../templates/art-list.hbs';

const refs = {
  list: document.querySelector('.artlist-js'),
  articles: document.querySelector('.js-articles'),
};
function updateListMarcup(articles) {
  const marcup = articlesTpl(articles);

  refs.list.innerHTML = marcup;
}
export default updateListMarcup;
