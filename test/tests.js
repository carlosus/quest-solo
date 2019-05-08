import makeQueen from '../src/home/make-queen.js';

const test = QUnit.test;

test('create user from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'Carlos');
    formData.set('character', 'Valentina');

    const expected = {
        name: 'Carlos',
        character: 'Valentina',
        lifeLine: '50',
        cashTip: '0'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const queen = makeQueen(formData);

    //Assert
    assert.deepEqual(queen, expected);
});