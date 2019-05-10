import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('apitest');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and returns on getUser', (assert) => {
    //arrange
    const user = {
        name: 'Carlos',
        character: 'Valentina',
        lifeLine: '50',
        cashTip: '0'
    };

    //act
    api.signUp(user);
    const result = api.getUser();

    //assert
    assert.deepEqual(result, user);
});