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
                if (arguments[0].hasOwnProperty('catagory')) {
                   return books.filter(function(book) {
                        return book.catagory == arguments[0].catagory;
                    });
                }
            }
            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;
            var checkBookTitle = book.title.length;
            var checkBookISBN = book.isbn.toString().length;
            var booksLength = books.length;
            var index = 0;

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

            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
            
            if (categories.indexOf(book.category) < 0) { // name of category.name not book.
                var category = {
                    name: book.category,
                    ID: categories.length + 1,
                    books: []
                };
                categories.push(category);
            }
            index = findIndexByKeyValue(categories, 'name', book.category);

            categories[index].books.push(book);

            books.push(book);
            return book;
        }
        

        function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
            for (var i = 0; i < arraytosearch.length; i++) {
                if (arraytosearch[i][key] === valuetosearch) {
                    return i;
                }
            }
        }

        function listCategories() {
            return categories.map(function(category) {
                return category.name;
            });
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


