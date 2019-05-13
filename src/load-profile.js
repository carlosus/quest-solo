import api from './services/api.js';

function loadProfile() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const lifeline = document.getElementById('lifeline');
    const tip = document.getElementById('tip');

    const user = api.getUser();
    
    if(!user) {
        // no user? go back to sign up:
        window.location = './'; 
    }

    avatar.src = '/assets/' + user.character + '.png';
    name.textContent = user.name;
    lifeline.textContent = 'Lifeline: ' + user.lifeLine;
    tip.textContent = 'Tip: $' + user.cashTip;
}

export default loadProfile;
