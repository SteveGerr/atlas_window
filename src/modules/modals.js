
export default function modals() {
    "use strict";
    // Get all modal

    let modalWin = () => {
        let popupEngineer = document.querySelector('.popup_engineer'), // Модельное окно "Бесплатный замер"
            popUp = document.querySelector('.popup'),                  //Модальное окно "Заказать звонок"
            popupEngineerBtn = document.querySelector('.header_btn'),  // Кнопка "Вызвать замерщика"
            body = document.body,
            phoneLink = document.querySelectorAll('.phone_link');      // Надписи "Спросите у нашего специалиста" и "Заказать обратный звонок"
            body.style.overflow = 'hidden';
    // ЗАкрываем модальные окна через подложку и крестик       
    body.addEventListener('click', (e) => { 
        if (e.target && e.target.classList.contains('popup_close') || e.target.matches('strong') || e.target.classList.contains('popup_engineer') || e.target.classList.contains('popup')) {     // Если e.target - кликнутый элемент И этот элемент  соответсвтует селектору  strong (крестик кнопки)      
            popupEngineer.style.display = 'none';         // ИЛИ елемент соотвтствует елементу с классом popup_engineer, скрываем блок. 
            popUp.style.display = 'none';      
       }     
    });      
    
    // Функция отображения popUp 
    let timeoutPopup = () => {
        popUp.classList.add('animated', 'fadeInRight');        
        popUp.style.display = 'flex';        
    };
    // Выводим popUp через 60 сек
    setTimeout(timeoutPopup, 60000);

    // Отображаем окно "Вызвать замерщика"
    popupEngineerBtn.addEventListener('click', () => {
        body.style.overflow = 'hidden'; 
        popupEngineer.style.display = 'flex';
              
    });   

    for (let i = 0; i < phoneLink.length; i++) { // Перебераем линки        
        phoneLink[i].addEventListener('click', function(e) { // Вешаем обработчик на оба линка            
            e.preventDefault();
            console.log("CLick");
            popUp.classList.remove('fadeInRight');
            popUp.classList.add('animated', 'fadeIn');
            popUp.style.display = 'flex'; // Отображаем модальное окно                
        });        
    }

    }; //End modalWin
    modalWin();
} // End modals
