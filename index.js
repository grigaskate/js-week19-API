// Задание 1
const articlesList = document.querySelector(".articles"); //находим разметку, куда нужно поместить посты

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((elem) => {
      const div = document.createElement("div");
      div.classList.add("containerArticle");
      div.innerHTML = `
            <p class="title">Заголовок: ${elem.title}</p>
            <p>Сообщение: ${elem.body}</p>
            `;
      articlesList.append(div);
    });
  })
  .catch((err) => {
    articlesList.innerHTML = `Произошла ошибка. Обратитесь в техническую поддержку.`;
  });

//Задание 2
//Объявляем константы для элементов DOM
const formInput = document.querySelector(".form__addArticle");
const articleTitle = document.querySelector(".article__title");
const articleText = document.querySelector(".article__text");
const addArticleBtn = document.querySelector(".article__btn");

//Функция для кнопки "Создать пост"
addArticleBtn.onclick = function (event) {
  event.preventDefault();
  let article = {
    title: articleTitle.value,
    body: articleText.value,
  };
  if (articleTitle.value === "" || articleText.value === "") {
    addArticleBtn.style.display = "block";
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((article) => {
        const newArticle = document.querySelector(".newArticle");
        console.log(article);
        const display = `<div class="containerArticle">
                        <p  class="title">Заголовок: ${article.title}</p>
                        <p>${article.body}</p>
                      </div>`;
        newArticle.innerHTML += display;
        articleTitle.value = "";
        articleText.value = "";
      })
      .catch((err) => {
        articlesList.innerHTML = `Произoшла ошибка. Обратитесь в техническую поддержку.`;
      });
  }
};
