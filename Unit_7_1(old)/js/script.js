// Task 1 ============================================
/* Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.*/

function task1() {
    console.log("Меня зовут Дима");
}

function t1_clear() {
    console.clear();
}

document.querySelector('.b-1').onclick = task1;
document.querySelector('.b-1_clear').onclick = t1_clear;

// Task 2 ============================================
/*Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan)
и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.*/

function task2(name) {
    console.log(name);
}

document.querySelector('.b-2').onclick = function () {
    let name = document.querySelector(".task_2").value;
    task2(name);
};



// Task 3 ============================================
/* Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль.
 Запустите выполнение функции. Убедитесь, что она работает. 
 Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром. */

function task3(num) {
    console.log("Task 3  ->>>  " + (num * 10));
}

document.querySelector('.b-3').onclick = function () {
    let num = +document.querySelector(".task_3").value;
    task3(num);
};



// Task 4 ============================================
/*  Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.*/

function task4() {
    let button = document.querySelector(".b-4");
    button.style.background = "red";
}
document.querySelector('.b-4').onclick = task4;

// Task 5 ============================================
/* Создайте функцию, которая возвращает ваше имя. Имя вводится с input */

function task5() {
    let name = document.querySelector('.task_5').value;
    console.log("Ваше имя " + name); // для наглядности
    return name;
}
document.querySelector('.b-5').onclick = task5;

// Task 6 ============================================
/*  Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны. */

let div6 = document.querySelector(".out-6");

function task6(x, y) {

    if (x > y) {
        div6.innerHTML += "Первое число больше - " + x + "<br>";
        return x;
    } else if (y > x) {
        div6.innerHTML += "Второе число больше - " + y + "<br>";
        return y;
    } else {
        div6.innerHTML += "Числа равны " + "<br>";
        return x;
    }
}

function t6_clear() {
    div6.innerHTML = "";
}

document.querySelector('.b-6').onclick = function () {
    let num1 = +document.querySelector(".task_6-1").value;
    let num2 = +document.querySelector(".task_6-2").value;

    task6(num1, num2);
};
document.querySelector('.b-6_clear').onclick = t6_clear;

// Task 7 ============================================
/*  Создайте функцию, которая принимает год рождения и возвращает ваш возраст. Текущий год задавать как 2019. */

let div7 = document.querySelector(".out-7");

function task7(year) {
    return 2019 - year;
}

document.querySelector('.b-7').onclick = function () {
    let year = +document.querySelector(".task_7").value;
    if (year < 2019) {
        div7.innerHTML = "Ваш возраст - " + task7(year);
    } else {
        div7.innerHTML = "Вы из будущего?";
    }

};

// Task 8 ============================================
/*  Создайте функцию, которая возвращает случайное число от 1 до 10.  */

let div8 = document.querySelector('.out-8');

function task8(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

document.querySelector('.b-8').onclick = function () {
    div8.innerHTML = "Результат " + task8(1, 10);
}

// Task 9 ============================================
/*  Создайте функцию, которая возвращает случайное число в указанном диапазоне. 
Диапазон указывает пользователь с помощью двух переменных, которые передаются функции в качестве параметров.  */

let div9 = document.querySelector('.out-9');

function task9(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

document.querySelector('.b-9').onclick = function () {
    let min = +document.querySelector(".input-9_min").value;
    let max = +document.querySelector(".input-9_max").value;
    div9.innerHTML = "Результат " + task8(min, max);
}

// Task 10 ============================================
/*  Создайте функцию, которая возвращает случайный цвет. 
Напомню - цвет это строка rgb(0..255, 0..255, 0..255) - которая содержит 3 числа от нуля до 255 включительно, разделенных запятыми.
 Т.е. вам нужно три раза создать случайное число от 0 до 255.  */



function task10() {
    let rand = Math.random() * (255 - 0) + 0;
    return Math.floor(rand);
}

document.querySelector('.b-10').onclick = function () {
    let div = document.querySelector('.out-10');
    let button = document.querySelector(".b-10");
    let color = 'rgb' + '(' + task10() + ', ' + task10() + ', ' + task10() + ')';

    div.innerHTML = color;
    button.style.background = color;
}

// Task 11 ============================================
/*  Создайте функцию f11, которая возвращает число 5.
 Создайте функцию которая принимает 2 параметра и перемножает их между собой. 
 В качестве первого параметра передайте f11().*/

function f11() {
    return 5;
}

function task11(a, b) {
    return a * b;
}

document.querySelector('.b-11').onclick = function () {
    let div = document.querySelector('.out-11');
    secParam = +document.querySelector(".input-11").value;
    div.innerHTML = "Результат " + task11(f11(), secParam);
}

// Task 12 ============================================
/*  Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное
 в него значение преобразованное в число.*/

function toNum(a) {
    console.log(a);
    return +a;
}

document.querySelector('.b-12').onclick = function () {
    let div = document.querySelector('.out-12');
    let input = document.querySelector('.input-12').value;
    div.innerHTML = "Результат " + toNum(input);
}