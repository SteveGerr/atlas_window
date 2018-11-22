export default function validation() {
    let body = document.body,      
        inputName = document.querySelectorAll('.form_input_name'),
        inputPhone = document.querySelectorAll('.form_input_phone');

    body.addEventListener('input', function (e) {
        e.preventDefault();
        // Если e.target - кликнутый элемент И этот элемент  соответсвтует селектору form_input_name
        if (e.target && e.target.classList.contains('form_input_name')) {
            for (let i = 0; i < inputName.length; i++) {
                inputName[i].addEventListener('input', function () {
                    this.value = this.value.replace(/[^А-Яа-я]/ig, '');
                });
            }

        } else if (e.target && e.target.classList.contains('form_input_phone')) {
            for (let i = 0; i < inputPhone.length; i++) {
                inputPhone[i].addEventListener('input', function () {
                    this.value = this.value.replace(/[^0-9+]/ig, '');
                });
            }
        }
    }); //End Event Body
}
