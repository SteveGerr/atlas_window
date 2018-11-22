/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ "./modules/modals.js");
/* harmony import */ var _modules_worksImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/worksImages.js */ "./modules/worksImages.js");
/* harmony import */ var _modules_feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/feedback.js */ "./modules/feedback.js");
/* harmony import */ var _modules_glaztabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/glaztabs.js */ "./modules/glaztabs.js");
/* harmony import */ var _modules_decorationTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/decorationTabs.js */ "./modules/decorationTabs.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer.js */ "./modules/timer.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ "./modules/calc.js");
/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validation.js */ "./modules/validation.js");








window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_worksImages_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_feedback_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_glaztabs_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_decorationTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_validation_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return popupCalc; });
function popupCalc() {
  var popupCalcBtn = document.querySelectorAll(".popup_calc_btn"),
      // Кнопка "Расчитать стоимость"
  popupCalc = document.querySelector(".popup_calc"),
      // Подложка Калькулятора
  popupCalcContent = document.querySelector(".popup_calc_content"),
      // Окно выбора формы балкона
  popupCalcProfile = document.querySelector(".popup_calc_profile"),
      popupCalcProfileContent = document.querySelector(".popup_calc_profile_content"),
      popupCalcEnd = document.querySelector(".popup_calc_end"),
      popupCalcButton = document.querySelector(".popup_calc_button"),
      // Кнопка "Далее" в окне выбора формы балкона
  popupCalcProfileBtn = document.querySelector(".popup_calc_profile_button"),
      // Кнопка "Далее" в окне выбора остекления
  balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
      // Иконки в окне выбора формы балкона
  balconBig = document.querySelectorAll(".big_img > img"),
      // Превью балконов под иконками
  coldBox = document.querySelector(".checkbox_cold"),
      warmBox = document.querySelector(".checkbox_warm"),
      form = document.querySelector(".calc_form"),
      formData = new FormData(),
      statusMessage = document.createElement("div"),
      body = document.body,
      statusBlock = document.createElement('div'),
      // Сообщение об ошибке в калькуляторе
  message = {
    loading: "Loading...",
    success: "Мы скоро с вами свяжемся!",
    failure: "Произошла ошибка"
  };
  var viewType = document.querySelector("#view_type").value; // Получаем select c id view_type

  statusBlock.style.paddingTop = '10' + 'px';
  statusBlock.style.color = '#fd0505';
  popupCalcBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupCalc.style.display = "flex";
    });
  }); // Валидация

  var calcWidth = document.querySelector('.calc_width'),
      calcHeight = document.querySelector('.calc_height');
  calcWidth.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/ig, '');
  });
  calcHeight.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/ig, '');
  }); // ЗАкрываем модальные окна через подложку и крестик       

  body.addEventListener('click', function (el) {
    if (el.target && el.target.matches('strong') || el.target.classList.contains('popup_calc_close') || el.target.classList.contains('popup_calc')) {
      // Если el.target - кликнутый элемент И этот элемент  соответсвтует селектору  strong (крестик кнопки)      
      popupCalc.style.display = 'none'; // ИЛИ елемент соотвтствует елементу с классом popup_calc, скрываем блок. 

      clearInputs();
    }

    if (el.target && el.target.matches('strong') || el.target.classList.contains('popup_calc_profile_close') || el.target.classList.contains('popup_calc_profile')) {
      popupCalcProfile.style.display = 'none';
    }

    if (el.target && el.target.matches('strong') || el.target.classList.contains('popup_calc_end_close') || el.target.classList.contains('popup_calc_end')) {
      popupCalcEnd.style.display = 'none';
    }
  }); // НАстраиваем иконки формы остекления 

  balconIcons.forEach(function (icon, index) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      balconIcons.forEach(function (icon) {
        icon.style.width = "20%";
        icon.classList.remove("choosen");
      });
      balconBig.forEach(function (img) {
        img.style.display = "none";
      });
      event.target.style.width = "30%";
      event.target.classList.add("choosen");
      balconBig[index].style.display = "inline-block";
    });
  });
  popupCalcButton.addEventListener("click", function () {
    var width = document.querySelector("#width").value,
        height = document.querySelector("#height").value,
        type = document.querySelector(".choosen");

    if (width == "" || height == "" || type == null || width == "0" || height == "0") {
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
  coldBox.addEventListener("click", function () {
    warmBox.checked = false;
  });
  warmBox.addEventListener("click", function () {
    coldBox.checked = false;
  }); // Вешаем на кнопку "Далее" в окне выбора остекления событие

  popupCalcProfileBtn.addEventListener("click", function () {
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
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
      input.value = "";
    });
    formData = new FormData();
    setTimeout(function () {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.querySelector(".form_input_name").value,
        phone = document.querySelector(".form_input_phone").value;
    formData.append("name", name);
    formData.append("phone", phone);
    form.appendChild(statusMessage);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "server.php");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        xhr.onreadystatechange = function () {
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

    postData(formData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });
} // End popupCalc

/***/ }),

/***/ "./modules/decorationTabs.js":
/*!***********************************!*\
  !*** ./modules/decorationTabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return decorationTabs; });
function decorationTabs() {
  var tabContent = document.querySelectorAll('.tab_decor_content'),
      // Получаем контент, который открывается по нажатию на таб       
  docorationItem = document.querySelectorAll('.decoration_item '),
      //Получаем сами табы
  docorationItemLink = document.querySelectorAll('.decoration_item_link'); // Получаем ссылки табов
  // Перебираем табы и навешиваем на каждый событие

  var _loop = function _loop(i) {
    docorationItem[i].addEventListener('click', function () {
      //Перебираем ссылки табов и если выбранный таб и его ссылка совпадают, 
      for (var j = 0; j < docorationItemLink.length; j++) {
        if (j == i) {
          docorationItemLink[j].classList.add('after_click'); // вешаем класс after_click
        } else {
          docorationItemLink[j].classList.remove('after_click'); // всем остальным ссылкам, удаляем
        }
      } // Перебираем контент табов и если таб i и контент j совпадают


      for (var _j = 0; _j < tabContent.length; _j++) {
        if (i == _j) {
          tabContent[_j].classList.remove('fadeIn'); // удаляем класс fadeIn               


          tabContent[_j].classList.add('animated', 'zoomInDown'); // добавляем класс zoomInDown


          tabContent[_j].style.display = "flex"; // делаем контент видимым
        } else {
          tabContent[_j].style.display = 'none'; // остальные скрываем
        }
      }
    });
  };

  for (var i = 0; i < docorationItem.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feedback; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function feedback() {
  "use strict"; //Создаём объект message, который будет выводить сообщение о статусе отправки,
  //после нажатия на кнопку "Отправить"

  var message = {
    loading: "Идёт отправка",
    success: "Отправлено. Спасибо!",
    failure: "Ошибка! Попробуйте ещё раз."
  }; // Получаем необходимые элементы формы и саму форму

  var forms = document.querySelectorAll('.form'),
      input = document.getElementsByTagName('input'),
      //Получаем все инпуты в форме         
  btnButton = document.querySelectorAll('.btn-block'),
      statusMesage = document.createElement('div'); //Создаём блок в который будет выводится текст из message

  function formHandler(elem) {
    elem.addEventListener('submit', function (e) {
      // input = elem.getElementsByTagName('input'); //Получаем все инпуты в форме 
      e.preventDefault(); //Сбрасываем стандартное поведение браузера

      elem.appendChild(statusMesage); //Встроенный объект formData, в него помещаем нашу форму со всеми введёнными
      //пользователем данными (form)

      var formData = new FormData(elem); //Создаём функцию отправки

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest(); //Создаём объект, который дает возможность из JavaScript
          // делать HTTP-запросы к серверу без перезагрузки страницы.

          xhr.open('POST', 'server.php'); //POST - метод отправки, server.php - файл настройки,
          // который лежит в одной папке с index.html
          // Content-Type - наш контент, который мы отправляем на сервер
          // application/json; charset=utf-8 - данные, полученные из формы

          xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

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
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMesage.innerHTML = message.loading;
      }).then(function () {
        return statusMesage.innerHTML = message.success;
      }).catch(function () {
        return statusMesage.innerHTML = message.failure;
      }).then(clearInput);
    }); // End elem.addEventListener
  } // End formHandler


  _toConsumableArray(forms).forEach(function (e) {
    formHandler(e);
  }); // formHandler(forms);

} //End feedback

/***/ }),

/***/ "./modules/glaztabs.js":
/*!*****************************!*\
  !*** ./modules/glaztabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return glaztabs; });
function glaztabs() {
  var tabContent = document.querySelectorAll('.tab_content'),
      // Получаем контент, который открывается по нажатию на таб       
  glazingBlock = document.querySelectorAll('.glazing_block'),
      //Получаем сами табы
  tabsLink = document.querySelectorAll('.tabs_link'); // Получаем ссылки табов
  // Перебираем табы и навешиваем на каждый событие

  var _loop = function _loop(i) {
    glazingBlock[i].addEventListener('click', function () {
      //Перебираем ссылки табов и если выбранный таб и его ссылка совпадают, 
      for (var k = 0; k < tabsLink.length; k++) {
        if (k == i) {
          tabsLink[k].classList.add('active'); // вешаем класс active
        } else {
          tabsLink[k].classList.remove('active'); // всем остальным ссылкам, удаляем
        }
      } // Перебираем контент табов и если таб i и контент j совпадают


      for (var j = 0; j < tabContent.length; j++) {
        if (i == j) {
          tabContent[j].classList.add('animated', 'fadeIn'); // добавляем классы 'animated', 'fadeIn'

          tabContent[j].style.display = "flex"; // делаем контент видимым
        } else {
          tabContent[j].style.display = 'none'; // остальные скрываем
        }
      }
    });
  };

  for (var i = 0; i < glazingBlock.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./modules/modals.js":
/*!***************************!*\
  !*** ./modules/modals.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modals; });
function modals() {
  "use strict"; // Get all modal

  var modalWin = function modalWin() {
    var popupEngineer = document.querySelector('.popup_engineer'),
        // Модельное окно "Бесплатный замер"
    popUp = document.querySelector('.popup'),
        //Модальное окно "Заказать звонок"
    popupEngineerBtn = document.querySelector('.header_btn'),
        // Кнопка "Вызвать замерщика"
    body = document.body,
        phoneLink = document.querySelectorAll('.phone_link'); // Надписи "Спросите у нашего специалиста" и "Заказать обратный звонок"

    body.style.overflow = 'hidden'; // ЗАкрываем модальные окна через подложку и крестик       

    body.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('popup_close') || e.target.matches('strong') || e.target.classList.contains('popup_engineer') || e.target.classList.contains('popup')) {
        // Если e.target - кликнутый элемент И этот элемент  соответсвтует селектору  strong (крестик кнопки)      
        popupEngineer.style.display = 'none'; // ИЛИ елемент соотвтствует елементу с классом popup_engineer, скрываем блок. 

        popUp.style.display = 'none';
      }
    }); // Функция отображения popUp 

    var timeoutPopup = function timeoutPopup() {
      popUp.classList.add('animated', 'fadeInRight');
      popUp.style.display = 'flex';
    }; // Выводим popUp через 60 сек


    setTimeout(timeoutPopup, 60000); // Отображаем окно "Вызвать замерщика"

    popupEngineerBtn.addEventListener('click', function () {
      body.style.overflow = 'hidden';
      popupEngineer.style.display = 'flex';
    });

    for (var i = 0; i < phoneLink.length; i++) {
      // Перебераем линки        
      phoneLink[i].addEventListener('click', function (e) {
        // Вешаем обработчик на оба линка            
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

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
function timer() {
  //Timer
  var deadLine = '2019-07-04';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    // В endtime потом передадим нашу дату '2019-07-04'
    //  t  = "2018-10-21" минус Текущая дата(Date.parse(new Date()))
    var t = Date.parse(endtime) - Date.parse(new Date()),
        // Date.parse - возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
    seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24)); //Создаём объект

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      'days': days
    };
  };

  var setClock = function setClock(id, endtime) {
    //id - аргумент, вместо которого мы при вызове setClock, передадим id элемента страницы
    var updateClock = function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      days.textContent = t.days;

      if (t.days < 10) {
        days.textContent = "0" + t.days;
      }

      if (t.hours < 10) {
        hours.textContent = "0" + t.hours;
      }

      if (t.minutes < 10) {
        minutes.textContent = "0" + t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = "0" + t.seconds;
      }

      if (t.total <= 0) {
        // Если таймер меньше или равен 0, останавливаем его
        clearInterval(timeInterval); //Выводим вместо результатов расчёта t.hours, t.minutes, t.seconds, текст - "00". 

        if (t.days < 10) {
          days.textContent = "00";
        }

        if (t.hours < 10) {
          hours.textContent = "00";
        }

        if (t.minutes < 10) {
          minutes.textContent = "00";
        }

        if (t.seconds < 10) {
          seconds.textContent = "00";
        }
      }
    };

    var timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);
}

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validation; });
function validation() {
  var body = document.body,
      inputName = document.querySelectorAll('.form_input_name'),
      inputPhone = document.querySelectorAll('.form_input_phone');
  body.addEventListener('input', function (e) {
    e.preventDefault(); // Если e.target - кликнутый элемент И этот элемент  соответсвтует селектору form_input_name

    if (e.target && e.target.classList.contains('form_input_name')) {
      for (var i = 0; i < inputName.length; i++) {
        inputName[i].addEventListener('input', function () {
          this.value = this.value.replace(/[^А-Яа-я]/ig, '');
        });
      }
    } else if (e.target && e.target.classList.contains('form_input_phone')) {
      for (var _i = 0; _i < inputPhone.length; _i++) {
        inputPhone[_i].addEventListener('input', function () {
          this.value = this.value.replace(/[^0-9+]/ig, '');
        });
      }
    }
  }); //End Event Body
}

/***/ }),

/***/ "./modules/worksImages.js":
/*!********************************!*\
  !*** ./modules/worksImages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return worksImages; });
function worksImages() {
  var imgWrapper = document.createElement('div'),
      // Создаём подложку  
  linkImg = document.querySelectorAll('.big_img_link'),
      bigImg = document.createElement('img'),
      //Создаём новое изображение     
  worksWrapper = document.querySelector('.works'); // Получаем обложку картинок        

  imgWrapper.classList.add('popup'); // Присваиваем класс из модалок подложке

  worksWrapper.appendChild(imgWrapper); // Вставляем подложку imgWrapper в обложку картинок

  imgWrapper.style.display = 'none'; // Прячем подложку

  imgWrapper.style.justifyContent = 'center'; // добавляем выравнивание внутри подложки по горизонтали(по центру)

  imgWrapper.style.alignItems = 'center'; // Выравниваем внутри подложки по вертикали(по центру)   

  imgWrapper.appendChild(bigImg); // Вставляем изображение

  var prevImg = document.querySelectorAll('.worksImg');

  var _loop = function _loop(i) {
    prevImg[i].addEventListener('click', function () {
      for (var l = 0; l < linkImg.length; l++) {
        if (i == l) {
          bigImg.setAttribute('src', linkImg[l].href);
        } // End if i == l

      } // End for l

    }); // End Listener prevImg
  };

  for (var i = 0; i < prevImg.length; i++) {
    _loop(i);
  } // End for i


  worksWrapper.addEventListener('click', function (e) {
    e.preventDefault();
    var elem = e.target;

    if (elem && elem.classList.contains('worksImg')) {
      imgWrapper.style.display = 'flex'; // Отображаем подложку   
    } // End if


    if (elem && elem.matches('div.popup')) {
      imgWrapper.style.display = 'none'; // Закрываем подложку по клику на неё
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map