// Task 1
// Напишите функцию t1, которая при нажатии кнопки выводит в out - 1 переменную a1.

let a1 = 8;

function t1() {
    let div = document.querySelector(".out-1");
    div.innerHTML = a1;
}

document.querySelector('.b-1').onclick = t1;


// Task 2.

// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь функция t2 возвращает переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками(вызов функции) можно встраивать в выражения.Обратите внимание, как изменяется вызов функции теперь.

let a2 = 8;

function t2() {
    return a2;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
}

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра и выводит их произведение.Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.

function t3(a, b) {
    return a * b;
}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет ваш возраст. 

function t4(year) {
    return "Ваш возраст " + (2019 - year);
}

document.querySelector('.b-4').onclick = function () {
    let div = document.querySelector('.out-4');
    let input = +document.querySelector('.input-4').value;
    div.innerHTML = t4(input);
}


// Task 5
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.


function t5(yourName) {
    return "Hello " + yourName;
}

document.querySelector('.b-5').onclick = function () {
    let input = document.querySelector('.input-5').value;
    document.querySelector('.out-5').textContent = t5(input);
}



// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t6(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

document.querySelector('.b-6').onclick = function () {
    let min = +document.querySelector(".input-6_min").value;
    let max = +document.querySelector(".input-6_max").value;
    document.querySelector('.out-6').textContent = "Результат " + t6(min, max);
}


// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7() {
    let rand = Math.random() * (255 - 0) + 0;
    return Math.floor(rand);
}

document.querySelector('.b-7').onclick = function () {
    let button = document.querySelector(".b-7");
    let color = 'rgb' + '(' + t7() + ', ' + t7() + ', ' + t7() + ')';
    button.style.background = color;
}


// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim();
}

document.querySelector('.b-8').onclick = function () {
    let input = document.querySelector('.input-8').value;
    document.querySelector('.out-8').textContent = t8(input);
}


// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

document.querySelector('.b-9').onclick = function () {
    let input = +document.querySelector('.input-9').value;
    document.querySelector('.out-9').textContent = t9(input);
}


// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

let div10 = document.querySelector(".out-10");

function t10(a, b) {
    if (a > b) {
        div10.textContent += a;
        return a;
    } else if (a < b) {
        div10.textContent += b;
        return b;
    } else {
        div10.textContent += "Числа равны " + "<br>";
        return a;
    }
}

document.querySelector('.b-10').onclick = function () {
    let num1 = +document.querySelector(".task_6-1").value;
    let num2 = +document.querySelector(".task_6-2").value;
    div10.textContent = t10(num1, num2);
}