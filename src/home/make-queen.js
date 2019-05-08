function makeQueen(formData) {
    const queen = {
        name: formData.get('name'),
        character: formData.get('character'),
        lifeLine: '50',
        cashTip: '0'
    };
    
    return queen;
}

export default makeQueen;