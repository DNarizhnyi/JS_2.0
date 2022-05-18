// task 1 --------------------

document.querySelector(".task-1").onclick = function () {
    let array = ["I am ", 25, "study JS ", true];
    console.log("========== Задание 1 ==========")
    console.log(array);
    console.log("===============================");
}

// task 2 --------------------

document.querySelector(".task-2").onclick = function () {
    let array = ["I am", 1227, " study Python ", false];
    let div = document.querySelector(".div-2");
    div.innerHTML = array;
}

// task 3 --------------------

document.querySelector(".task-3").onclick = function () {
    const a = [2, 'hello', 17, 34, 'privet']
    let div = document.querySelector(".div-3");
    div.innerHTML = "Длинна массива = " + a.length;
}

// task 4 --------------------

document.querySelector(".task-4").onclick = function () {
    const a = [2, 'hello', 17, 34, 'privet']
    console.log("========== Задание 4 ==========")
    console.log("Нулевой элемент " + a[0]);
    console.log("Третий элемент " + a[3]);
    console.log("Восьмой элемент " + a[8]);
    console.log("Вывод: элементы начинаются с нуля, восьмой элемент undefined, потому что не задан");
    console.log("===============================");
}

// task 5 --------------------

document.querySelector(".task-5").onclick = function () {
    const a = [2, 'hello', 17, 34, 'privet']
    console.log("========== Задание 5 ==========")
    console.log("Сумма нулевого, второго и третьего массива равна " +
        (a[0] + a[2] + a[3]));
    console.log("===============================");
}

// task 6 --------------------

document.querySelector(".task-6").onclick = function () {
    const myself = ["Dima", "Cancer", 3, "July"];
    let div = document.querySelector(".div-6");
    div.innerHTML = myself;
}

// task 7 --------------------

document.querySelector(".task-7").onclick = function () {
    let b = ['one', 1, 2, 'two'];
    b[4] = "hi";
    b[5] = "foo";
    b[6] = "bar";
    let div = document.querySelector(".div-7");
    div.innerHTML = b;
}

// task 8 --------------------

document.querySelector(".task-8").onclick = function () {
    let b = ['one', 1, 2, 'two'];
    b[3] = 3.14;
    b[4] = 17;
    b[6] = 5;
    let div = document.querySelector(".div-8");
    div.innerHTML = b + " <br> Значение длины массива = " + b.length;
    console.log("========== Задание 8 ==========")
    console.log(b);
    console.log("Значение длины массива = " + b.length)
    console.log("===============================");
}

// task 9 --------------------

document.querySelector(".task-9").onclick = function () {
    let b = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let div = document.querySelector(".div-9");
    div.innerHTML = "Исходный массив: <br>" + b + "<p>";
    div.innerHTML += "Третий элемент - " + b[3] + "<br> Седьмой элемент - " + b[7];

    console.log("========== Задание 9 ==========")
    console.log(b);
    console.log("===============================");
}

// task 10 --------------------

document.querySelector(".task-10").onclick = function () {
    let b = [];
    b[1] = "one";
    b[5] = "five";
    b[10] = "ten";

    let div = document.querySelector(".div-10");
    div.innerHTML = b + "<br> Длина массива - " + b.length;
    console.log("========== Задание 10 ==========")
    console.log(b);
    console.log("Длина массива - " + b.length);
    console.log("===============================");
}

// task 11 --------------------

document.querySelector(".task-11").onclick = function () {
    const c = [77, 88, 99, 66];
    c[1] = c[1] + c[3];
    c[3] = c[1] - c[3];
    c[1] = c[1] - c[3];
    let div = document.querySelector(".div-11");
    div.innerHTML = c;
}


// task 12 --------------------

function func_12(arr) {
    let div = document.querySelector(".div-12");
    div.innerHTML = "Оригинальный массив: <br>" + arr + "<p>";
    let temp = [];

    temp[0] = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp[0];


    div.innerHTML += "Измененный массив <br> " + arr;
    return arr;
}

document.querySelector(".task-12").onclick = function () {
    let arr = [77, 88, 'candy', 99, 'fruit'];
    func_12(arr);
}


// task 13 --------------------

document.querySelector(".task-13").onclick = function () {
    let d = ['y', 4, 22, 'o'];
    let div = document.querySelector(".div-13");

    div.innerHTML = "Вывод элементов - ";

    for (let i = 0; i < d.length; i++) {
        div.innerHTML += d[i] + " ";
    }
}


// task 14 --------------------
document.querySelector(".task-14").onclick = function () {
    let e = [1, 2, 3, 'hello', 66];
    let div = document.querySelector(".div-14");

    div.innerHTML = "Вывод элементов - ";

    for (let i = e.length - 1; i >= 0; i--) {
        div.innerHTML += e[i] + " ";
    }
}


// task 15 --------------------
document.querySelector(".task-15").onclick = function () {
    let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let div = document.querySelector(".div-15");

    div.innerHTML = "Вывод элементов - ";

    for (let i = 0; i < d.length; i++) {
        if (d[i] > 0) {
            div.innerHTML += d[i] + " ";
        }
    }
}


// task 16 --------------------
document.querySelector(".task-16").onclick = function () {
    let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let a1 = document.querySelector(".div-16_even");
    let a2 = document.querySelector(".div-16_odd");

    a1.innerHTML = "Вывод четных элементов : ";
    a2.innerHTML = "Вывод нечетных элементов : ";

    for (let i = 0; i < d.length; i++) {
        if (d[i] % 2 == 0) {
            a1.innerHTML += d[i] + " ";
        } else {
            a2.innerHTML += d[i] + " ";
        }
    }
}


// task 17 --------------------
document.querySelector(".task-17").onclick = function () {
    let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    let div = document.querySelector(".div-17");
    let count = 0;

    for (let i = 0; i < e.length; i++) {
        if (e[i] == 0) {
            count++;
        }
    }
    div.innerHTML = "Количество нулей в массиве - " + count;
}


// task 18 --------------------
document.querySelector(".task-18").onclick = function () {
    let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    let div = document.querySelector(".div-18");
    let max = e[0];

    for (let i = 0; i < e.length; i++) {

        if (e[i] > max) {
            max = e[i];
        }
    }
    div.innerHTML = "Максимальный элемент - " + max;
}

// task 19 --------------------
document.querySelector(".task-19").onclick = function () {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let div = document.querySelector(".div-19");
    let max = f[0];
    let index = 0;

    for (let i = 0; i < f.length; i++) {
        if (f[i] > max) {
            max = f[i];
            index = i;
        }
    }
    div.innerHTML = "Индекс максимального элемента " + index;
}

// task 20 --------------------
document.querySelector(".task-20").onclick = function () {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let div = document.querySelector(".div-20");
    let sum = 0;

    for (let i = 0; i < f.length; i++) {
        sum += f[i];
    }
    div.innerHTML = "Сумма элементов массива равна " + sum;
}