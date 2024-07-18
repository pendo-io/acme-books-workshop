const serverLatency = 0;

export function fetchBooks() {
  return new Promise((resolve) => {
    fetch(`../data/books.json`)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          resolve(json.data);
        }, serverLatency);
      });
  });
}

export function validateBook(book) {
  if (!Object.prototype.hasOwnProperty.call(book, "isbn")) {
    throw new Error("Book must have an ISBN");
  } else if (typeof book.isbn !== "string") {
    throw new Error("ISBN must be a string");
  }

  if (!Object.prototype.hasOwnProperty.call(book, "title")) {
    throw new Error("Book must have a title");
  } else if (typeof book.title !== "string") {
    throw new Error("Title must be a string");
  }

  if (!Object.prototype.hasOwnProperty.call(book, "authors")) {
    throw new Error("Book must have at least one author");
  } else if (!Array.isArray(book.authors)) {
    throw new Error("Authors must be an array");
  }

  if (typeof book.pageCount !== "number") {
    throw new Error("Page count must be a number");
  }

  if (typeof book.publishedDate !== "string") {
    throw new Error("Published date must be a string");
  }

  if (typeof book.thumbnailUrl !== "string") {
    throw new Error("Thumbnail URL must be a string");
  }

  if (typeof book.shortDescription !== "string") {
    throw new Error("Short description must be a string");
  }

  if (typeof book.longDescription !== "string") {
    throw new Error("Long description must be a string");
  }

  if (!Array.isArray(book.categories)) {
    throw new Error("Categories must be an array");
  }

  if (typeof book.favorite !== "boolean") {
    throw new Error("Favorite must be a boolean");
  }
}
