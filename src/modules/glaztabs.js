export default function glaztabs() {

    
    let tabContent = document.querySelectorAll('.tab_content'), // Получаем контент, который открывается по нажатию на таб       
        glazingBlock = document.querySelectorAll('.glazing_block'), //Получаем сами табы
        tabsLink = document.querySelectorAll('.tabs_link'); // Получаем ссылки табов
        
    // Перебираем табы и навешиваем на каждый событие
    for (let i = 0; i < glazingBlock.length; i++) {  
        glazingBlock[i].addEventListener('click', function() {
            //Перебираем ссылки табов и если выбранный таб и его ссылка совпадают, 
            for (let k = 0; k < tabsLink.length; k++){
                if (k == i) {
                    tabsLink[k].classList.add('active'); // вешаем класс active
                } else {
                    tabsLink[k].classList.remove('active'); // всем остальным ссылкам, удаляем
                }    
            }
            // Перебираем контент табов и если таб i и контент j совпадают
            for (let j = 0; j < tabContent.length; j++) {
                if (i == j) {                    
                    tabContent[j].classList.add('animated', 'fadeIn'); // добавляем классы 'animated', 'fadeIn'
                    tabContent[j].style.display = "flex"; // делаем контент видимым
                } else {                    
                    tabContent[j].style.display = 'none'; // остальные скрываем
                }
            }
        });
    }    

}