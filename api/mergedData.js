// for merged promises

import { deleteSingleAuthor, getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook, deleteBook } from './bookData';

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

export { getBookDetailsPT2, getAuthorDetails, deleteAuthorandAuthorBooks };
