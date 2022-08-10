//1 дз на гласные буквы
// function vowels(str = 'прИвет'){
//     let alphabet = 'аиоуыэеёюя';
//     let word = str.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         for (let k = 0; k < alphabet.length; k++) {
//             if(word[i] == alphabet[k]) count++;
//         }
//     }
//     return `В слове ${str} найдено ${count} гласных букв`;
// }
// console.log(vowels('Как дела ывлоадлыовадлоывдлаоывдлаы'));

//2 дз ввод команд и добавление их в массив
// let names = [];
// while(true){
//     let word = prompt('Введите команды add, del or stop');
//     if(!word) continue;
//     word = word.toLowerCase();
//     let wordArr = word.split(', ');
//     if(wordArr[0] == 'add') names.push(wordArr[1]);
//     else if(wordArr[0] == 'del'){
//         let index = names.indexOf(wordArr[1]);
//         if(index == -1) continue;
//         names.splice(index, 1);
//     }
//     else if(wordArr[0] == 'stop') break;
//     else continue;
// }
// console.log(names);

//табы
// console.log(this); //отдаст window

const links = document.querySelectorAll('.tabsItem'), //получаем элемент с сайта    
    content = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function(e){
        e.preventDefault();//отменяет действие элемента по умолчанию
        for (let k = 0; k < links.length; k++) {
            links[k].classList.remove('active');
            content[k].classList.remove('active');
            // links[i].classList.add() - добавит класс
            // links[i].classList.remove() - удалит класс
            // links[i].classList.toggle() - если класс есть, то удалит, иначе - добавит
            // links[i].classList.contains() - проверяет на наличие класса у элемента
        }
        // console.log(this);//внутри события, отдаст сам элемент
        this.classList.add('active');
        content[i].classList.add('active');
   });
}

//часы

const secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursBlock = document.querySelector('.hours'),
    minutesBlock = document.querySelector('.minutes');

//рекурсия - это когда функция вызывает сама себя
// setTimeout(function(){
//     console.log('hello after 1s');
// }, 1000);
// setInterval(function(){
//     console.log('hello after 1s');
// }, 1000);
// let i = 0;
// let id;
// function some(){
//     if(i < 15){
//         console.log(i);
//         i++;
//     //    setTimeout(some, 1000);
//     }
//     if(i == 3) clearInterval(id);//останавливаем таймер
// }
// // some();
// id = setInterval(some, 1000);


function clock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    minutesBlock.textContent = m < 10 ? `0${m}` : m;
    hoursBlock.textContent = h < 10 ? `0${h}` : h;
    // secondArrow.style.transform = `rotate(${s * 6}deg)`;
    // secondArrow.style.transition = '1000ms linear';
    secondArrow.animate([
        {transform: `rotate(${s * 6}deg)`},
        {transform: `rotate(${s * 6+6}deg)`},
    ], {
        duration: 1000,
        fill: 'forwards',
        easing: 'linear'
        // easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
        // 
    });
    minuteArrow.style.transform = `rotate(${m * 6}deg)`;
    hourArrow.style.transform = `rotate(${h * 30}deg)`;

    setTimeout(clock, 1000);
}
clock();


// секундомер

const indicator = document.querySelector('.tabsLink__span'),
    stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
    stopwatchMLSeconds = document.querySelector('.stopwatch__mlseconds'),
    stopwatchBtn = document.querySelector('.stopwatch__btn');
let id;

const stopwatchRound = document.querySelector('.stopwatch__round'),
    result = document.querySelector('.result');


stopwatchBtn.addEventListener('click', function(){
    if(this.textContent == 'start'){
        this.textContent = 'stop';
        stopwatch();
        indicator.classList.add('active');
    }
    else if(this.textContent == 'stop'){
        this.textContent = 'clear';
        indicator.classList.remove('active');
        indicator.classList.add('active_clear');
        clearTimeout(id);
    }
    else if(this.textContent == 'clear'){
        this.textContent = 'start';
        indicator.classList.remove('active_clear');
        stopwatchMLSeconds.textContent = 0;
        stopwatchSeconds.textContent = 0;
        stopwatchMinutes.textContent = 0;
        stopwatchHours.textContent = 0;
    }
});
stopwatchRound.addEventListener('click', function(){
    if(stopwatchBtn.textContent == 'stop'){
        let res = `${stopwatchHours.textContent} ${stopwatchMinutes.textContent} ${stopwatchSeconds.textContent} ${stopwatchMLSeconds.textContent}`;
        result.innerHTML += `<p>${res}</p>`;
    }
})

function stopwatch(){
    if(stopwatchMLSeconds.textContent < 10) {
        stopwatchMLSeconds.textContent++;
    }
    if(stopwatchMLSeconds.textContent == 10){
        stopwatchMLSeconds.textContent = 0;
        stopwatchSeconds.textContent++;
    }
    if(stopwatchSeconds.textContent == 60) {
        stopwatchSeconds.textContent = 0;
        stopwatchMinutes.textContent++;
    }
    if(stopwatchMinutes.textContent == 60){
        stopwatchMinutes.textContent = 0;
        stopwatchHours.textContent++;
    }
    id = setTimeout(stopwatch, 100);
}

