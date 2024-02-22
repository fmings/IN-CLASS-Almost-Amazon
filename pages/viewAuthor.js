import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
    <img src=${obj.image} alt=${obj.title} style="width: 300px;">
    <div class="mt-5">
      <i id="edit-book-btn--${obj.firebaseKey}" class="btn btn-info"><span class="fas fa-edit"></i></span>
      <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger"><span class="fas fa-trash-alt"></i></span>
    </div>
  </div>
  <div class="text-white ms-5 details">
    <h5>${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
    Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
    <p>${obj.title || ''}</p>
    <hr>    
     </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
