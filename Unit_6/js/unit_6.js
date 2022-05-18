// Task 1 ============================================

function t1() {
    let out = document.querySelector(".out-1");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            out.innerHTML += "*";
        }
        out.innerHTML += " ";
    }

}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================

function t2() {
    let out = document.querySelector(".out-2");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 5; k++) {
            out.innerHTML += "*";
        }
        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================

function t3() {
    let out = document.querySelector(".out-3");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                out.innerHTML += "1";
            } else {
                out.innerHTML += "0";
            }

        }
        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================


function t4() {
    let out = document.querySelector(".out-4");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 6; k++) {
            if (k % 3 == 2) {
                out.innerHTML += "x";
            } else if (k % 2 == 0) {
                out.innerHTML += "1";
            } else {
                out.innerHTML += "0";
            }

        }

        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================

function t5() {
    let out = document.querySelector(".out-5");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k <= j; k++) {
            out.innerHTML += "*";
        }
        out.innerHTML += "<br>";
    }

}

document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
function t6() {
    let out = document.querySelector(".out-6");
    for (let j = 0; j < 5; j++) {
        for (let k = 5; k > j; k--) {
            out.innerHTML += "*";
        }
        out.innerHTML += "<br>";
    }

}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================

function t7() {
    let out = document.querySelector(".out-7");
    let b = 2;
    let e = 7;


    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < e; k++)
            if (k < b) {
                out.innerHTML += "&nbsp";
            } else {
                out.innerHTML += "*";
            }
        b--;
        e--;
        out.innerHTML += "<br>";
    }

}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================

function t8() {
    let out = document.querySelector(".out-8");
    let q1 = 1;
    let q2 = 2;

    for (let j = 0; j < 5; j++) {
        if (j < 3) {
            for (let k = 0; k < 3; k++) {
                if (k < q1) {
                    out.innerHTML += "*";
                } else {
                    out.innerHTML += "&nbsp";
                }
            }
            out.innerHTML += "<br>";
            q1++;

        } else {
            for (let k = 0; k < 3; k++) {
                if (k < q2) {
                    out.innerHTML += "*";
                } else {
                    out.innerHTML += "&nbsp";
                }
            }
            out.innerHTML += "<br>";
            q2--;

        }

    }

}


document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================

function t9() {
    let out = document.querySelector(".out-9");

    for (let j = 0; j < 5; j++) {

        for (let k = 0; k < 6; k++) {
            if (j == 0 || j == 4) {
                out.innerHTML += "*";
            } else if (k == 0 || k == 5) {
                out.innerHTML += "*";
            } else {
                out.innerHTML += "&nbsp"; // пришлось добавить в css word-spacing для визуализации
            }
        }
        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================

function t10() {
    let symbol = document.querySelector(".input10").value;
    let out = document.querySelector(".out-10");

    for (let j = 0; j < 5; j++) {

        for (let k = 0; k < 6; k++) {
            if (j == 0 || j == 4) {
                out.innerHTML += symbol;
            } else if (k == 0 || k == 5) {
                out.innerHTML += symbol;
            } else {
                out.innerHTML += "&nbsp"; // пришлось добавить в css word-spacing для визуализации
            }
        }
        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================

function t11() {
    let out = document.querySelector(".out-11");
    for (let j = 6; j <= 7; j++) {
        for (let k = 1; k < 10; k++) {
            out.innerHTML += `${j} * ${k} = ${j*k}<br>`
        }
        if (j != 7) {
            out.innerHTML += "<hr>";
        }

    }


}

document.querySelector('.b-11').onclick = t11;



// Task 12 ============================================

function t12() {
    let out = document.querySelector(".out-12");

    for (let j = 1; j < 6; j++) {
        for (let k = 1; k < j + 1; k++) {

            out.innerHTML += k + "&nbsp";
        }
        out.innerHTML += "<br>";
    }
}

document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================!



function t13() {
    let out = document.querySelector(".out-13");

    for (let j = 0; j < 6; j++) {
        for (let k = 1; k < j + 1; k++) {

        }
    }
}

document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Дан массив a14 = [[1,2], [3,4], [5,6]], напишите функцию которая делает из него массив [1,2,3,4,5,6]. Используем for in.
    Действия должны запускаться при вызове функции t14. Результат операции запишите в a14_res.
 */

let a14 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function t14(a14) {


}

document.querySelector('.b-14').onclick = function () {
    t14(a14);
}


// Task 15 ============================================!
/*  Дан массив a15 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит самый большой индекс вложенных массивов. Используем for in.
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function t15(a15) {


}

document.querySelector('.b-15').onclick = function () {
    t15(a15);
}


// Task 16 ============================================
/*  Дан массив a16 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a16_res={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for in.
    Действия должны запускаться при вызове функции t16. Результат операции запишите в a16_res.
 */

let a16 = [4, 6, 9, "hello"];

function t16(a16) {


}

document.querySelector('.b-16').onclick = function () {
    t16(a16);
}

// Task 17 ============================================
/*  Переберите массив a17 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в формате елемент+пробел.
    Действия должны запускаться при вызове функции t17.
 */

let a17 = [5, 7, 9, 11, 13, 15];

function t17(a17) {


}

document.querySelector('.b-17').onclick = function () {
    t17(a17);
}

// Task 18 ============================================
/*  Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of.
    Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res;
    Действия должны запускаться при вызове функции t18.
 */

let a18 = [5, 7, 9, 11, 13, 15];

function t18(a18) {


}

document.querySelector('.b-18').onclick = function () {
    t18(a18)
};

// Task 19 ============================================!!!
/*  Напишите функцию, которая выполняет: при нажатии кнопки div.u-19 с помощью getElementsByClassName, переберите циклом for of, допишите в каждый из div цифры 19 (без пробелов). Если это невозможно - напишите в комментарии.
    Действия должны запускаться при вызове функции t19.
 */


function t19() {

}

document.querySelector('.b-19').onclick = t19;

// Task 20 ============================================!!!
/* Дан массив a20 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a20_res ={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for of.
Действия должны запускаться при вызове функции t20.
 */

let a20 = [4, 6, 9, "hello"];

function t20(a20) {}

document.querySelector('.b-20').onclick = function () {
    t20(a20);
}