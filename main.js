class Library {
  constructor() {
    this.books = [];
    this.loadBooks();
  }

  addBook(title, author) {
    const book = {
      title: title,
      author: author,
    };
    this.books.push(book);
    this.saveBooks();
    return book;
  }

  removeBook(title, author) {
    this.books = this.books.filter(
      (book) => book.title !== title || book.author !== author
    );
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem("library", JSON.stringify(this.books));
  }

  loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem("library")) || [];
    this.books = storedBooks;
  }
}

class UI {
  constructor(library) {
    this.library = library;
    this.displayBooksContainer = document.querySelector(
      ".display-books-container"
    );
    this.titleInput = document.querySelector("#title");
    this.authorInput = document.querySelector("#author");
    this.addBtn = document.querySelector(".add");

    this.addBtn.addEventListener("click", () => this.addBook());
    this.displayBooks();
  }

  addBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    if (title && author) {
      const book = this.library.addBook(title, author);
      this.displayBook(book);
      this.clearInputs();
    }
  }

  displayBooks() {
    this.library.books.forEach((book) => this.displayBook(book));
  }

  displayBook(book) {
    const displayBook = document.createElement("div");
    displayBook.classList.add("display-book");

    const displayTitle = document.createElement("h2");
    displayTitle.textContent = book.title;
    displayBook.appendChild(displayTitle);

    const displayAuthor = document.createElement("h3");
    displayAuthor.textContent = book.author;
    displayBook.appendChild(displayAuthor);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => this.removeBook(book));
    displayBook.appendChild(removeBtn);

    const underline = document.createElement("hr");
    underline.classList.add("underline");
    displayBook.appendChild(underline);

    this.displayBooksContainer.appendChild(displayBook);
  }

  removeBook(book) {
    this.library.removeBook(book.title, book.author);
    this.clearDisplay();
    this.displayBooks();
  }

  clearInputs() {
    this.titleInput.value = "";
    this.authorInput.value = "";
  }

  clearDisplay() {
    this.displayBooksContainer.innerHTML = "";
  }
}

const library = new Library();
const ui = new UI(library);
