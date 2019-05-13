function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');
    link.classList.add(quest.id);
    
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);

    link.href = 'quest.html?' + searchParams.toString();
    // link.href = 'quest.html?id=' + quest.id;

    link.textContent = quest.title;

    return link;
}

export default createQuestLink;