// task 1 --------------------
// Создайте массив a. Выведите его на страницу.
// Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!

// const a = [
//   [1,2,3],
//   ['a','b','c'],
//   [ 4,5,6],
//   ['d','e','f'],
//   [ 7,8,9],
//          ];

const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

document.querySelector(".u-1__button").onclick = function () {
    let div = document.querySelector(".out-1");


    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            div.innerHTML += a[i][k] + ' ';
        }
        div.innerHTML += '<br>';
    }
}


// task 2 --------------------
// Выведите на страницу символ 3 из массива a.

document.querySelector(".u-2__button").onclick = function () {
    let div = document.querySelector(".out-2");

    div.innerHTML += a[0][2] + "<br> (Этот элемент a[0][2]) ";
}


// task 3 --------------------
// Выведите на страницу символ e из массива a.

document.querySelector(".u-3__button").onclick = function () {
    let div = document.querySelector(".out-3");

    div.innerHTML += a[3][1] + "<br> (Этот элемент a[3][1]) ";
}


// task 4 --------------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

document.querySelector(".u-4__button").onclick = function () {
    let div = document.querySelector(".out-4");

    div.innerHTML += a[2] + "<br> (Вызов a[2] - считал с нуля) ";
}


// task 5 --------------------
// Выведите на страницу только первые элементы вложенных массивов массива a.

document.querySelector(".u-5__button").onclick = function () {
    let div = document.querySelector(".out-5");

    for (let i = 0; i < a.length; i++) {
        div.innerHTML += a[i][0] + ' ';
    }
}


// task 6 --------------------
// Выведите на страницу только четные вложенные массивы массива a.

document.querySelector(".u-6__button").onclick = function () {
    let div = document.querySelector(".out-6");

    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            div.innerHTML += a[i] + '<br>';
        }
    }
}

// task 7 --------------------
// Выведите на страницу только числа из массива a.
document.querySelector(".u-7__button").onclick = function () {
    let div = document.querySelector(".out-7");

    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {

            if (!isNaN(a[i][k])) {
                div.innerHTML += a[i][k] + ' ';
                console.log(a[i][k])
            }
        }
        div.innerHTML += '<br>';
    }
}


// task 8 --------------------
// Выведите на страницу длины вложенных массивов в массив a.
document.querySelector(".u-8__button").onclick = function () {
    let div = document.querySelector(".out-8");

    for (let i = 0; i < a.length; i++) {

        div.innerHTML += a[i].length + " - длинна вложенного массива <br>";
    }
}


// task 9 --------------------
// Выведите на страницу длины вложенных массивов в массив a.
document.querySelector(".u-9__button").onclick = function () {
    let div = document.querySelector(".out-9");

    for (let i = a.length - 1; i >= 0; i--) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            div.innerHTML += a[i][k] + ' ';
        }
        div.innerHTML += '<br>';
    }
}


// task 10 --------------------
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
document.querySelector(".u-10__button").onclick = function () {
    let div = document.querySelector(".out-10");

    for (let i = 0; i < a.length; i++) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            div.innerHTML += a[i][k] + ' ';
        }
        div.innerHTML += '<br>';
    }
}


// task 11 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

document.querySelector(".u-11__button").onclick = function () {
    let div = document.querySelector(".out-11");
    let arr = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            div.innerHTML += arr[i][k] + " ";
        }
        div.innerHTML += "<br>";
    }

}


// task 12 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. 
// Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закрашенные цветом.

document.querySelector(".u-12__button").onclick = function () {
    let main = document.querySelector('.main-block');
    let arr = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    let block;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            block = document.createElement("div");
            if (arr[i][k] == 0) {
                block.className = "block black";
            } else {
                block.className = "block white";
            }

            main.appendChild(block);
        }
    }
}

// task 13 --------------------
// Создайте массив, который подходит под следующие условия:

//             b[0][1] == 4;
//             b[3][2] == 5

let b = [
    [0, 4, 0],
    [0, 0, 0],
    [0],
    [0, 0, 5]
];



// task 14 --------------------
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5

let c = [
    [0, 4],
    [0],
    [5]
];



// task 15 --------------------
// Создайте массив, который подходит под следующие условия:

// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

let d = [
    [0, 4],
    [0],
    [0, 0, 0, 5],
    [0],
    [0],
    [0],
    [4, 5]
];

// task 16 --------------------
// Создайте массив, который подходит под следующие условия:

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

let e = [
    [0, 4],
    [0, 0, 0],
    [0, 0, 0, 5],
    [0],
    [0],
    [0],
    [
        [0, 6],
        ["abc"],
    ],
];


// task 17 --------------------
// Создайте массив, который подходит под следующие условия:

// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

let f = [ // - первый уровень
    [ // - второй уровень
        [], // - третий уровень
        [0, 0, 0, 4]
    ],
    [],
    [
        [],
        [0, 5]
    ],
    [],
    [],
    [],
    [
        [0, 6],
    ],
];


// task 18 --------------------
// Создайте массив, который подходит под следующие условия:

// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

let g = [
    [
        [],
        [0, 0, 0, 4],
    ],
    [],
    [
        [],
        [0, 0, 0, 5],
    ],
    [3333],
    [],
    [3333],
    [
        [0, 6],
    ],
];


// task 19 --------------------
// Выведите на страницу сумму элементов массива a (только чисел).

document.querySelector(".u-19__button").onclick = function () {
    let div = document.querySelector(".out-19");
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (!isNaN(a[i][k])) {
                sum += a[i][k];
            }
        }
    }
    div.innerHTML = "Сумма равна  " + sum;
}

// task 20 --------------------
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации,
//  т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д..

let win = [
    [ // вертикаль
        [0, 0],
        [0, 1],
        [0, 2]
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2]
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2]
    ],
    [ // горизонталь
        [0, 0],
        [1, 0],
        [2, 0]
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1]
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2]
    ],
    [ // диагонали
        [0, 0],
        [1, 1],
        [2, 2]
    ],
    [
        [2, 0],
        [1, 1],
        [0, 2]
    ],
]