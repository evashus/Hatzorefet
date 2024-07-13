document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.contact-form');
    var phone = document.getElementById('phone');


    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
        } else {

            event.preventDefault();
            var button = document.getElementById('sendButton');
            button.classList.add('success');
            button.innerHTML = 'נשלח <i class="fa-solid fa-check"></i>';
            setTimeout(function () {
                button.classList.remove('success');
                button.innerHTML = 'שלחי <i class="fa-solid fa-check"></i>';
                form.submit(); // שולח את הטופס לאחר האנימציה
            }, 3000);
        }
    });
});
