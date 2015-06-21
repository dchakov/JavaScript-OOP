function solve() {
    var library = (function() {
        var books = [];
        var categories = [];

        function listBooks(obj) {
            if (arguments.length > 0) {
                books = books.filter(function (book) {
                    return book.category == obj.category;
                });
            } 

            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;
            var checkBookTitle = book.title.length;
            var checkBookISBN = book.isbn.toString().length;
            var booksLength = books.length;

            if (checkBookTitle < 2 || checkBookTitle > 100) {
                throw new Error();
            }

            if (typeof book.author !== 'string' || !book.author) {
                throw new Error();
            }

            if (checkBookISBN < 10 || checkBookISBN > 13 || isNaN(book.isbn)) {
                throw new Error('Not a number or too many digits');
            }

            for (var i = 0; i < booksLength; i += 1) {
                if (books[i].title === book.title || books[i].isbn === book.isbn) {
                    throw new Error();
                }
            }
            if (categories.indexOf(book.category) < 0) {
                categories.push(book.category);
            }

            books.push(book);
            return book;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}