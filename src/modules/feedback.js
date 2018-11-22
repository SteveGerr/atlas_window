export default function feedback() {
    "use strict";
    //Создаём объект message, который будет выводить сообщение о статусе отправки,
    //после нажатия на кнопку "Отправить"
    let message = {
        loading: "Идёт отправка",
        success: "Отправлено. Спасибо!",
        failure: "Ошибка! Попробуйте ещё раз."
    };    

    // Получаем необходимые элементы формы и саму форму
    let forms = document.querySelectorAll('.form'),       
        input = document.getElementsByTagName('input'), //Получаем все инпуты в форме         
        btnButton = document.querySelectorAll('.btn-block'),
        statusMesage = document.createElement('div'); //Создаём блок в который будет выводится текст из message
    

    function formHandler(elem){
        elem.addEventListener('submit', (e) =>{
        // input = elem.getElementsByTagName('input'); //Получаем все инпуты в форме 
        e.preventDefault(); //Сбрасываем стандартное поведение браузера
        
        elem.appendChild(statusMesage);
        
        //Встроенный объект formData, в него помещаем нашу форму со всеми введёнными
        //пользователем данными (form)
        let formData = new FormData(elem);

        //Создаём функцию отправки
        function postData(data) {
            return new Promise(function(resolve, reject){
                let xhr = new XMLHttpRequest();  //Создаём объект, который дает возможность из JavaScript
                                                // делать HTTP-запросы к серверу без перезагрузки страницы.
                xhr.open('POST', 'server.php'); //POST - метод отправки, server.php - файл настройки,
                                                    // который лежит в одной папке с index.html
                
                // Content-Type - наш контент, который мы отправляем на сервер
                // application/json; charset=utf-8 - данные, полученные из формы
                xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.addEventListener('readystatechange', function () {
                    if (xhr.readyState < 4) {
                        console.log("Идёт отправка");
                        resolve();
                    } else if (xhr.readyState === 4 && xhr.status == 200) {
                        console.log("Отправлено. Спасибо!");
                        resolve();
                    } else {
                        console.log("Ошибка сервера");
                        reject();
                    }
                });

                xhr.send(data); // ОТправляем запрос на сервер с содержимым JSON 

            }); //End promise
        } //End postData

        //Очищаем наш инпут после отправки
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';                
            }          
        }

        postData(formData)
            .then(() => (statusMesage.innerHTML = message.loading))
            .then(() => (statusMesage.innerHTML = message.success))
            .catch(() => (statusMesage.innerHTML = message.failure))
            .then(clearInput);

        }); // End elem.addEventListener
    } // End formHandler
    [...forms].forEach(function(e){
        formHandler(e);
    });
    // formHandler(forms);
} //End feedback