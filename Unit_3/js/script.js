// Task 1
let button1 = document.querySelector(".button1");
button1.onclick = () => {

    let a = 4;
    if (a == 4) {
        console.log("============== ЗАДАНИЕ №1 ==============");
        console.log("Да, тут а = " + a); // если нет, то условие все равно не сработает поэтому добавил переменную, а не текст
    }
}

// Task 2
let button2 = document.querySelector(".button2");
button2.onclick = () => {
    let b = 8,
        c = 10;
    console.log("============== ЗАДАНИЕ №2 ==============");
    if (b < c) {
        console.log("Переменная 'с' больше 'b'");
    } else {
        console.log("Переменная 'b' больше 'c'");
    }
}

// Task 3
let button3 = document.querySelector(".button3");
button3.onclick = () => {
    let b = 8,
        c = 10;
    console.log("============== ЗАДАНИЕ №3 ==============");
    if (b < c) {
        console.log("Переменная 'с' больше 'b'");
    } else if (b == c) {
        console.log("Переменные равны");
    } else {
        console.log("Переменная 'b' больше 'c'");
    }
}

// Task 4
let button4 = document.querySelector(".button4");
button4.onclick = () => {
    let input1 = document.querySelector('.task4_1').value;
    let input2 = document.querySelector('.task4_2').value;
    let div = document.getElementById('result_4');

    if (isNaN(input1) || isNaN(input2) || input1.trim() === "" || input2.trim() === "") { // === - иначе было бы приведение "" к null или '0' к "null"
        div.innerHTML = "Вы не ввели число!";
    } else if (+input1 > +input2) {
        div.innerHTML = "Число 1 больше, чем число 2";
    } else if (+input1 < +input2) {
        div.innerHTML = "Число 2 больше, чем число 1";
    } else {
        div.innerHTML = "Числа равны";
    }
}

// Task 5
let button5 = document.querySelector(".button5");
button5.onclick = () => {
    let input = document.querySelector('.task5').value,
        div = document.getElementById('result_5');


    if (isNaN(input) || input.trim() === "") {
        div.innerHTML = "Вы не ввели год Вашего рождения!";
    } else if (input > 2019) {
        div.innerHTML = "Вы из будущего?";
    } else if (input < 2000) {
        div.innerHTML = "Ваш возраст " + (2019 - input);
    } else {
        console.log("============== ЗАДАНИЕ №5 ==============");
        console.log("Ваш возраст " + (2019 - input));
    }
}

// Task 6
let button6 = document.querySelector(".button6");
button6.onclick = () => {
    let input = document.querySelector('.task6').value,
        div = document.getElementById('result_6');

    if (isNaN(input) || input.trim() === "") {
        div.innerHTML = "Только номер, пожалуйста!";
    } else if (input > 32 || input <= 0) {
        div.innerHTML = "Такой квартиры не существует!"
    } else {
        div.innerHTML = "Вы выбрали квартиру № " + input;
    }
}

// Task 7
let button7 = document.querySelector(".button7");
button7.onclick = () => {
    let input = document.querySelector('.task7').value,
        div = document.getElementById('result_7');

    if (isNaN(input) || input.trim() === "") {
        div.innerHTML = "Только номер, пожалуйста!";
    } else if (input > 0) {
        div.innerHTML = "Число больше нуля";
    } else if (input < 0) {
        div.innerHTML = "Число меньше нуля ";
    } else {
        div.innerHTML = "Вы ввели ноль";
    }
}

// Task 8
let button8 = document.querySelector(".button8");
button8.onclick = () => {
    let input = document.querySelector('.task8').value;
    div = document.getElementById('result_8');

    if (isNaN(input) || input.trim() === "") {
        div.innerHTML = "Допускаются только числа!";
    } else if (input % 2 == 0) {
        div.innerHTML = "Число четное";
    } else {
        div.innerHTML = "Число не четное";
    }
}

// Task 9
let button9 = document.querySelector(".button9");
button9.onclick = () => {
    let input1 = document.querySelector('.task9_1').value;
    let input2 = document.querySelector('.task9_2').value;
    div = document.getElementById('result_9');

    if (isNaN(+input1) || input1.trim() === "") {
        div.innerHTML = "Вы не ввели число в первом поле";
    } else if (isNaN(input2) || input2 === "" || input2.trim() === "") {
        div.innerHTML = "Вы не ввели число во втором поле";
    } else {
        div.innerHTML = "Результат возведения в степень - " + (input1 ** input2);
    }
}

// Task 10
let button10 = document.querySelector(".button10");
button10.onclick = () => {
    let input = document.querySelector('.task10').value;

    if (input === "" || input === " ") { //решил оставить метод trim() для следующей задачи
        alert("Повторите попытку");
    } else {
        alert("Hello, " + input);
    }
}

// Task 11
let button11 = document.querySelector(".button11");
button11.onclick = () => {
    let input = document.querySelector('.task11').value;

    if (input.trim() === "") {
        alert("Повторите попытку");
    } else {
        alert("Hello, " + input.trim())
    }
}

// Task 12
let button12 = document.querySelector(".button12");
button12.onclick = () => {
    let input = document.querySelector('.task12').value;

    switch (input) {
        case '1':
            console.log("============== ЗАДАНИЕ №5 ============== \n Один");
            break;
        case '2':
            console.log("============== ЗАДАНИЕ №5 ============== \n Два");
            break;
        case '3':
            console.log("============== ЗАДАНИЕ №5 ============== \n Три");
            break;
        default:
            console.log("============== ЗАДАНИЕ №5 ============== \n Только цифры 1, 2 или 3");
    }
}

// Task 13
let button13 = document.querySelector(".button13");
button13.onclick = () => {
    let input = +document.querySelector('.task13').value;
    let div = document.getElementById('result13');

    if (Number.isInteger(input) == false) {
        div.innerHTML = "Неправильно введен номер дома";
    } else if (input >= 1 && input <= 5) {
        div.innerHTML = "Вы выбрали дом номер " + input + " который находится на улице №1";
    } else if (input >= 6 && input < 11) {
        div.innerHTML = "Вы выбрали дом номер " + input + " который находится на улице №2";
    } else if (input >= 11 && input <= 20) {
        div.innerHTML = "Вы выбрали дом номер " + input + " который находится на улице №3";
    } else {
        div.innerHTML = "Такого дома нет";
    }
}

// Task 14
let button14 = document.querySelector(".button14");
button14.onclick = () => {
    let input = +document.querySelector(".task14").value;
    let div = document.getElementById('result14');

    if (0 < input && input <= 25) {
        div.innerHTML = input + " рентген - не обнаруживается";
    } else if (25 < input && input <= 50) {
        div.innerHTML = input + " рентген - снижение числа лимфоцитов";
    } else if (50 < input && input <= 100) {
        div.innerHTML = input + " рентген - вялость, рвота";
    } else if (100 < input && input <= 150) {
        div.innerHTML = input + " рентген - смертность 5%";
    } else if (150 < input && input <= 350) {
        div.innerHTML = input + " рентген - смертность 50% за 30 суток";
    } else if (350 < input && input <= 600) {
        div.innerHTML = input + " рентген - смертность 90% за 2 недели";
    } else if (input > 600) {
        div.innerHTML = input + " рентген - смертность 100%";
    }
}

// Task 15
let button15 = document.querySelector(".button15");
button15.onclick = () => {
    let x = 1,
        y = 0;
    console.log("============== ЗАДАНИЕ №15 ==============");
    console.log("Результат операции x && y равен " + (x && y) + "\n&& - если оба аргумента истинны - вернет true, иначе - false");
    console.log("Результат операции x || y равен " + (x || y) + "\n|| - если хотя бы один из аргументов true, то вернет true, иначе - false");
    console.log("Из-за неявного приведения типов, JS расценивает '0' как false, а '1' как true");
}

// Task 16
let button16 = document.querySelector(".button16");
button16.onclick = () => {
    let input = +document.querySelector(".task16").value;
    let div = document.getElementById('result16');

    if (0 < input && input <= 499) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 2525 тенге";
    } else if (500 <= input && input <= 1199) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 5050 тенге";
    } else if (1200 <= input && input <= 1599) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 8275 тенге";
    } else if (1600 <= input && input <= 1899) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 9675 тенге";
    } else if (1900 <= input && input <= 1999) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 11075 тенге";
    } else if (2000 <= input) {
        div.innerHTML = "Ваш налог для " + input + " кубов составит 15000 тенге";

    }
}

// Task 17
let button17 = document.querySelector(".button17");
button17.onclick = () => {
    let input = document.querySelector(".task17_amount").value;
    let currency = document.querySelector(".task17_currency").value.toLowerCase();
    let div = document.getElementById('result17');

    if (currency === 'евро' || currency === 'euro' || currency === 'eur') {
        div.innerHTML = input + " долларов это " + (input * 0.91).toFixed(2) + " euro, по курсу 1 usd = 0.91 eur на 23.09.2019";
    } else if (currency === 'рубль' || currency === 'rub') {
        div.innerHTML = input + " долларов это " + (input * 63.93).toFixed(2) + " rub, по курсу 1 usd = 63.93 rub на 23.09.2019";
    } else if (currency === 'гривна' || currency === 'uah') {
        div.innerHTML = input + " долларов это " + (input * 24.34).toFixed(2) + " uah, по курсу 1 usd = 24.34 uah на 23.09.2019";
    }
}

// Task 18
let button18 = document.querySelector(".button18");
button18.onclick = () => {
    let input = document.querySelector(".task18_amount").value;
    let currency = document.querySelector(".task18_currency").value.toLowerCase();
    let div = document.getElementById('result18');

    switch (currency) {
        case 'eur':
        case 'евро':
        case 'euro':
            div.innerHTML = input + " долларов это " + (input * 0.91).toFixed(2) + " euro, по курсу 1 usd = 0.91 eur на 23.09.2019";
            break;
        case 'rub':
        case 'рубль':
            div.innerHTML = input + " долларов это " + (input * 63.93).toFixed(2) + " rub, по курсу 1 usd = 63.93 rub на 23.09.2019";
            break;
        case 'uah':
        case 'гривна':
            div.innerHTML = input + " долларов это " + (input * 24.34).toFixed(2) + " uah, по курсу 1 usd = 24.34 uah на 23.09.2019";
            break;
    }
}

// Task 19

let button19 = document.querySelector(".button19");
button19.onclick = () => {
    let input1 = +document.querySelector('.task19_num1').value;
    let input2 = +document.querySelector('.task19_num2').value;
    let operation = document.querySelector('.operation_if-else').value;
    let div = document.getElementById('result19');

    if (operation == "+") {
        div.innerHTML = "Результат = " + (input1 + input2);
    } else if (operation == "-") {
        div.innerHTML = "Результат = " + (input1 - input2);
    } else if (operation == "/") {
        div.innerHTML = "Результат = " + (input1 / input2);
    } else if (operation == "*") {
        div.innerHTML = "Результат = " + (input1 * input2);
    }
}

// Task 20
let button20 = document.querySelector(".button20");
button20.onclick = () => {
    let input1 = +document.querySelector('.task20_num1').value;
    let input2 = +document.querySelector('.task20_num2').value;
    let operation = document.querySelector('.operation_switch').value;
    let div = document.getElementById('result20');

    switch (operation) {
        case '+':
            div.innerHTML = "Результат = " + (input1 + input2);
            break;
        case '-':
            div.innerHTML = "Результат = " + (input1 - input2);
            break;
        case '/':
            div.innerHTML = "Результат = " + (input1 / input2);
            break;
        case '*':
            div.innerHTML = "Результат = " + (input1 * input2);
            break;
    }
}