const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

button.addEventListener('click', () => {

    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.focus();
        input.value = '';
    } else {
        alert('Empty value');
        input.focus();
    }
    

});

chapterArray.forEach(chapter => {
    displayList(chapter);

});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;

    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();

    });
};

function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chapterArray));

};

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));

}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();


}


