
export default function decorationTabs() {

    
    let tabContent = document.querySelectorAll('.tab_decor_content'), // Получаем контент, который открывается по нажатию на таб       
        docorationItem = document.querySelectorAll('.decoration_item '), //Получаем сами табы
        docorationItemLink = document.querySelectorAll('.decoration_item_link'); // Получаем ссылки табов
        
    // Перебираем табы и навешиваем на каждый событие
    for (let i = 0; i < docorationItem.length; i++) {  
        docorationItem[i].addEventListener('click', function() {
            //Перебираем ссылки табов и если выбранный таб и его ссылка совпадают, 
            for (let j = 0; j < docorationItemLink.length; j++){
                if (j == i) {
                    docorationItemLink[j].classList.add('after_click'); // вешаем класс after_click
                } else {
                    docorationItemLink[j].classList.remove('after_click'); // всем остальным ссылкам, удаляем
                }    
            }
            // Перебираем контент табов и если таб i и контент j совпадают
            for (let j = 0; j < tabContent.length; j++) {
                if (i == j) {
                    tabContent[j].classList.remove('fadeIn');  // удаляем класс fadeIn               
                    tabContent[j].classList.add('animated','zoomInDown'); // добавляем класс zoomInDown
                    tabContent[j].style.display = "flex"; // делаем контент видимым
                } else {                   
                    tabContent[j].style.display = 'none'; // остальные скрываем
                }
            }
        });
    }    

}