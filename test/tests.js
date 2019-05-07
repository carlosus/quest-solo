const test = QUnit.test;

function makeQueen(formData) {
    const queen = {
        name: formData.get('name'),
        character: formData.get('character'),
    };
    return queen;
}

test('create user from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'Carlos');
    formData.set('character', 'Valentina');

    const expected = {
        name: 'Carlos',
        character: 'Valentina'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const queen = makeQueen(formData);

    //Assert
    assert.deepEqual(queen, expected);
});