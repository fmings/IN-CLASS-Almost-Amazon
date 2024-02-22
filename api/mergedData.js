// for merged promises

import { getSingleAuthor } from './authorData';
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

// const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleAuthor(firebaseKey).then(authorObject) => {
//     getSingleBook(authorObject.bo)
//   }

export default getBookDetailsPT2;
