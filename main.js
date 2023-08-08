const add = document.querySelector('.add');
let library = [];

/* Adds a book in the library */
add.addEventListener('click', () => {
  const book = {
    title: '',
    author: '',
  };
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const displayBooksContainer = document.querySelector('.display-books-container');

  const displayBook = document.createElement('div');
  displayBook.classList.add('display-book');

  const displayTitle = document.createElement('h2');
  displayBook.appendChild(displayTitle);

  const displayAuthor = document.createElement('h3');
  displayBook.appendChild(displayAuthor);

  const removeBtn = document.createElement('button');
  displayBook.appendChild(removeBtn);
  removeBtn.classList.add('remove');
  removeBtn.innerText = 'Remove';

  const underline = document.createElement('hr');
  underline.classList.add('underline');
  displayBook.appendChild(underline);

  displayBooksContainer.appendChild(displayBook);

  book.title = title;
  book.author = author;
  library.push(book);
  displayTitle.innerText = book.title;
  displayAuthor.innerText = book.author;

  /* Removes a book from the library */
  const remove = document.querySelectorAll('.remove');
  remove.forEach((element) => {
    element.addEventListener(('click'), () => {
      const children = element.parentElement.childNodes;
      const targetTitle = children[0].innerText;
      const targetAuthor = children[1].innerText;
      element.parentElement.remove();
      library = library.filter((b) => b.title !== targetTitle || b.author !== targetAuthor);
    });
  });
});

/* Save to local Storage */
localStorage.setItem('library', JSON.stringify(library));