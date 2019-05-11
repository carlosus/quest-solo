import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest');

test('creates correct html for completed quest', (assert) => {
    //arrange
    const snatch = {
        id: 'snatch',
        title: 'Snatch Game'
    };

    const expected = '<span class="quest snatch completed">Snatch Game</span>';
    
    //act
    const dom = createCompletedQuest(snatch);

    //assert
    assert.equal(dom.outerHTML, expected); 
});