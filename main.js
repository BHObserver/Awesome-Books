const library = [];
const book = {
  title: '',
  author: '',
};
const add = document.querySelector('.add');
add.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  book.title = title;
  book.author = author;
  library.push(book);
});