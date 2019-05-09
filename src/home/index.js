import api from '../services/api.js';
import makeQueen from './make-queen.js';

// Handle Form Submit and Log User Object

// Reference the form from the DOM
const queenForm = document.getElementById('user-sign-up');
queenForm.addEventListener('submit', event => {
    // Subscribe to submit event (don't forget to prevent default action!)
    event.preventDefault();

    // Make formData from form
    const formData = new FormData(queenForm);
    // Call makeUser
    const queen = makeQueen(formData);

    // Form event calls api.sigUp to save user
    api.signUp(queen);
});