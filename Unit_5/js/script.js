// Task 1 ============================================
/* <p> Выведите в консоль с помощью цикла числа от 1 до 10.</p>
Действия запускаются при вызове функции t1*/


function t1() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

function t1_clear() {
    console.clear();
}

document.querySelector('.b-1').onclick = t1;
document.querySelector('.b-1_clear').onclick = t1_clear;

// Task 2 ============================================
/*  Выведите <b>на страницу</b> с помощью цикла числа от 1 до 10.
Действия запускаются при вызове функции t2 */


function t2() {
    let div = document.querySelector('.out-2');
    for (let i = 1; i < 11; i++) {
        div.innerHTML += i + '<br>';
    }
}
// Для очистки
function t2_clear() {
    document.querySelector('.out-2').innerHTML = "";
}
document.querySelector('.b-2').onclick = t2;
document.querySelector('.b-2_clear').onclick = t2_clear;




// Task 3 ============================================
/* Выведите <b>на страницу</b> с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.
Действия запускаются при вызове функции t3 */


function t3() {
    let div = document.querySelector('.out-3');
    for (let i = 10; i >= 0; i--) {
        div.innerHTML += i + '<br>';
    }
}

function t3_clear() {
    document.querySelector('.out-3').innerHTML = "";
}

document.querySelector('.b-3').onclick = t3;
document.querySelector('.b-3_clear').onclick = t3_clear;


// Task 4 ============================================
/*  Выведите <b>на страницу</b> с помощью цикла числа в диапазоне от 0 до 10 с шагом 2. 
Действия запускаются при вызове функции t4.*/


function t4() {
    let div = document.querySelector('.out-4');
    for (let i = 0; i < 11; i += 2) {
        div.innerHTML += i + '<br>';
    }
}

function t4_clear() {
    document.querySelector('.out-4').innerHTML = "";
}
document.querySelector('.b-4').onclick = t4;
document.querySelector('.b-4_clear').onclick = t4_clear;


// Task 5 ============================================
/* Выведите <b>на страницу</b> с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.
 Действия должны запускаться при вызове функции t5. */


function t5() {
    let div = document.querySelector('.out-5');
    for (let i = 21; i >= 0; i -= 3) {
        div.innerHTML += i + '<br>';
    }
}

function t5_clear() {
    document.querySelector('.out-5').innerHTML = "";
}

document.querySelector('.b-5').onclick = t5;
document.querySelector('.b-5_clear').onclick = t5_clear;


// Task 6 ============================================
/*  Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу. */


function t6() {
    let div = document.querySelector('.out-6');
    for (let i = 0; i < 6; i++) {
        div.innerHTML += "******" + '<br>';
    }
}

function t6_clear() {
    document.querySelector('.out-6').innerHTML = "";
}

document.querySelector('.b-6').onclick = t6;
document.querySelector('.b-6_clear').onclick = t6_clear;


// Task 7 ============================================
/*  Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного пользователем в input до нуля.*/


function t7() {
    let div = document.querySelector('.out-7');
    let input = document.querySelector('.input-7').value;
    for (let i = +input; i >= 0; i--) {
        div.innerHTML += i + " ";
    }
}

function t7_clear() {
    document.querySelector('.out-7').innerHTML = "";
}

document.querySelector('.b-7').onclick = t7;
document.querySelector('.b-7_clear').onclick = t7_clear;

// Task 8 ============================================
/* Создайте input, input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. 
Считаем что второе число всегда больше первого */


function t8() {
    let div = document.querySelector('.out-8');
    let input1 = +document.querySelector('.input-8_one').value;
    let input2 = +document.querySelector('.input-8_two').value;
    for (let i = input1; i <= input2; i++) {
        div.innerHTML += i + " ";
    }
}

function t8_clear() {
    document.querySelector('.out-8').innerHTML = "";
}
document.querySelector('.b-8').onclick = t8;
document.querySelector('.b-8_clear').onclick = t8_clear;


// Task 9 ============================================
/*Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, если нет - выводим alert о ошибке.
 */


function t9() {
    let div = document.querySelector('.out-9');
    let input1 = +document.querySelector('.input-9_one').value;
    let input2 = +document.querySelector('.input-9_two').value;
    if (input1 >= input2) {
        alert("Первое число должно быть меньше второго!");
    } else {
        for (let i = input1; i <= input2; i++) {
            div.innerHTML += i + " ";
        }
    }
}

function t9_clear() {
    document.querySelector('.out-9').innerHTML = "";
}
document.querySelector('.b-9').onclick = t9;
document.querySelector('.b-9_clear').onclick = t9_clear;


// Task 10 ============================================
/*  Выведите на страницу все четные годы в промежутке от 1901 до 1950.
 */


function t10() {
    let div = document.querySelector('.out-10');
    for (let i = 1901; i <= 1950; i++) {
        if (i % 2 == 0) {
            div.innerHTML += i + " "
        }
    }
}

function t10_clear() {
    document.querySelector('.out-10').innerHTML = "";
}

document.querySelector('.b-10').onclick = t10;
document.querySelector('.b-10_clear').onclick = t10_clear;


// Task 11 ============================================
/*  Создайте несколько div.one. С помощью length выведите количество div.one на странице.
 */


function t11() {
    let count = document.getElementsByClassName('one');
    alert("Количество div с классом 'one' равно " + count.length);
}

document.querySelector('.b-11').onclick = t11;


// Task 12 ============================================!
/*  Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет.
 */


function t12() {
    let div = document.querySelectorAll(".one");
    for (let i = 0; i < div.length; i++) {
        div[i].style.background = "orange";
    }
}

document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================!
/*  Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one.
 */


function t13() {
    let div = document.querySelectorAll(".one");
    for (let i = 0; i < div.length; i++) {
        console.log(div[i].innerHTML);
    }
}

document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"] устанавливает свойство placeholder = 'Введите данные'
 */

function t14() {
    let input = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < input.length; i++) {
        input[i].placeholder = "Введите данные";
    }
}

document.querySelector('.b-14').onclick = t14;



// Task 15 ============================================!
/*  Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"]
 */


function t15() {
    let input = document.querySelectorAll('input[type="text"]');
    console.log("Количество input с типом 'text' равно " + input.length);

}

function t15_clear() {
    console.clear();
}
document.querySelector('.b-15').onclick = t15;
document.querySelector('.b-15_clear').onclick = t15_clear;

// Task 16 ============================================
/*  Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу value выбранного.
 */


function t16() {
    let radiobutton = document.querySelectorAll('input[name="p1"]');
    for (let i = 0; i < radiobutton.length; i++) {
        if (radiobutton[i].checked) {
            alert(radiobutton[i].value);
        }
    }
}
document.querySelector('.b-16').onclick = t16;


// Task 17 ============================================
/*  Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked.
 */


function t17() {
    let radiobutton = document.querySelectorAll('input[name="p1"]');
    for (let i = 0; i < radiobutton.length; i++) {
        radiobutton[0].checked = true;
    }

}

document.querySelector('.b-17').onclick = t17;



// Task 18 ============================================
/* Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу присвойте value = 0, второму value = 1 и т.д.
 */


function t18() {
    let radiobutton = document.querySelectorAll('input[name="p1"]');
    for (let i = 0; i < radiobutton.length; i++) {
        radiobutton[i].value = i;
    }
}

document.querySelector('.b-18').onclick = t18;


// Task 19 ============================================
/*  Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии
    на котору проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true.
 */


function t19() {
    let radiobutton = document.querySelectorAll('input[name="p2"]');
    let div = document.querySelector('.out-19');
    for (let i = 0; i < radiobutton.length; i++) {

        if (radiobutton[i].checked == true && radiobutton[i].value == 6) {
            div.innerHTML = "true";
        } else {
            div.innerHTML = "false";
        }
    }
}

document.querySelector('.b-19').onclick = t19;

// Task 20 ============================================
/* Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении состояния input - выводите в консоль текст "был изменен input"
 */


function t20() {
    let radiobutton = document.querySelectorAll('input[name="p3"]');
    for (let i = 0; i < radiobutton.length; i++) {

        radiobutton[i].oninput = () => {
            console.log("Был изменен input " + (i + 1))
        };
    }
}
document.querySelector('.b-20').onclick = t20;