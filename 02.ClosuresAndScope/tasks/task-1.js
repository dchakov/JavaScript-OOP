/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
    var library = (function() {
        var books = [];
        var categories = [];

        function listBooks() {
            if (arguments.length > 0) {
                books.sort(function(a, b) {
                    return a.arguments[0] > b.arguments[0];
                });
            } else {
                books.sort(function(a, b) {
                    return a.ID - b.ID;
                });
            }

            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;
            var checkBookTitle = book.title.length;
            var checkBookISBN = book.isbn.length;
            var booksLength = books.length;

            if (checkBookTitle < 2 || checkBookTitle > 100) {
                throw new Error();
            }

            if (typeof book.author !== 'string' || !book.author) {
                throw new Error();
            }

            if (checkBookISBN < 10 || checkBookISBN > 13) {
                throw new Error();
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
module.exports = solve;

console.log(solve().books.add({
    title: 'Wars',
    isbn: 12345678910,
    author: 'John',
    category: 'War Category'
}));
console.log(solve().books.list());
console.log(solve().categories.list());


