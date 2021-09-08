//СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

//1) touchstart - событие происходит при соприкосновении пальца с экраном

//2) touchmove - палец при касании начинает двигаться

//3) touchend - как только палец оторвался от элемента событие выполнится

//4) touchenter - срабатывает когда ведем пальцем по экрану и при этом наскакиваем на элемент, на который навешено событие

//5) touchleave - палец продолжил скользить и ушел за пределы этого элемента

//6) touchcancel - возникает, когда точка соприкосновения больше не регистрируется на поверхности(напр, палец вышел за пределы браузера)

// touches - свойство выдает список всех пальцев, которые взаимодействуют с экраном в данный момент

// targetTouches - все пальцы, которые взаимодействуют с конкретным элементом

// changedTouches - список пальцев, которые учавствуют в текущем событии(напр, если это событие touchend, то список будет содержать палец, который был убран, даже если остальные пальцы до сих пор на экране)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
        //console.log(event.touches);
        console.log(event.targetTouches);
    });

    /*
    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();

        console.log('End');
    });
    */
});