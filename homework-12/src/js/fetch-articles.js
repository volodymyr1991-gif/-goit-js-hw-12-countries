function fechArticles(searchArticles) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchArticles}`)
    .then(res => res.json())

    .then(data => data);
}

export default fechArticles;
