import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('creates correct html', (assert) => {
    //arrange
    const snatch = {
        id: 'snatch',
        title: 'Snatch Game'
    };

    const expected = '<a class="quest snatch" href="quest.html?id=snatch">Snatch Game</a>';
    
    //act
    const dom = createQuestLink(snatch);

    //assert
    assert.equal(dom.outerHTML, expected); 
});