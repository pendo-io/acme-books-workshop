const serverLatency = 0;

export function getBooks () {
    return new Promise((resolve) => {
        fetch(`@/data/books.json`)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    resolve(json.data);
                }, serverLatency);
            });
    });
}

export function getFavoriteBooks () {
    return new Promise((resolve) => {
        fetch(`../../data/books.json`)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    resolve(json.data.filter((book) => book.favorite));
                }, serverLatency);
            });
    });
}

export function getBookByIsbn (isbn) {
    return new Promise((resolve, reject) => {
        fetch(`../data/books.json`)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    const book = json.data.find((book) => book.isbn === isbn);
                    if (!book) {
                        reject(new Error('Book not found'));
                    }
                    resolve(book);
                }, serverLatency);
            });
    });
}

export function createBook (book) {
    return new Promise((resolve, reject) => {
        getBookByIsbn(book.isbn)
            .catch(() => {
                validateBook(book).catch((error) => reject(error));

                const defaultValues = {
                    pageCount: -1,
                    publishedDate: '',
                    thumbnailUrl: 'https://picsum.photos/150/190',
                    shortDescription: '',
                    longDescription: '',
                    categories: [],
                    favorite: false,
                };
                const bookToCreate = {
                    ...defaultValues,
                    ...book,
                };

                fetch(`../data/books.json`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bookToCreate),
                }).then(() => {
                    setTimeout(() => {
                        resolve(bookToCreate);
                    }, serverLatency);
                });
            })
            .then((book) => {
                reject(new Error('Book already exists', book));
            });
    });
}

export function deleteBook (isbn) {
    return new Promise((resolve, reject) => {
        getBookByIsbn(isbn)
            .catch((error) => reject(error))
            .then(() => {
                fetch(`../data/books.json`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ isbn }),
                }).then(() => {
                    setTimeout(() => {
                        resolve();
                    }, serverLatency);
                });
            });
    });
}




export function updateBook (isbn, updates) { // ORIGINAL
    return new Promise((resolve, reject) => {
        getBookByIsbn(isbn)
            .catch((error) => reject(error))
            .then((currentBook) => {
                console.log(currentBook);
                const bookWithUpdates = {
                    ...currentBook,
                    ...updates,
                };
                console.log(bookWithUpdates);
                validateBook(bookWithUpdates).catch((error) => reject(error));

                fetch(`../data/books.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bookWithUpdates),
                }).then(() => {
                    setTimeout(() => {
                        resolve();
                    }, serverLatency);
                });
            });
    });
}


function validateBook(book) { // NEW
    return new Promise((resolve, reject) => {
        try {
            if (!Object.prototype.hasOwnProperty.call(book, 'isbn')) {
                throw new Error('Book must have an ISBN');
            } else if (typeof book.isbn !== 'string') {
                throw new Error('ISBN must be a string');
            }

            if (!Object.prototype.hasOwnProperty.call(book, 'title')) {
                throw new Error('Book must have a title');
            } else if (typeof book.title !== 'string') {
                throw new Error('Title must be a string');
            }

            if (!Object.prototype.hasOwnProperty.call(book, 'authors')) {
                throw new Error('Book must have at least one author');
            } else if (!Array.isArray(book.authors)) {
                throw new Error('Authors must be an array');
            }

            if (typeof book.pageCount !== 'number') {
                throw new Error('Page count must be a number');
            }

            if (typeof book.publishedDate !== 'string') {
                throw new Error('Published date must be a string');
            }

            if (book.thumbnailUrl && typeof book.thumbnailUrl !== 'string') {
                throw new Error('Thumbnail URL must be a string');
            }

            if (book.shortDescription && typeof book.shortDescription !== 'string') {
                throw new Error('Short description must be a string');
            }

            if (book.longDescription && typeof book.longDescription !== 'string') {
                throw new Error('Long description must be a string');
            }

            if (book.categories && !Array.isArray(book.categories)) {
                throw new Error('Categories must be an array');
            }

            if (typeof book.favorite !== 'boolean') {
                throw new Error('Favorite must be a boolean');
            }

            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
/*
function validateBook (book) { // ORIGINAL
    if(!Object.prototype.hasOwnProperty.call(book, 'isbn')) {
        throw new Error('Book must have an ISBN');
    } else if (typeof book.isbn !== 'string') {
        throw new Error('ISBN must be a string');
    }

    if(!Object.prototype.hasOwnProperty.call(book, 'title')) {
        throw new Error('Book must have a title');
    } else if (typeof book.title !== 'string') {
        throw new Error('Title must be a string');
    }

    if(!Object.prototype.hasOwnProperty.call(book, 'authors')) {
        throw new Error('Book must have at least one author');
    } else if (!Array.isArray(book.authors)) {
        throw new Error('Authors must be an array');
    }

    if(typeof book.pageCount !== 'number') {
        throw new Error('Page count must be a number');
    }

    if(typeof book.publishedDate !== 'string') {
        throw new Error('Published date must be a string');
    }

    if(typeof book.thumbnailUrl !== 'string') {
        throw new Error('Thumbnail URL must be a string');
    }

    if(typeof book.shortDescription !== 'string') {
        throw new Error('Short description must be a string');
    }

    if(typeof book.longDescription !== 'string') {
        throw new Error('Long description must be a string');
    }

    if(!Array.isArray(book.categories)) {
        throw new Error('Categories must be an array');
    }

    if(typeof book.favorite !== 'boolean') {
        throw new Error('Favorite must be a boolean');
    }
}
*/