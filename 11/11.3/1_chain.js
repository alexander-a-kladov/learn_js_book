'use strict';

function loadJson(url) {
    return fetch(url)
      .then(response => response.json());
  }
  
  function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json());
  }
  
  function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve(githubUser);
      }, 3000);
    });
  }
  
  // Используем их:
  loadJson('https://alexander-a-kladov.github.io/ak8toptrade/user.json')
    .then(user => loadGithubUser(user.name)).catch(error => console.log(error.name))
    .then(showAvatar)
    .then(githubUser => console.log(`Показ аватара ${githubUser.name} завершён`));
    // ...