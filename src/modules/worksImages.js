export default function worksImages() {

    let imgWrapper = document.createElement('div'), // Создаём подложку  
        linkImg = document.querySelectorAll('.big_img_link'),
        bigImg = document.createElement('img'), //Создаём новое изображение     
        worksWrapper = document.querySelector('.works'); // Получаем обложку картинок        
        
    imgWrapper.classList.add('popup'); // Присваиваем класс из модалок подложке
    worksWrapper.appendChild(imgWrapper);  // Вставляем подложку imgWrapper в обложку картинок
    imgWrapper.style.display = 'none';     // Прячем подложку
    imgWrapper.style.justifyContent = 'center'; // добавляем выравнивание внутри подложки по горизонтали(по центру)
    imgWrapper.style.alignItems = 'center'; // Выравниваем внутри подложки по вертикали(по центру)   
    imgWrapper.appendChild(bigImg); // Вставляем изображение
    
    let prevImg = document.querySelectorAll('.worksImg');
    for (let i = 0; i < prevImg.length; i++){
        prevImg[i].addEventListener('click', function(){
            for (let l = 0; l < linkImg.length; l++) {
                if ( i == l) {
                    
                    bigImg.setAttribute('src', linkImg[l].href);
                } // End if i == l
            } // End for l
        }); // End Listener prevImg
    } // End for i

    worksWrapper.addEventListener('click', function(e){
        e.preventDefault();
        let elem = e.target;
        if (elem && elem.classList.contains('worksImg')) {
            imgWrapper.style.display = 'flex';     // Отображаем подложку   
        } // End if
        if (elem && elem.matches('div.popup')){
            imgWrapper.style.display = 'none';  // Закрываем подложку по клику на неё
        }
    });   
        
        


    
   
} 


    


