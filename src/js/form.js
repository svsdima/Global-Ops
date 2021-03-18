const form = () => {
    const form = document.querySelectorAll('.form_body');
    const username = document.querySelectorAll('.username');
    const email = document.querySelectorAll('.email');
    const phone = document.querySelectorAll('.phone');

    // Functions
    // Show input error message
    function showError(input, message) {
        const formItem = input.parentElement;
        formItem.className = 'form_item error';
        const small = formItem.querySelectorAll('.small');
        small.forEach((small) => {
            small.innerText = message;
        });
    }

    // Show success outline
    function showSuccess(input) {
        const formItem = input.parentElement;
        formItem.className = 'form_item success';
    }

    // Check email valid
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Check phone valid
    function isValidPhone(email) {
        const re = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
        return re.test(String(email).toLowerCase());
    }

    // Event Listeners
    form.forEach(function(e) {
        e.addEventListener('submit', function(e) {
            e.preventDefault();
    
            username.forEach((username) => {
                if (username.value === '') {
                    showError(username, 'Введите ваше имя');
                } else {
                    showSuccess(username);
                }
            })
    
            phone.forEach((phone) => {
                if (phone.value === '') {
                    showError(phone, 'Введите номер телефона');
                } else if (!isValidPhone(phone.value)) {
                    showError(phone, 'Введите правильный телефон');
                } else {
                    showSuccess(phone);
                }
            })
    
            email.forEach((email) => {
                if (email.value === '') {
                    showError(email, 'Введите email');
                } else if (!isValidEmail(email.value)) {
                    showError(email, 'Введите правильный email');
                } else {
                    showSuccess(email);
                }
            })
        });
    })
};

export default form;