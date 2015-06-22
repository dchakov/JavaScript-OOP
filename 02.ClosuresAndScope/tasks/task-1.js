/* Task Description */
/* 
	*	Create a module for working with books:OK
		*	The module must provide the following functionalities:OK
			*	Add a new book to category
				*	Each book has unique title, author and ISBN:OK
				*	It must return the newly created book with assigned ID:OK
				*	If the category is missing, it must be automatically created:OK
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories:OK
				*	Categories are sorted by ID:OK
		*	Each book/cetagory has a unique identifier (ID) that is a number greater than or equal to 1:OK
			*	When adding a book/category, the ID is generated automatically:OK
		*	Add validation everywhere, where possible:OK
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc):OK
			*	Author is any non-empty string:OK
			*	Unique params are Book title and Book ISBN:OK
			*	Book ISBN is an unique code that contains either 10 or 13 digits:OK
			*	If something is not valid - throw Error:OK
*/
function solve() {
    var library = (function() {
        var books = [];
        var categories = [];

        function listBooks(arguments) {
            if (arguments) {
                if (arguments.hasOwnProperty('category')) {
                    if (categories[arguments.category]) {
                        return categories[arguments.category].books;
                    }else{
                        return [];
                    }
                    
                }
                if (arguments.hasOwnProperty('author')) {
                    books = books.filter(function(index) {
                        return index.author === arguments.author;
                    });
                };
            }
            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;
            var checkBookTitle = book.title.length;
            var checkBookISBN = book.isbn.toString().length;
            var booksLength = books.length;
            var index = categories.length + 1;

            if (checkBookTitle < 2 || checkBookTitle > 100) {
                throw new Error();
            }

            if (typeof book.author !== 'string' || !book.author) {
                throw new Error();
            }

            if (!(checkBookISBN === 10 || checkBookISBN === 13) || isNaN(book.isbn)) {
                throw new Error('Not a number or different digits');
            }

            for (var i = 0; i < booksLength; i += 1) {
                if (books[i].title === book.title || books[i].isbn === book.isbn) {
                    throw new Error();
                }
            }

            if (Object.keys(categories).indexOf(book.category) < 0) {
                categories[book.category] = {
                    ID: index,
                    books: []
                }
            }
            
            categories[book.category].books.push(book);
            books.push(book);
            return book;
        }

        function listCategories() {
           return Object.keys(categories);
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





