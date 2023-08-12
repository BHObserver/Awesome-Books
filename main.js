const add = document.querySelector('.add');
let allRemoves = document.querySelectorAll('.remove');
let library = [];
const displayBooksContainer = document.querySelector('.display-books-container');

/* Adds a book in the library */

add.addEventListener('click', () => {
  const book = {
    id: '',
    title: '',
    author: '',
  };

  book.id = Math.floor(Math.random() * Date.now()).toString(16);

  const title = `"${document.querySelector('#title').value}"`;
  const author = document.querySelector('#author').value;

  const displayBooksContainer = document.querySelector('.display-books-container');

  const displayBook = document.createElement('div');
  displayBook.classList.add('display-book');
  displayBook.id = book.id;

  const displayBookDetails = document.createElement('div');
  displayBookDetails.classList.add('display-book-details');
  displayBook.appendChild(displayBookDetails);

  const displayTitle = document.createElement('h4');
  displayBookDetails.appendChild(displayTitle);

  const span = document.createElement('span');
  span.innerHTML = 'by&nbsp';
  displayBookDetails.appendChild(span);

  const displayAuthor = document.createElement('h5');
  displayBookDetails.appendChild(displayAuthor);

  const removeBtn = document.createElement('button');
  displayBook.appendChild(removeBtn);
  removeBtn.classList.add('remove');
  removeBtn.innerText = 'Remove';

  displayBooksContainer.appendChild(displayBook);

  book.title = title;
  book.author = author;
  library.push(book);
  displayTitle.innerText = book.title;
  displayAuthor.innerText = book.author;

  if (library.length !== 0) {
    displayBooksContainer.style.display = 'flex';
  }

  /* if (library.length % 2 === 0) {
    displayBookDetails.style.background = 'rgba(6, 238, 33, 0.529)';
    removeBtn.style.background = 'rgba(6, 238, 33, 0.529)';
  } */

  /* Save to local Storage */
  localStorage.setItem('collections', JSON.stringify(displayBooksContainer.innerHTML));
  localStorage.setItem('library', JSON.stringify(library));
});

/* Removes a book from the library */
function removeItem() {
  allRemoves = document.querySelectorAll('.remove');
  allRemoves.forEach((element) => {
    element.addEventListener(('click'), () => {
      const children = element.parentElement.firstChild.childNodes;
      const { id } = element.parentElement;
      const targetTitle = children[0].innerText;
      const targetAuthor = children[2].innerText;
      element.parentElement.remove();
      library = library.filter((b) => b.id !== id
              || b.title !== targetTitle
              || b.author !== targetAuthor);
      if (library.length === 0) {
        displayBooksContainer.style.display = 'none';
      }
    });
  });
  /* Update Local Storage */
  localStorage.setItem('collections', JSON.stringify(displayBooksContainer.innerHTML));
  localStorage.setItem('library', JSON.stringify(library));
}

window.onclick = () => {
  removeItem();
};

window.onload = () => {
  removeItem();
};

function revive() {
  localStorage.getItem('library');
  const gigli = JSON.parse(localStorage.getItem('collections'));
  displayBooksContainer.innerHTML = gigli;
  library = JSON.parse(localStorage.getItem('library')) || [];
}

revive();

if (library.length === 0) {
  displayBooksContainer.style.display = 'none';
}