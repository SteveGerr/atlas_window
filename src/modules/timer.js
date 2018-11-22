export default function timer() {

    //Timer
    let deadLine = '2019-07-04';

    let getTimeRemaining = (endtime) => { // В endtime потом передадим нашу дату '2019-07-04'
        //  t  = "2018-10-21" минус Текущая дата(Date.parse(new Date()))
        let t = Date.parse(endtime) - Date.parse(new Date()), // Date.parse - возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
            seconds = Math.floor((t/1000) % 60),              
            minutes = Math.floor((t/1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

            //Создаём объект
        return {        
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };
    };

    let setClock = (id, endtime) => {    //id - аргумент, вместо которого мы при вызове setClock, передадим id элемента страницы

        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            days.textContent = t.days;
            if (t.days < 10) { days.textContent = "0" + t.days; }
            if (t.hours < 10) { hours.textContent = "0" + t.hours; }
            if (t.minutes < 10) { minutes.textContent = "0" + t.minutes; }
            if (t.seconds < 10) { seconds.textContent = "0" + t.seconds; }
            

            if (t.total <= 0) { // Если таймер меньше или равен 0, останавливаем его
                clearInterval(timeInterval);

                //Выводим вместо результатов расчёта t.hours, t.minutes, t.seconds, текст - "00". 
                if (t.days < 10) { days.textContent = "00"; }
                if (t.hours < 10) { hours.textContent = "00"; }
                if (t.minutes < 10) { minutes.textContent = "00"; }
                if (t.seconds < 10) { seconds.textContent = "00"; }

            }

        };
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine);
}