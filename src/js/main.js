import slider from './slider';
import form from './form';
import scrolling from './scrolling';
import burger from './burger';

document.addEventListener('DOMContentLoaded', () => {
    slider();
    form();
    scrolling('.pageup');
    burger();
});