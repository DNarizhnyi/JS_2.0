// Task 1
document.getElementById('bnt-1').onclick = () => {
    console.log("============== ЗАДАНИЕ №1 ==============");
    console.log("Меня зовут Дима");
}

// Task 2
document.getElementById('bnt-2').onclick = () => {
    console.log("============== ЗАДАНИЕ №2 ==============");
    console.log("Номер месяца в котором я родился - " + 7);
}

// Task 3
document.getElementById('bnt-3').onclick = () => {
    console.log("============== ЗАДАНИЕ №3 ==============");
    console.log("'Добро '+'пожаловать '+' на курс'");
}

// Task 4
document.getElementById('bnt-4').onclick = () => {
    alert(2019);
}

// Task 5
document.getElementById('bnt-5').onclick = () => {
    alert('Результат операции "2019-200" равен ' + (2019 - 200));
}

// Task 6
document.getElementById('bnt-6').onclick = () => {
    document.getElementById('one').innerHTML = "Hello, World!";
}

// Task 7
document.getElementById('bnt-7').onclick = () => {
    document.getElementById('two').innerHTML = "Результат умножения равен " + 12 * 12;
}

// Task 8
document.getElementById('bnt-8').onclick = () => {
    document.querySelector('.one').innerHTML = "Hello, World!";
}

// Task 9
document.getElementById('bnt-9').onclick = () => {
    document.querySelector('span').innerHTML = "world";
}

// Task 10
document.getElementById('bnt-10').onclick = () => {
    document.querySelector('.three').innerHTML = '<h3> Looks good </h3>';
}

// Task 11
document.getElementById('bnt-11').onclick = () => {
    document.querySelector('.four').innerHTML = '<h4>Только что созданный заголовок</h4>';
    document.querySelector('.four').innerHTML += '<p>Lorem text  </p>';
}

// Task 12
document.getElementById('bnt-12').onclick = () => {
    let a = document.querySelector('.five').innerHTML = 3.1415; // или можно было бы написать Math.PI
}

// Task 13
document.getElementById('bnt-13').onclick = () => {
    let div7 = document.querySelector('.seven').innerHTML = '<img src =' +
        '"https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png"' +
        'alt="">';
}

// Task 14
document.getElementById('bnt-14').onclick = () => {
    let z1 = 6,
        z2 = 3;
    document.querySelector('.multiply').innerHTML = "Результат умножения z1 на z2 равен " + z1 * z2;
}

// Task 15
document.getElementById('bnt-15').onclick = () => {
    let y1 = 6,
        y2 = 3;
    document.querySelector('.divide').innerHTML = "Результат деления y1 на y2 равен " + y1 / y2;
}

// Task 16
document.getElementById('bnt-16').onclick = () => {
    let x1 = 'Hello',
        x2 = 5;
    document.querySelector('.str-number').innerHTML = x1 + x2;
    document.querySelector('.str-number').innerHTML += '<br>' + "Оператор '+' примененный к операндам, <b>один из которых строка</b>," +
        "является оператором <i>конкатенации</i> (сложения) строк.";
}

// Task 17
document.getElementById('bnt-17').onclick = () => {
    let d1 = document.querySelector('.test-1');
    console.log("============== ЗАДАНИЕ №17 ==============");
    console.log(d1);
}

// Task 18
document.getElementById('bnt-18').onclick = () => {
    var d2 = document.querySelector('.test-2');
    console.log("============== ЗАДАНИЕ №18 ==============");
    console.log("До переопределения \n");
    console.log(d2);
    d2 = 5;
    console.log("После переопределения \n " + d2);
}

// Task 19
document.getElementById('bnt-19').onclick = () => {
    let divS3 = document.querySelector('.s3');
    console.log(divS3);
    divS3 = document.querySelector('.s4');
    console.log(divS3);
}

// Task 20
document.getElementById('bnt-20').onclick = () => {
    document.querySelector('body').innerHTML = "";
}