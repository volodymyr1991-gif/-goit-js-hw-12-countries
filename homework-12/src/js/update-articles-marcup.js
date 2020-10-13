import articlesTpl from '../templates/articles.hbs'

const refs = {
    articles: document.querySelector('.js-articles'),
  
  };
function updateArticlesMarcup(articles) {
    const marcup = articlesTpl(articles);
    // if(articles.length >=2 && articles.length<=10)
    refs.articles.insertAdjacentHTML('beforeend', marcup);

  }
export default updateArticlesMarcup