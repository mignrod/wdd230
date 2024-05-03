const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    // if (input.value != '')
    // {
    //     const li = document.createElement('li');
    //     const deleteButton = document.createElement('button');
    //     li.textContent = input.value;
    //     deleteButton.textContent = '❌';

    // }
    // else {
    //     const li = document.createElement('li');
    //     const deleteButton = document.createElement('button');
    //     li.textContent = input.value;
    //     deleteButton.textContent = '❌';
    // }
});
