// for merged promises

import {
  deleteSingleAuthor, getAuthorBooks, getAuthors, getSingleAuthor
} from './authorData';
import { getSingleBook, deleteBook, getBooks } from './bookData';

// const getBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
//   // GET SINGLE BOOK
//   getSingleBook(bookfirebaseKey).then((bookObject) => { // returns single book object
//     getSingleAuthor(bookObject.author_id).then((authorObject) => resolve({ ...bookObject, authorObject }));
//   }).catch(reject);
//   // GET AUTHOR
//   // Create an object that has book data and an object named authorObject
// });

// shorthand of the above
const getBookDetailsPT2 = async (bookFirebaseKey) => {
  const bookObject = await getSingleBook(bookFirebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);

  return { ...bookObject, authorObject };
};

const getAuthorDetails = async (authorFirebaseKey) => {
  const authorObject = await getSingleAuthor(authorFirebaseKey);
  const authorsBooks = await getAuthorBooks(authorFirebaseKey);
  return { ...authorObject, books: authorsBooks };
};

const deleteAuthorandAuthorBooks = async (authorFirebaseKey) => {
  const authorBooks = await getAuthorBooks(authorFirebaseKey);
  const deleteBookPromises = await authorBooks.map((abObj) => deleteBook(abObj.firebaseKey));

  await Promise.all(deleteBookPromises).then(() => deleteSingleAuthor(authorFirebaseKey));
};

// TODO: STRETCH...SEARCH BOOKS
const searchBooks = async (searchValue) => {
  const allBooks = await getBooks();
  const allAuthors = await getAuthors();
  const filteredBooks = await allBooks.filter((book) => (
    book.title.toLowerCase().includes(searchValue)
    || book.description.toLowerCase().includes(searchValue)
    || book.price.toLowerCase().includes(parseInt(searchValue, 10))
  ));

  const filteredAuthors = await allAuthors.filter((author) => (
    author.first_name.toLowerCase().includes(searchValue)
    || author.last_name.toLowerCase().includes(searchValue)
    || author.email.toLowerCase().includes(searchValue)
  ));

  return { authors: filteredAuthors, books: filteredBooks };
};

export {
  getBookDetailsPT2, getAuthorDetails, deleteAuthorandAuthorBooks, searchBooks
};
