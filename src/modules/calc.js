export default function popupCalc() {

    let popupCalcBtn = document.querySelectorAll(".popup_calc_btn"), // Кнопка "Расчитать стоимость"
        popupCalc = document.querySelector(".popup_calc"), // Подложка Калькулятора
        popupCalcContent = document.querySelector(".popup_calc_content"), // Окно выбора формы балкона
        popupCalcProfile = document.querySelector(".popup_calc_profile"),
        popupCalcProfileContent = document.querySelector(".popup_calc_profile_content"),
        popupCalcEnd = document.querySelector(".popup_calc_end"),
        popupCalcButton = document.querySelector(".popup_calc_button"), // Кнопка "Далее" в окне выбора формы балкона
        popupCalcProfileBtn = document.querySelector(".popup_calc_profile_button"), // Кнопка "Далее" в окне выбора остекления
        balconIcons = document.querySelectorAll(".balcon_icons > a > img"), // Иконки в окне выбора формы балкона
        balconBig = document.querySelectorAll(".big_img > img"), // Превью балконов под иконками
        coldBox = document.querySelector(".checkbox_cold"),
        warmBox = document.querySelector(".checkbox_warm"),
        form = document.querySelector(".calc_form"),
        formData = new FormData(),
        statusMessage = document.createElement("div"),
        body = document.body,
        statusBlock = document.createElement('div'), // Сообщение об ошибке в калькуляторе
        message = {
            loading: "Loading...",
            success: "Мы скоро с вами свяжемся!",
            failure: "Произошла ошибка"
        };
        let viewType = document.querySelector("#view_type").value; // Получаем select c id view_type
        statusBlock.style.paddingTop = '10' + 'px';
        statusBlock.style.color = '#fd0505';

         
  popupCalcBtn.forEach(btn => {
      btn.addEventListener("click", () => {
          popupCalc.style.display = "flex";
      });
  });

  // Валидация

  let calcWidth = document.querySelector('.calc_width'),
      calcHeight = document.querySelector('.calc_height');

  calcWidth.addEventListener('input', function(){
      this.value = this.value.replace(/[^0-9]/ig, '');
  });
  calcHeight.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/ig, '');
});    

  // ЗАкрываем модальные окна через подложку и крестик       
  body.addEventListener('click', (el) => {
      if (el.target && el.target.matches('strong') ||
          el.target.classList.contains('popup_calc_close') ||
          el.target.classList.contains('popup_calc')
      ) { // Если el.target - кликнутый элемент И этот элемент  соответсвтует селектору  strong (крестик кнопки)      
          popupCalc.style.display = 'none'; // ИЛИ елемент соотвтствует елементу с классом popup_calc, скрываем блок. 
          clearInputs();
          
      }
      if (el.target && el.target.matches('strong') ||
          el.target.classList.contains('popup_calc_profile_close') ||
          el.target.classList.contains('popup_calc_profile')
      ) {
          popupCalcProfile.style.display = 'none';
      }
      if (el.target && el.target.matches('strong') ||
          el.target.classList.contains('popup_calc_end_close') ||
          el.target.classList.contains('popup_calc_end')
          ){popupCalcEnd.style.display = 'none';}
  });

  // НАстраиваем иконки формы остекления 
  balconIcons.forEach((icon, index) => {
      icon.addEventListener("click", event => {
          event.preventDefault();
          balconIcons.forEach(icon => {
              icon.style.width = "20%";
              icon.classList.remove("choosen");
          });
          balconBig.forEach(img => {
              img.style.display = "none";
          });
          event.target.style.width = "30%";
          event.target.classList.add("choosen");
          balconBig[index].style.display = "inline-block";
          
      });
  });

  popupCalcButton.addEventListener("click", () => {
      let width = document.querySelector("#width").value,
          height = document.querySelector("#height").value,
          type = document.querySelector(".choosen");

      if (
          width == "" ||
          height == "" ||
          type == null ||
          width == "0" ||
          height == "0"
      ) {
        statusBlock.innerHTML = "Введите высоту и ширину и форму балкона";
        popupCalcContent.appendChild(statusBlock);
      } else {
          formData.append("form", type.alt);
          formData.append("width", width);
          formData.append("height", height);
          popupCalc.style.display = "none";
          popupCalcProfile.style.display = "flex";
          console.log('Данные отправлены');
      }
  });

  coldBox.addEventListener("click", () => {
    warmBox.checked = false;
  });

  warmBox.addEventListener("click", () => {
    coldBox.checked = false;
  });

  // Вешаем на кнопку "Далее" в окне выбора остекления событие
  popupCalcProfileBtn.addEventListener("click", () => {
      if (warmBox.checked === false && coldBox.checked === false) {
          statusBlock.innerHTML = 'Выберите тип профиля.';
          popupCalcProfileContent.appendChild(statusBlock); // Выводим сообщение об ошибке

      } else {
          if (coldBox.checked === true) {
              formData.append("Тип: ", "Холодное");
              console.log('Выбран холодный тип');
          } else {
              formData.append("Тип: ", "Горячее");
              console.log('Выбран тёплый тип');
          }
          formData.append("Тип остекления: ", viewType);
          popupCalcProfile.style.display = "none";
          popupCalcEnd.style.display = "flex";
      }
  });

  function clearInputs() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
      input.value = "";
    });
    formData = new FormData();
    setTimeout(function() {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  form.addEventListener("submit", event => {
      event.preventDefault();
      let name = document.querySelector(".form_input_name").value,
          phone = document.querySelector(".form_input_phone").value;

      formData.append("name", name);
      formData.append("phone", phone);

      form.appendChild(statusMessage);

      function postData(data) {
          return new Promise((resolve, reject) => {
              let xhr = new XMLHttpRequest();

              xhr.open("POST", "server.php");
              xhr.setRequestHeader(
                  "Content-Type",
                  "application/json; charset=utf-8"
              );

              xhr.onreadystatechange = () => {
                  if (xhr.readyState < 4) {
                      resolve();
                  } else if (xhr.readyState === 4) {
                      if (xhr.status == 200 && xhr.status < 300) {
                          resolve();
                      }
                  } else {
                      reject();
                  }
              };
              xhr.send(data);
          });
      }
      postData(formData)
          .then(() => (statusMessage.innerHTML = message.loading))
          .then(() => (statusMessage.innerHTML = message.success))
          .catch(() => (statusMessage.innerHTML = message.failure))
          .then(clearInputs);
  });

}  // End popupCalc