const library = [];
const book = {
  title: '',
  author: '',
};
const add = document.querySelector('.add');
add.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const displayTitle = document.querySelector('.title');
  const author = document.querySelector('#author').value;
  const displayAuthor = document.querySelector('.author');
  book.title = title;
  book.author = author;
  library.push(book);
  displayTitle.innerText = book.title;
  displayAuthor.innerText = book.author;
});