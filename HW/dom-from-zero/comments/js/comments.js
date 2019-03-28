'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment);
  commentsContainer.innerHTML += comments;
}

function createComment(comment) {
  return `<div class="comment-wrap">
    <div class="photo" title="${comment.author.name}">
      <div class="avatar" style="background-image: url('${comment.author.pic}')"></div>
    </div>
    <div class="comment-block">
      <p class="comment-text">
        ${comment.text.split('\n').join('<br>')}
      </p>
      <div class="bottom-comment">
        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
        <ul class="comment-actions">
          <li class="complain">Пожаловаться</li>
          <li class="reply">Ответить</li>
        </ul>
      </div>
    </div>
  </div>`
}

async function f() {
  let response = await fetch('https://neto-api.herokuapp.com/comments');
  let res = await response.json();
  console.log(res);
  await showComments(res);
}
f();
//.then(showComments);
