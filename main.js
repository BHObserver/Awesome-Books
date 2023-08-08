const library = [];
const book = {
  title: '',
  author: '',
};
const add = document.querySelector('.add');
add.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const displayBooksContainer = document.querySelector('.display-books-container');
  const author = document.querySelector('#author').value;
  const displayBook = document.createElement('div');
  const displayTitle = document.createElement('h2');
  const displayAuthor = document.createElement('h3');
  const removeBtn = document.createElement('button');
  const underline = document.createElement('hr');
  underline.classList.add('underline');
  displayBook.classList.add('display-book');
  displayBook.appendChild(displayTitle);
  displayBook.appendChild(displayAuthor);
  displayBook.appendChild(removeBtn);
  displayBook.appendChild(underline);
  displayBooksContainer.appendChild(displayBook);
  removeBtn.classList.add('remove');
  removeBtn.innerText = 'Remove';
  book.title = title;
  book.author = author;
  library.push(book);
  displayTitle.innerText = book.title;
  displayAuthor.innerText = book.author;
});