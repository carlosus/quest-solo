function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add(quest.id);
    span.classList.add('completed');

    span.textContent = quest.title;

    return span;
}

export default createCompletedQuest;