// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1(num) {
    let div = document.querySelector(".task1");
    let i = 0;
    while (i <= num) {
        div.innerHTML += i + " ";
        i++;
    }
}
document.querySelector(".b-1").onclick = function () {
    func_1(100);
};


// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(min, max) {
    let div = document.querySelector(".task2");
    while (min <= max) {
        div.innerHTML += min + " ";
        min++;
    }
}

document.querySelector(".b-2").onclick = function () {
    let min = +document.querySelector(".min_t2").value;
    let max = +document.querySelector(".max_t2").value;
    func_2(min, max);
};

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(min, max) {
    let div = document.querySelector(".task3");
    while (min <= max) {
        div.innerHTML += max + " ";
        max--;
    }
}

document.querySelector(".b-3").onclick = function () {
    let min = +document.querySelector(".min_t3").value;
    let max = +document.querySelector(".max_t3").value;
    func_3(min, max);
};


// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(min, max, step) {
    let div = document.querySelector(".task4");
    while (min <= max) {
        div.innerHTML += max + " ";
        max -= step;
    }
}

document.querySelector(".b-4").onclick = function () {
    let min = +document.querySelector(".min_t4").value;
    let max = +document.querySelector(".max_t4").value;
    let step = +document.querySelector(".step_t4").value;
    func_4(min, max, step);
};



// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5(max) {
    let div = document.querySelector(".task5");
    let sum = 0;
    let i = 0;
    while (i <= max) {
        sum += i;
        i++;
    }
    div.innerHTML = "Результат - " + sum;
}

document.querySelector(".b-5").onclick = function () {
    func_5(20);
};


// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    let div = document.querySelector(".task6");
    if (a < b) {
        let sum = 0;
        while (a <= b) {
            sum += a;
            a++;
        }
        div.innerHTML = "Сумма чисел " + sum;
    } else {
        div.innerHTML = "false";
        return false;
    }
}

document.querySelector(".b-6").onclick = function () {
    let min = +document.querySelector(".min_t6").value;
    let max = +document.querySelector(".max_t6").value;
    func_6(min, max);
};


// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    let div = document.querySelector(".task7");
    if (a < b) {
        let mult = 1;
        while (a <= b) {
            mult *= a;
            a++;
        }
        div.innerHTML = "Произведение чисел " + mult;
    } else {
        div.innerHTML = "false";
        return false;
    }
}

document.querySelector(".b-7").onclick = function () {
    let min = +document.querySelector(".min_t7").value;
    let max = +document.querySelector(".max_t7").value;
    func_7(min, max);
};

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let div = document.querySelector(".task8");
    let startCoins = 333;
    let endCoins = 1000000;
    let day = 1;

    while (startCoins <= endCoins) {
        startCoins *= 2;
        day++;
    }
    div.innerHTML = "1000000 монет или больше будет на <b> " + day + "</b> день. В количестве <b> " + startCoins + "</b> монет";
}

document.querySelector(".b-8").onclick = function () {
    func_8();
};

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параметра, где  все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let div = document.querySelector(".task9");
    while (a <= b) {
        if (a % 2 == 0) {
            div.innerHTML += " 0 ";
        } else {
            div.innerHTML += " " + a;
        }
        a++;
    }
}

document.querySelector(".b-9").onclick = function () {
    let min = +document.querySelector(".min_t9").value;
    let max = +document.querySelector(".max_t9").value;
    func_9(min, max);
};

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let div = document.querySelector(".task10");
    let i = 0;
    while (i < 6) {
        if (i % 2 == 0) {
            div.innerHTML += "**<br>";
        } else {
            div.innerHTML += "*<br>";
        }
        i++;

    }
}

document.querySelector(".b-10").onclick = function () {
    func_10();
};

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11(a, b) {
    let div = document.querySelector(".task11");

    while (b <= 10) {
        div.innerHTML += a + " ";
        div.innerHTML += b + " ";
        a--;
        b++;
    }

}
document.querySelector(".b-11").onclick = function () {
    func_11(10, 1);
};

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {
    let div = document.querySelector(".task12");
    let a = 0;
    do
        div.innerHTML += "do-while works <br>";
    while (a < 0);

    let b = 0;
    while (b < 0) {
        div.innerHTML += "while work";
    }
}
document.querySelector(".b-12").onclick = function () {
    func_12();
    document.querySelector(".task12").innerHTML += "а вот цикл 'while' не сработает<br>";
};

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13(num) {
    let div = document.querySelector(".task13");
    do {
        div.innerHTML += num + " ";
        num--;
    } while (num >= 0)
}
document.querySelector(".b-13").onclick = function () {
    func_13(100);
};

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14(num) {
    let div = document.querySelector(".task14");
    let day = 0;
    do {
        num += 0.3 * num;
        day++;
    } while (num < 132);

    div.innerHTML += "Побьют на " + day + " день";
}

document.querySelector(".b-14").onclick = function () {
    func_14(5);
};

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15(num) {
    let div = document.querySelector(".task15");
    let day = 0;
    let sum = 0;
    do {
        num += 0.3;
        sum += num;
        day++;
    } while (sum < 568);

    div.innerHTML += "Котлов не останется на  " + day + " день";
}

document.querySelector(".b-15").onclick = function () {
    func_15(1.1);
};

// Task 16
// На странице есть три параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

//Как по мне, тут можно и просто обойтись без цикла
function func_16() {
    let task16 = document.querySelectorAll(".task-16"); // вернет количество элементов
    if (task16.length % 2 == 0) {
        return "Количество элементов - " + task16.length;
    } else {
        return false;
    }
}

document.querySelector(".b-16").onclick = function () {
    document.querySelector(".div16").innerHTML = func_16();
};

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {
    let task17 = document.querySelectorAll(".task-16");
    let i = 0;
    do {
        task17[i].innerHTML += i + 1;
        i++;
    } while (i < task17.length);

}
document.querySelector(".b-17").onclick = function () {
    func_17();
};


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {
    let task18 = document.querySelectorAll(".task-18");
    let count = task18.length;
    let i = 0;

    do {
        task18[i].innerHTML = count;
        count--;
        i++;
    } while (count > 0);
}
document.querySelector(".b-18").onclick = function () {
    func_18();
};

// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19(num) {
    let div = document.querySelector(".div19");
    let i = 1;

    do {
        div.innerHTML += i;
        i += 2;
        if (i <= num) {
            div.innerHTML += "*";
        }
    } while (i <= num);

}
document.querySelector(".b-19").onclick = function () {
    let number = document.querySelector(".task19").value;
    document.querySelector(".div19").innerHTML = "";
    func_19(number);
};
// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
    let div = document.querySelector(".div20");
    let p = 0;
    let count = 0;
    while (p < 4) {
        let p1 = 0;
        while (p1 < 4) {
            if (p1 == count) {
                div.innerHTML += "1";
            } else {
                div.innerHTML += "*";
            }

            p1++;
        }
        div.innerHTML += "<br>";
        p++;
        count++;
    }
}

document.querySelector(".b-20").onclick = function () {
    func_20();
};