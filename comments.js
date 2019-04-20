window.onload = function () {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json));
      var posts;
      posts = JSON.stringify(json);
      posts = JSON.parse(posts);
      var content = '';
      var newPost = document.createElement('div');
      content += '<h2 data-posts="title">' + posts.title + '</h2>';
      content += '<p data-posts="body">' + posts.body.replace(/\n/g, '<br>') + '</p>';
      newPost.innerHTML = content;
      var target = document.querySelector('.post1');
      target.appendChild(newPost, target);
    });

  fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json));
      var posts;
      posts = JSON.stringify(json);
      posts = JSON.parse(posts);
      var content = '';
      var newPost = document.createElement('div');
      content += '<h2 data-posts="title">' + posts.title + '</h2>';
      content += '<p data-posts="body">' + posts.body.replace(/\n/g, '<br>') + '</p>';
      newPost.innerHTML = content;
      var target = document.querySelector('.post2');
      target.appendChild(newPost, target);
    });
};

(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';
  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  var buttonOne = false;
  var buttonTwo = false;
  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);
    button.addEventListener('click', function (event) {
      if (!buttonOne) {
        getComments1();
        buttonOne = true;
      }
      if (!buttonTwo) {
        getComments2();
        buttonTwo = true;
      }
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }
      event.preventDefault();
    });
  });
})(window);

function getComments1 () {
  var comments = '';
  fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json));
      comments = JSON.stringify(json);
      comments = JSON.parse(comments);
      var content = '';
      var newComment = document.createElement('div');
      content += '<p data-comments="body">' + comments.body.replace(/\n/g, '<br>') + '</p>';
      content += '<address data-comments="name">';
      content += '<a data-comments="email" href=' + comments.email + '>' + comments.name + '</a>';
      content += '</address>';
      newComment.innerHTML = content;
      var target = document.querySelector('#comments-1');
      target.appendChild(newComment, target);
    });
}

function getComments2 () {
  var comments = '';
  fetch('https://jsonplaceholder.typicode.com/comments/2')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json));
      comments = JSON.stringify(json);
      comments = JSON.parse(comments);
      var content = '';
      var newComment = document.createElement('div');
      content += '<p data-comments="body">' + comments.body.replace(/\n/g, '<br>') + '</p>';
      content += '<address data-comments="name">';
      content += '<a data-comments="email" href=' + comments.email + '>' + comments.name + '</a>';
      content += '</address>';
      newComment.innerHTML = content;
      var target = document.querySelector('#comments-2');
      target.appendChild(newComment, target);
    });
}