import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
    <div class="mt-5">
      <i id="update-author-btn--${obj.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></i></span>
      <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></i></span>
    </div>
  </div>
  <div class="text-white ms-5 details">
    <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
    Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
    <p>Books: ${obj.books[0].title || ''}</p>
    <hr>    
     </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
