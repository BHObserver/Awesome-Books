const library = [];
const book = {
  title: '',
  author: '',
};
const add = document.querySelector('.add');
add.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const books = document.querySelector('.books');
  const author = document.querySelector('#author').value;
  const displayTitle = document.createElement('h3');
  const displayAuthor = document.createElement('h5');
  const removeBtn = document.createElement('button');
  books.appendChild(displayTitle);
  books.appendChild(displayAuthor);
  books.appendChild(removeBtn);
  removeBtn.classList.add('remove');
  removeBtn.innerText = 'Remove'
  book.title = title;
  book.author = author;
  library.push(book);
  displayTitle.innerText = book.title;
  displayAuthor.innerText = book.author;
});