const banner = document.querySelector('#advertising');
const date = new Date();
const options = { weekday: 'long' };

const today = new Intl.DateTimeFormat("en-US", options).format(date);

if(today === 'Monday' || today === 'Tuesday' || today === 'Wednesday') {
    banner.classList.remove('prove');

} else {
    banner.classList.add('prove');
}

const bannerClose = document.querySelector('.ads');

bannerClose.addEventListener('click', () => {
    banner.classList.add('prove');

});
