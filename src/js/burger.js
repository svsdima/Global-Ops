const burger = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        
    });
};

export default burger;