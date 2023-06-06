// Задание 1
const articlesList = document.querySelector(".articles");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((elem) => {
      const div = document.createElement("div");
      div.classList.add("article");
      div.innerHTML = `
            <p class="title">Заголовок: ${elem.title}</p>
            <p>Сообщение: ${elem.body}</p>
            `;
      articlesList.append(div);
    });
  })
  .catch((err) => {
    articlesList.innerHTML = `Произшла ошибка. Обратитесь в техническую поддержку.`;
  });

//Задание 2
