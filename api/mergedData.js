// for merged promises

import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

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

export { getBookDetailsPT2, getAuthorDetails };
