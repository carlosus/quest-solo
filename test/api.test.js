import api from '../src/services/api.js';
import quests from '../src/services/quests-data.js';
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

test('return list of quests', (assert) => {
    //arrange
    const expected = quests;
    //act
    const actual = api.getQuests();
    //assert
    assert.deepEqual(expected, actual);
});

test('return quest by id', (assert) => {
    //arrange
    const expected = quests[2];
    //act
    const actual = api.getQuest(expected.id);
    //asert
    assert.deepEqual(expected, actual);
});

