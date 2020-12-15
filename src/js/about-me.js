import "../scss/main.scss";

// import stored json aquired from github
import * as githubRepositoriesList from "../../myGithubRepository.json";

// assign costant to element list from about-me page
const repositoryListItem = document.querySelector(".github__repo--js");
console.log(repositoryListItem);

// for each element (repository) in json array
for (let repository of githubRepositoriesList.default) {
    // destructuring from object respository and extract properties
  let { name, html_url, description } = repository;
  repositoryListItem.innerHTML += `<li class="github__repository"><a href="${html_url}" title="${description}">${name}</a></li>`;
}
