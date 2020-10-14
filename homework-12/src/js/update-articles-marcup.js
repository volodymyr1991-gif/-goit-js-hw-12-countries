import articlesTpl from '../templates/articles.hbs';

const refs = {
  articles: document.querySelector('.js-articles'),
};
function updateArticlesMarcup(articles) {
  const marcup = articlesTpl(articles);

  refs.articles.insertAdjacentHTML('beforeend', marcup);
}
export default updateArticlesMarcup;
