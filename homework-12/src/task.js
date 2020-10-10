import articlesTpl from './templates/articles.hbs'

const refs = {
    articles: document.querySelector('.js-articles')
}


fetch('https://restcountries.eu/rest/v2/name/unit',)
.then(res=>res.json())
.then((articles)=>{
    console.log(articles)
    const marcup = articlesTpl(articles)
    console.log(marcup);

    refs.articles.insertAdjacentHTML('beforeend', marcup)
});

