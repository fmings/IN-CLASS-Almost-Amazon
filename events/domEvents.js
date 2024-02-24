import { deleteSingleAuthor, getAuthors, getSingleAuthor } from '../api/authorData';
import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { getBookDetailsPT2, getAuthorDetails } from '../api/mergedData';
import addAuthorForm from '../components/forms/addAuthorForm';
import addBookForm from '../components/forms/addBookForm';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import viewAuthor from '../pages/viewAuthor';
import viewBook from '../pages/viewBook';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
      getSingleBook(firebaseKey).then(addBookForm);
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getBookDetailsPT2(firebaseKey).then(viewBook);
      console.warn('VIEW BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        console.warn(deleteSingleAuthor(firebaseKey).then(() => {
          getAuthors().then(showAuthors);
        }));
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      // getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
      getSingleAuthor(firebaseKey).then(addAuthorForm);
    }

    // CLICK EVENT FOR VIEWING AUTHOR DETAILS
    if (e.target.id.includes('view-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey).then(viewAuthor);
    }
  });
};

export default domEvents;
