// task 1 --------------------
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, 
// функция читает содержимое input и добавляет содержимое в массив, 
// после чего выводит содержимое массива в div.out-1.

let div1 = document.querySelector(".out-1");
let arr1 = [];

document.querySelector(".u-2__push").onclick = function () {
    let input1 = document.querySelector(".u-1").value;
    if (input1.trim() != '') {
        arr1.push(input1);
        div1.innerHTML = arr1;

    } else {
        alert("Нечего добавлять, так как вы ничего не ввели!");
    }
}


// task 2 --------------------
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, 
// к массиву arr1 применяется метод pop, 
// после чего массив выводится в div.out-1

document.querySelector(".u-2__pop").onclick = function () {
    if (arr1 == '') {
        alert("Больше нечего удалять!");
    } else {
        arr1.pop();
        div1.innerHTML = arr1;
    }

}


// task 3 --------------------
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет
//  к массиву arr1 метод shift ( читать за метод shift).
//  После применения shift, массив arr1 выподится в div.out-1.

document.querySelector(".u-2__shift").onclick = function () {
    if (arr1 == '') {
        alert("Больше нечего удалять!");
    } else {
        arr1.shift();
        div1.innerHTML = arr1;
    }
}


// task 4 --------------------
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву 
// arr1 метод unshift ( читать за метод unshift). 
// После применения unshift, массив arr1 выподится в div.out-1.

document.querySelector(".u-2__unshift").onclick = function () {
    let input1 = document.querySelector(".u-1").value;
    if (input1.trim() != '') {
        arr1.unshift(input1);

    } else {
        alert("Нечего добавлять, так как вы ничего не ввели!");
    }

    div1.innerHTML = arr1;
}


// task 5 --------------------
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, 
// во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. 
// Результат применения выводите в div.out-5.

document.querySelector(".task-5").onclick = function () {

    let input1 = document.querySelector(".task5-1").value;
    let input2 = document.querySelector(".task5-2").value;
    let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
    let div = document.querySelector(".div-5");
    let sum = +input1 + +input2;

    if (+input1 > arr5.length - 1) {
        alert("Индекс больше чем массив, поэтому нельзя ничего вывести, может вы считали не с нуля?");
        div.innerHTML = "";
    } else if (sum > arr5.length) {
        alert("Не существует столько элементов, поскольку их - " + arr5.length + " , но я выведу все, что есть в массиве arr5, после " + input1 + " индекса");
        div.innerHTML = arr5.splice(+input1, +input2);
    } else if (isNaN(+input1) || isNaN(+input2) || input1.trim() == '' || input2.trim() == '') {
        alert("Вы ввели не число");
    } else {
        div.innerHTML = arr5.splice(+input1, +input2);
    }

}


// task 6 --------------------
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:

//              читает содержимое input в переменную
//              вычисляет длину массива
//              присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

let arr6_9 = [1, "hi", 3, 'banana', 87, 66, 43, 12, 90, 'hello'];

document.querySelector(".task-6").onclick = function funcPush() {
    let input = document.querySelector(".task6").value;
    let div = document.querySelector(".div-6");

    if (input.trim() == "") {
        alert("Вы не ввели элемент");
    } else {
        arr6_9[arr6_9.length] = input;
        div.innerHTML = arr6_9;
    }
}


// task 7 --------------------
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
//          удаляет последний элемент массива
// Выводит массив на страницу

document.querySelector(".task-7").onclick = function funcPop() {
    let div = document.querySelector(".div-7");

    if (arr6_9.length == 0) {
        alert("Больше нечего удалять");
    } else {
        arr6_9.length--;
        div.innerHTML = arr6_9;
    }

}


// task 8 --------------------
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:

//           Создает новый массив где нулевым элементом выступает первый элемент исходного массива

// Выводит массив на страницу

document.querySelector(".task-8").onclick = function funcShift() {
    let div = document.querySelector(".div-8");
    let a = [];
    for (let i = 1; i < arr6_9.length; i++) {
        a.push(arr6_9[i]);
    }
    arr6_9 = a;
    if (arr6_9.length == 0) {
        alert("Больше нет элементов!");
    } else {
        div.innerHTML = arr6_9;
    }

}


// task 9 --------------------
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:

//      читает содержимое input в переменную
//      создает новый массив где нулевым элементов задает считанную из input строку
//      дописывает остальные значения старого массива в новый

// Выводит массив на страницу

document.querySelector(".task-9").onclick = function funcUnShift() {
    let input = document.querySelector(".task9").value;
    let div = document.querySelector(".div-9");
    let a = [input];
    for (let i = 1; i <= arr6_9.length; i++) {
        a[i] = arr6_9[i - 1];
    }
    arr6_9 = a;
    div.innerHTML = a;
}


// task 10 --------------------
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). 
// После применения reverse, массив arr10 выподится в div.out-10.

// let arr10 = [2,4, 6, 8, 10, 'hello'];

document.querySelector(".task-10").onclick = function () {
    let div = document.querySelector(".div-10");
    let arr10 = [2, 4, 6, 8, 10, 'hello'];

    div.innerHTML = arr10.reverse();
}


// task 11 --------------------
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. 
// По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. 
// Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). 
// Результат применения indexOf выводите на страницу в div.out-11. 
// Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

// let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector(".u-11__button").onclick = function () {
    let arr11 = [0, 2, 3, 7, 8, 5, 11];
    let u11 = document.querySelector(".u-11__input").value;
    let div = document.querySelector(".out-11");

    if (arr11.indexOf(+u11) == -1 || u11.trim() == "") {
        div.innerHTML = "Такого элемента в массиве нет";
    } else {
        div.innerHTML = arr11.indexOf(+u11) + " - позиция этого элемента";
    }
}


// task 12 --------------------
//  Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:

//  читает содержимое input в переменную
//  Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
//  Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
//  Если совпадения нет выводить -1.


document.querySelector(".u-12__button").onclick = function () {
    let u12 = document.querySelector(".u-12__input");
    let arr12 = [0, 2, 3, 7, 8, 5, 11, "string"];
    let div = document.querySelector(".out-12");

    if (u12.value.trim() == "") {
        return div.innerHTML = "Вы ничего не ввели";
    }

    for (let i = 0; i < arr12.length; i++) {
        if (u12.value == arr12[i]) {
            return div.innerHTML = "Есть совпадение на индексе " + i;
        }
    }
    return div.innerHTML = "Совпадений нет";
}


// task 13 --------------------
//  Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:

// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.

document.querySelector(".u-13__button").onclick = function () {
    let arr13 = [0, "cat", 123, 7, 8, false, 11, "string"];
    let div = document.querySelector(".out-13");
    let ReverseArr = [];


    for (let i = arr13.length - 1; i >= 0; i--) {
        ReverseArr.push(arr13[i]);
    }
    div.innerHTML = ReverseArr;
}


// task 14 --------------------
// Создайте инпут, куда пользователь может ввести число элементов в массиве. 
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины,
// причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.

function RandomNum(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
}

document.querySelector(".u-14__button").onclick = function () {
    let u14 = document.querySelector(".u-14__input");
    let div = document.querySelector(".out-14");
    let arr = [];

    if (u14.value.trim() == "" || isNaN(u14.value)) {
        return div.innerHTML = "Вы не ввели число";

    }
    for (let i = 0; i < +u14.value; i++) {
        arr.push(RandomNum(0, 100));
    }
    div.innerHTML = arr;
}


// task 15 --------------------
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, 
// в который входят только четные элементы массива arr15 (элементы с четным индексом).
// Выведите на экран.

document.querySelector(".u-15__button").onclick = function () {
    let arr15 = [0, "cat", 11, 12, 13, 55, 291, 123, 7, 8, 11, "string"];
    let evenNums = [];
    let div = document.querySelector(".out-15");

    for (let i = 0; i < arr15.length; i++) {
        if (arr15[i] % 2 == 0) {
            evenNums.push(arr15[i]);
        }
    }
    div.innerHTML = evenNums;
}


// task 16 --------------------
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. 
// По нажатию на кнопку примените к массивам метод concat. 
// Результат применения concat выводите на страницу в div.out-16.

document.querySelector(".u-16__button").onclick = function () {
    let arr16_1 = [3, 5, 7];
    let arr16_2 = [2, 4, 6];
    let div = document.querySelector(".out-16");

    div.innerHTML = arr16_1.concat(arr16_2);
}


//  task 17 --------------------
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:

// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.
document.querySelector(".u-17__button").onclick = function () {
    let div = document.querySelector(".out-17");
    let arr_1 = [3, 5, 7, 3, "hi", 99];
    let arr_2 = [2, 4, 6, "JS"];

    for (let i = 0; i < arr_2.length; i++) {
        arr_1.push(arr_2[i]);
    }
    div.innerHTML = arr_1;

}


// task 18 --------------------
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . 
// По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input.
// Результат применения includes выводите на страницу в div.out-18.

document.querySelector(".u-18__button").onclick = function () {
    let arr18 = [3, 5, 7, 11, 12, 13, 14, "hello", "Name"];
    let input = document.querySelector(".u-18__input").value;
    let div = document.querySelector(".out-18");
    div.innerHTML = arr18.includes(+input || input);
}


// task 19 --------------------
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:

// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.
// В качестве примера был взят массив ниже

document.querySelector(".u-19__button").onclick = function funcIncludes() {
    let arr19 = ["HTML", "CSS", 7, 134, 2, "Java", 14, "hello", "Name"];
    let input = document.querySelector(".u-19__input").value;
    let div = document.querySelector(".out-19");

    for (let i = 0; i < arr19.length; i++) {
        if (arr19[i] == +input || arr19[i] == input) {
            return div.innerHTML = true;
        }
    }
    return div.innerHTML = false;

}


// task 20 --------------------
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join() 
// Результа выведите на страницу.

document.querySelector(".u-20__button").onclick = function () {
    let arr20 = ["HTML", "CSS", 7, 134, 2, "Java", 14, "hello", "Name"];
    let input = document.querySelector(".u-20__input").value;
    let div = document.querySelector(".out-20");

    div.innerHTML = arr20.join(input);
}