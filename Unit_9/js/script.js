// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;
let p1 = document.querySelector(".u-1");

function func_1(a, b) {
    p1.style.width = a + 'px';
    p1.style.height = b + 'px';
    p1.style.background = '#0d9fd4';
}

document.querySelector(".b-1-width").onclick = function () {
    p1.style.width = '200px';
    p1.style.background = '#0d9fd4';
}
document.querySelector(".b-1-height").onclick = function () {
    p1.style.height = "100px";
    p1.style.background = '#0d9fd4';
}
document.querySelector(".b-1-set").onclick = function () {
    let width = +document.querySelector(".input1-width").value;
    let height = +document.querySelector(".input1-height").value;
    func_1(width, height);
}
document.querySelector(".b-1-clear").onclick = function () {
    let width = document.querySelector(".input1-width");
    let height = document.querySelector(".input1-height");
    width.value = "";
    height.value = "";
}



// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.
let p2 = document.querySelector(".u-2");

function func_2() {
    p2.classList.add("css-1");
}
document.querySelector(".b-2").onclick = function () {
    func_2();
}

// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.


function func_3() {
    let p3 = document.querySelectorAll(".u-3");
    for (let i = 0; i < p3.length; i++) {
        p3[i].onclick = function () {
            this.style.background = 'red';
        }
    }
}
func_3();


// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let p4 = document.querySelectorAll(".u-4");
    for (let i = 0; i < p4.length; i++) {
        p4[i].onclick = function () {
            this.classList.add("css-2");
        }
    }
}
func_4();


// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let p5 = document.querySelectorAll(".u-5");
    for (let i = 0; i < p5.length; i++) {
        p5[i].onclick = function () {
            this.classList.remove("css-3");
        }
    }
}
func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
let p6 = document.querySelector(".u-6");

function func_6() {
    p6.onclick = function () {
        this.classList.toggle("active");
    }
}
func_6();

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.


function func_7() {
    let p7 = document.querySelectorAll(".css-3");
    let div = document.querySelector(".task7");
    div.innerHTML = "Количество элементов с классом css-3 равно " + p7.length;
    return p7.length;

}
document.querySelector(".b-7").onclick = function () {
    func_7();
}

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let p8 = document.querySelectorAll(".u-1");
    for (let i = 0; i < p8.length; i++) {
        p8[i].setAttribute("title", "test-data");
    }
}

document.querySelector(".b-8").onclick = function () {
    func_8();
}

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

function func_9() {
    let p9 = document.querySelectorAll(".u-9");
    let div = document.querySelector(".task9");

    for (let i = 0; i < p9.length; i++) {
        p9[i].onclick = function () {
            div.innerHTML = this.getAttribute("data");
        }
    }
}
func_9();


// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

function func_10() {
    let output = document.querySelector(".u-10__out");
    let p10 = document.querySelectorAll(".u-10__button");
    for (let i = 0; i < p10.length; i++) {
        p10[i].onclick = function () {
            let currency = p10[i].getAttribute("data-currency");
            switch (currency) {
                case "euro":
                    output.innerHTML = "Отношение евро к доллару 0,9 EUR за USD";
                    break;
                case "gbp":
                    output.innerHTML = "Отношение евро к доллару 0,78 GBP за USD";
                    break;
                case "rub":
                    output.innerHTML = "Отношение евро к доллару 63,82 RUB за USD";
                    break;
            }
        }
    }
}
func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

function func_11() {
    let input = document.querySelector(".u-11_out");
    let p11 = document.querySelectorAll(".u-11__button");

    for (let i = 0; i < p11.length; i++) {
        p11[i].onclick = function () {
            let currency = p11[i].getAttribute("data-currency");
            switch (currency) {
                case "euro":
                    input.value = (0.9 * input.value).toFixed(2);
                    break;
                case "gbp":
                    input.value = (0.78 * input.value).toFixed(2);
                    break;
                case "rub":
                    input.value = (63.81 * input.value).toFixed(2);
                    break;
            }
        }
    }

}
func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let div = document.createElement("div");
    div.innerHTML = "Для видимости";
    div.classList.add("css-4");
    document.querySelector(".task12").appendChild(div);
    return div;
}
document.querySelector(".b-12").onclick = function () {
    func_12();
}

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let span = document.createElement("span");
    span.innerHTML = "13";

    document.querySelector(".u-13").append(span);
    return span;
}

document.querySelector(".b-13").onclick = function () {
    func_13();
}

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let span = document.createElement("span");
    span.innerHTML = "14";

    document.querySelector(".u-14").prepend(span);
    return span;
}
document.querySelector(".b-14").onclick = function () {
    func_14();
}


// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let span = document.createElement("span");
    span.innerHTML = "15";

    document.querySelector(".u-15").before(span);
    return span;
}
document.querySelector(".b-15").onclick = function () {
    func_15();
}

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let button = document.createElement("button");
    button.innerHTML = "Push";
    button.onclick = () => {
        console.log("u-16");
        button.classList.add("u-16");
    }

    document.querySelector(".u-16__out").append(button);
    return button;
}

document.querySelector(".b-16").onclick = function () {
    func_16();
}


// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "17";

    document.querySelector(".u-17").replaceWith(paragraph);
    return paragraph;
}
document.querySelector(".b-17").onclick = function () {
    func_17();
}

// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

function func_18() {
    let div = document.querySelectorAll(".out-18");

    for (let i = 0; i < div.length; i++) {

        div[i].onclick = function () {
            this.remove();
            return this;
        }
    }
}

document.querySelector(".b-18").onclick = function () {
    func_18();
}

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let li_elem = document.createElement("li");
    li_elem.innerHTML = text;
    document.querySelector(".u-19").append(li_elem);
}
document.querySelector(".b-19").onclick = function () {
    func_19("Какой-либо текст");
}
// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

function func_20(text) {
    let li_elem = document.createElement("li");
    if (text.trim() != "") {
        li_elem.innerHTML = text;
        document.querySelector(".u-20").append(li_elem);
    } else {
        alert("Вы не ввели текст! Список не должен быть пустым!");
    }

    // Проверка на check
    let check = document.querySelector(".checkbox20");
    if (check.checked) {
        li_elem.classList.add("css-5");
    }

}
document.querySelector(".b-20").onclick = function () {
    let text = document.querySelector(".input20").value;
    func_20(text);
}


document.querySelector(".b-20").onclick = function () {
    let text = document.querySelector(".input20").value;
    func_20(text);
}


// Task 21


function func_21() {
    let button = document.createElement("button"); // - создаем новую кнопку через cReateElement 
    button.innerHTML = "Новая кнопка"; // - присваиваем ей имя
    button.classList.add("css-4"); // - присваеваем ей стиль (если нужно)
    document.querySelector(".task21").appendChild(button); // присоединяем к "чему-то", в данном случае к кнопке с классом task21
    return button;
}

// Вызываем функцию по нажатию кнопки
document.querySelector(".b-21").onclick = function () {
    func_21();
}
