// Task 1
console.log("============== ЗАДАНИЕ №1 ==============");
let a = 7,
    b = 9;
console.log("Результат умножения a*b равен " + a * b);

// Task 2
let c = 7,
    d = 9;
document.getElementById('two').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('two').innerHTML += "<br>" + "Результат деления c/d равен  " + c / d;

// Task 3
let e = 3,
    f = 5;
document.getElementById('three').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('three').innerHTML += "<br>" + "Результат сложения e+f равен  " + (e + f);

// Task 4
let e1 = '3',
    f1 = 5;
document.getElementById('four').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('four').innerHTML += "<br>" + "Результат сложения e+f равен  " + (e1 + f1);
document.getElementById('four').innerHTML += "<br>" + "Тут происходит конкатенация строк. '3' - строка, а 5 - число";


// Task 5
let e2 = 3,
    f2 = 0;
document.getElementById('five').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('five').innerHTML += "Результат деления e2 на f2 равен " + e2 / f2;

// Task 6
let e3 = 3,
    f3 = "Hello";
document.getElementById('six').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('six').innerHTML += "<br>" + "Результат сложения переменных  " + e3 + f3;


// Task 7
let e4 = 3,
    f4 = "Hello";
document.getElementById('seven').innerHTML = "<b>" + "Ответ :  " + "</b>";
document.getElementById('seven').innerHTML += "<br>" + "Результат умножения переменных  " + e4 * f4;


// Task 8
let input8 = document.querySelector('.task8');
let button_8 = document.querySelector('.button_8');

button_8.onclick = () => {
    console.log("============== ЗАДАНИЕ №8 ==============");
    console.log(input8.value);
}

// Task 9
let input9 = document.querySelector('.task9');
let button_9 = document.querySelector('.button_9');
let clear = document.querySelector('.button_clear');

button_9.onclick = () => {
    document.getElementById('ninth').innerHTML = input9.value;
}
clear.onclick = () => {
    let div = document.getElementById('ninth');
    div.innerHTML = ""; // очистка div
    input9.value = ""; // очистка imput
}

// Task 10
let input10 = document.querySelector('.task10');
let button_10 = document.querySelector('.button_10');

button_10.onclick = () => {
    let result = input10.value;
    document.getElementById('tenth').innerHTML = '<b>' + "Ответ: </b>" + result * 10;
    document.getElementById('tenth').innerHTML += '<br>' + 'В данном случае JS сам преобразует строку в число';
}

// Task 11
let input11 = document.querySelector('.task11');
let button_11 = document.querySelector('.button_11');

button_11.onclick = () => {
    let result = input11.value;
    document.getElementById('eleventh').innerHTML = "<b>Ответ:</b>  ";
    document.getElementById('eleventh').innerHTML += +result + 10;
    document.getElementById('eleventh').innerHTML += '<br>' + 'input возвращает строку. Чтобы работать с числом нужно поставить "+" перед переменной result';
}

// Task 12
let button_12 = document.querySelector('.button_12');

button_12.onclick = () => {
    let name = document.querySelector('.task12_name'); // в других случаях я бы назвал переменные просто name и surname, а не input12_name и т.п., только из-за 20-ти заданий
    let surname = document.querySelector('.task12_lastname');

    console.log("============== ЗАДАНИЕ №12 ==============");
    console.log("Hello, " + name.value + " " + surname.value + "!");
}

// Task 13
let input13_num1 = document.querySelector('.task13_num1');
let input13_num2 = document.querySelector('.task13_num2');
let button_13 = document.querySelector('.button_13');

button_13.onclick = () => {
    let div = document.getElementById('thirteenth');
    div.innerHTML = "Ответ " + "<br>";
    div.innerHTML += +input13_num1.value + +input13_num2.value;
}

// Task 14
let input14 = document.querySelector('.task14');
let button_14 = document.querySelector('.button_14');

button_14.onclick = () => {
    input14.value = "Hello";
}

// Task 15
let y = document.querySelector('.task15');
let button_15 = document.querySelector('.button_15');

button_15.onclick = () => {
    y.style.border = '2px solid red';
}

// Task 16
let input16_num1 = document.querySelector('.task16_num1');
let input16_num2 = document.querySelector('.task16_num2');
let button_16 = document.querySelector('.button_16');

button_16.onclick = () => {
    let div = document.getElementById('sixteenth');
    div.innerHTML = "<b>Ответ : </b> " + "<br>";
    div.innerHTML += +input16_num1.value + +input16_num2.value;
}

// Task 17
let input17 = document.querySelector('.task17');
let button_17 = document.querySelector('.button_17');

button_17.onclick = () => {
    console.log("============== ЗАДАНИЕ №17 ==============");
    let t = input17.value;
    console.log(parseInt(t));
}

// Task 18
let input18 = document.querySelector('.task18');
let button_18 = document.querySelector('.button_18');

button_18.onclick = () => {
    console.log("============== ЗАДАНИЕ №18 ==============");
    let t = input18.value;
    console.log(parseFloat(t));
}

// Task 19
let input19_num1 = document.querySelector('.task19_num1');
let input19_num2 = document.querySelector('.task19_num2');
let button_19 = document.querySelector('.button_19');

button_19.onclick = () => {
    let div = document.getElementById('nineteenth');
    div.innerHTML = "<b>Ответ : </b> " + "<br>";
    div.innerHTML += +input19_num1.value + +input19_num2.value;
    /* читал комментарии про схожесть с 16-м и про то, что parseInt
     может работать с отрицательными числами тоже, но не совсем понял 
     нужно ли было тут использовать метод (в условии не сказано)*/
}

// Task 20

let button_20 = document.querySelector('.button_20');

button_20.onclick = () => {
    let name = document.querySelector('.task20_name');
    let surname = document.querySelector('.task20_surname');
    let age = document.querySelector('.task20_age');
    let job = document.querySelector('.task20_job');

    let div = document.getElementById('twenty');
    div.innerHTML = "<b>Ответ : </b> " + "<br>";
    div.innerHTML += "Уважаемый, " + name.value + " " + surname.value + ", Ваш возраст " + age.value + " года, а по профессии Вы " + job.value.toLowerCase();
}