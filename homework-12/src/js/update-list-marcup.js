import articlesTpl from '../templates/art-list.hbs'

const refs = {
    list: document.querySelector('.artlist-js'),
  
  };
function updateListMarcup(articles) {
    const marcup = articlesTpl(articles);
    
// if(articles.length >=2 && articles.length<=10){
  refs.list.insertAdjacentHTML('beforeend', marcup);
// }
    // refs.list.insertAdjacentHTML('beforeend', marcup);

  }
export default updateListMarcup
