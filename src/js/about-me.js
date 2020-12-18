import "../scss/main.scss";

// assign costant to element list from about-me page
const repositoryListItem = document.querySelector(".github__repo--js");
console.log(repositoryListItem);

// fetch my github respository list sorted from newest
fetch("https://api.github.com/users/szewczykkrzysztof/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    // for each element (repository) in json array
    for (let repository of resp) {
      // destructuring from object respository and extract properties
      let { name, html_url, description } = repository;
      repositoryListItem.innerHTML += `<li class="github__repository"><a href="${html_url}" title="${description}">${name}</a></li>`;
    }
  })
  .catch(console.error("Błąd w pobieraniu danych z API Github"));
