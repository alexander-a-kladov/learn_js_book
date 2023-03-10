'use strict';

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    }
    throw new HttpError(response);
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    let user;
    let count=0;
    while (1) {
      let name = "iliakan";
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 403) {
          count++;
          console.log(count);
          if (count>5) {
            break;
          }
        } else {
          throw err;
        }
      }
    }
    return user;
  }
  
  demoGithubUser();