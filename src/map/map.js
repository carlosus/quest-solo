import api from '../services/api.js';

const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const lifeline = document.getElementById('lifeline');
const tip = document.getElementById('tip');

const user = api.getUser();
console.log(user);

avatar.src = '/assets/' + user.character + '.png';
name.textContent = user.name;

lifeline.textContent = 'Lifeline: ' + user.lifeLine;
tip.textContent = 'Tip: $' + user.cashTip;
console.log(user.name);
