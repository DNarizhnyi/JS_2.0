// task 1 --------------------
// Выведите массив a1 на страницу.
// a1 = {
//     3 : 'hello',
//     'one' : 'hi'
//    };

document.querySelector(".u-1__button").onclick = function () {
    let div = document.querySelector(".out-1");
    let a1 = {
        3: 'hello',
        'one': 'hi'
    };

    for (let key in a1) {
        div.innerHTML += key + " : " + a1[key] + "<br>";
    }
}



// task 2 --------------------
// Выведите на страницу элементы из массива a2 у которых символов больше 4.

// a2 = {
//     3 : 'hello',
//     'one' : 'hi',
//     'testt' : 'vodoley',
//     'ivan' : 'ivanov'
//    };

document.querySelector(".u-2__button").onclick = function () {
    let div = document.querySelector(".out-2");
    let a2 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    for (let key in a2) {
        if (a2[key].length > 4) {
            div.innerHTML += a2[key] + "<br>";
        }
    }
}


// task 3 --------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

// a3 = {
//     3 : 'hello',
//     'one' : 'hi',
//     'testt' : 'vodoley',
//     'ivan' : 'ivanov'
//    };

document.querySelector(".u-3__button").onclick = function () {
    let div = document.querySelector(".out-3");
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    for (let key in a3) {
        if (key.length > 4) {
            div.innerHTML += a3[key] + "<br>";
        }
    }
}


// task 4 --------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

//  a4 = {
//      3: 'hello',
//     'one': 4,
//     'testt': 'vodoley',
//     'ivan': 6
// };

document.querySelector(".u-4__button").onclick = function () {
    let div = document.querySelector(".out-4");
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };

    for (let key in a4) {
        if (!isNaN(a4[key])) {
            div.innerHTML += a4[key] + "<br>";
        }
    }
}


// task 5 --------------------
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

// a5 = {
//     a : 7,
//     z : 4,
//     45 : 12,
//     f : 6
//    };

document.querySelector(".u-5__button").onclick = function () {
    let div = document.querySelector(".out-5");
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };
    let sum = 0;

    for (let key in a5) {
        sum += a5[key];
    }
    div.innerHTML = "Сумма элементов равна  " + sum;
}


// task 6 --------------------
// Создайте ассоциативный массив a6, который содержит ключи 
// name, age, sex, height и значения любого персонажа. 
// Выведите массив на страницу.


document.querySelector(".u-6__button").onclick = function () {
    let div = document.querySelector(".out-6");
    let arr = {
        name: "Anna",
        age: 23,
        sex: "female",
        height: 176 + " cm",
        person: "Tsaritsa",
    }

    for (let key in arr) {
        div.innerHTML += key + " : " + arr[key] + "<br>";
    }

}


// task 7 --------------------
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки
// добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.
let arr7 = {};


document.querySelector(".u-7_show").onclick = function ShowMassive() {
    let div = document.querySelector(".out-7");

    for (let key in arr7) {
        div.innerHTML += key + " : " + arr7[key] + "<br>";
    }
}

document.querySelector(".u-7__button").onclick = function AddElement() {

    let key = document.querySelector(".u7-key__input").value;
    let value = document.querySelector(".u7-value__input").value;

    arr7[key] = value;
    console.log(arr7);
};



// task 8 --------------------
// Добавьте к предыдущей задачи input.u8-key__input и кнопку.
// При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.

// Для заданий 8 - 10
let arr8_10 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

document.querySelector(".u-8_show").onclick = function () {
    let div = document.querySelector(".out-8");

    for (let key in arr8_10) {
        div.innerHTML += key + " : " + arr8_10[key] + "<br>";
    }
    div.innerHTML += "<hr>";
}

document.querySelector(".u-8__button").onclick = function () {
    let input_key = document.querySelector(".u8-delete-key__input").value;

    delete arr8_10[input_key];

};


// task 9 --------------------
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку.
//  При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.

document.querySelector(".u-9_show").onclick = function () {
    let div = document.querySelector(".out-9");

    for (let key in arr8_10) {
        div.innerHTML += key + " : " + arr8_10[key] + "<br>";
    }
    div.innerHTML += "<hr>";
}

document.querySelector(".u-9__button").onclick = function () {
    let input_key = document.querySelector(".u9-delete-value__input").value;

    for (let key in arr8_10) {
        if (arr8_10[key] == input_key) {
            delete arr8_10[key];
        }

    }
};


// task 10 --------------------
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. 
// При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
document.querySelector(".u-10_show").onclick = function () {
    let div = document.querySelector(".out-10");

    for (let key in arr8_10) {
        div.innerHTML += key + " : " + arr8_10[key] + "<br>";
    }
    div.innerHTML += "<hr>";
}


document.querySelector(".u-10__button").onclick = function () {
    let input_key = document.querySelector(".u10-has-key__input").value;
    let div = document.querySelector(".out-10");

    for (let key in arr8_10) {
        if (key == input_key) {
            div.innerHTML = "true" + "<br>";
            return true;
        }
    }
    div.innerHTML = "false" + "<br>";
    return false;
};


// task 11 --------------------
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
let a11 = {
    "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Брестская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
    "blue": ['Героев Днепра', 'Минская', ' Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
    "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор']
}

document.querySelector(".u-11__button").onclick = function () {
    let div = document.querySelector(".out-11");

    for (let key in a11) {
        div.innerHTML += key + " : " + a11[key].join(", ") + " " + "<p></p>";
    }
};


// task 12 --------------------
// Добавьте к предыдущей задаче select.u12-branch и кнопку. 
// Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.

document.querySelector(".u-12__button").onclick = function () {
    let div = document.querySelector(".out-12");
    let choice = document.querySelector(".u12-branch").value;

    switch (choice) {
        case "red":
            div.innerHTML = "Красная ветка --- " + a11["red"] + "<br>";
            break;
        case "green":
            div.innerHTML = "Зеленая ветка --- " + a11["green"] + "<br>";
            break;
        case "blue":
            div.innerHTML = "Синяя ветка --- " + a11["blue"] + "<br>";
            break;
    }
};


// task 13 --------------------
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. 
// Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

document.querySelector(".u-13__button").onclick = function () {
    let div = document.querySelector(".out-13");
    let choice = document.querySelector(".u13-branch").value;

    switch (choice) {
        case "red":
            div.innerHTML = "Красная ветка --- " + a11["red"].slice().reverse() + "<br>";
            break;
        case "green":
            div.innerHTML = "Зеленая ветка --- " + a11["green"].slice().reverse() + "<br>";
            break;
        case "blue":
            div.innerHTML = "Синяя ветка --- " + a11["blue"].slice().reverse() + "<br>";
            break;
    }
};


// task 14 --------------------
// Добавьте к предыдущей задаче select.u14-find-station и кнопку.
// В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

document.querySelector(".u-14__button").onclick = function () {
    let div = document.querySelector(".out-14");
    let choice = document.querySelector(".u14-find-station").value;

    for (let key in a11) {
        if (a11[key].includes(choice)) {
            switch (key) {
                case 'green':
                    key = "зеленой";
                    break;
                case 'blue':
                    key = "синей";
                    break;
                case 'red':
                    key = "красной";
                    break;

            }
            div.innerHTML = "Станция '" + choice + "' расположена на '" + key + "' ветке";
        }
    }
};



// task 15 --------------------
// Добавьте к предыдущей задаче select.u14-find-station и кнопку.
// В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

document.querySelector(".u-15__button").onclick = function () {
    let div = document.querySelector(".out-15");
    let choice_one = document.querySelector(".u15-first-station").value;
    let choice_two = document.querySelector(".u15-second-station").value;

    for (let key in a11) {

        if (a11[key].includes(choice_one) && a11[key].includes(choice_two)) {

            let distance = a11[key].indexOf(choice_one) - a11[key].indexOf(choice_two);

            if (distance == 0) {
                div.innerHTML = "Вы выбрали одинаковые станции";
                break;
            }
            div.innerHTML = "Между '" + choice_one + "' и '" + choice_two + "' " + (Math.abs(distance) - 1) + " станция(ий)";
            break;

        } else {
            div.innerHTML = "Вы выбрали разные ветки";
        }
    }
};


// task 16 --------------------
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. 
// Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. 
// Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. 
// Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.


document.querySelector(".u-16__button").onclick = function () {

    let radio = document.querySelectorAll(".u16-radio");
    let select = document.querySelector(".u16-select");

    for (let i = 0; i < radio.length; i++) {

        radio[i].onchange = function () {
            select.innerHTML = '';
            for (let key in a11) {
                if (radio[i].value === key) {
                    for (let k = 0; k < a11[key].length; k++) {
                        let station = document.createElement('option');

                        station.innerHTML += a11[key][k];
                        select.appendChild(station);
                    }
                }
            }
        }
    }
}


// Task 17
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, 
// выведите его на страницу. Конечные - обозначать 0, перехода - 1.

// a17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

let a17 = {
    "red": [
        ['Академгородок', 0],
        ['Житомирская', 0],
        ['Святошин', 0],
        ['Нивки', 0],
        ['Брестская', 0],
        ['Шулявская', 0],
        ['Политехнический институт', 0],
        ['Вокзальная', 0],
        ['Университет', 0],
        ['Театральная', 1],
        ['Крещатик', 1],
        ['Арсенальная', 0],
        ['Днепр', 0],
        ['Гидропарк', 0],
        ['Левобережная', 0],
        ['Дарница', 0],
        ['Черниговская', 0],
        ['Лесная', 0]
    ],
    "blue": [
        ['Героев Днепра', 0],
        ['Минская', 0],
        ['Оболонь', 0],
        ['Почайна', 0],
        ['Тараса Шевченко', 0],
        ['Контрактовая площадь', 0],
        ['Почтовая площадь', 0],
        ['Майдан Незалежности', 1],
        ['Площадь Льва Толстого', 1],
        ['Олимпийская', 0],
        ['Дворец «Украина»', 0],
        ['Лыбедская', 0],
        ['Демиевская', 0],
        ['Голосеевская', 0],
        ['Васильковская', 0],
        ['Выставочный центр', 0],
        ['Ипподром', 0],
        ['Теремки', 0]
    ],
    "green": [
        ['Сырец', 0],
        ['Дорогожичи', 0],
        ['Лукьяновская', 0],
        ['Золотые ворота', 1],
        ['Дворец спорта', 1],
        ['Кловская', 0],
        ['Печерская', 0],
        ['Дружбы народов', 0],
        ['Выдубичи', 0],
        ['Славутич', 0],
        ['Осокорки', 0],
        ['Позняки', 0],
        ['Харьковская', 0],
        ['Вырлица', 0],
        ['Бориспольская', 0],
        ['Красный хутор', 0]
    ]
}

document.querySelector(".u-17__button").onclick = function () {

    let div = document.querySelector(".out-17");

    for (let key in a17) {
        div.innerHTML += key + " : " + a17[key].join(" , ") + " " + "<p></p>";
    }
}


// Task 18
// Выведите на страницу только станции с переходами из массива a17.

document.querySelector(".u-18__button").onclick = function () {

    let div = document.querySelector(".out-18");

    for (let key in a17) {
        for (let k = 0; k < a17[key].length; k++) {
            if (a17[key][k][1] == 1) {
                div.innerHTML += a17[key][k][0] + "<br>";
            }

        }
    }
}



// Task 19
// Создайте ассоциативный массив где ключами являются страны азии, 
// а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. 
// Выведите его на страницу.
let Asia_Countries = {
    'Armenia': {
        'capital': 'Erevan',
        'population': '~' + 2.973 + " million",
        'square': '29800 km<sup>2</sup>',
    },
    'Afganistan': {
        'capital': 'Kabul',
        'population': '~' + 35.53 + " million",
        'square': '652200 km<sup>2</sup>',
    },
    'India': {
        'capital': 'New Delhi',
        'population': '~' + 1.339 + " billion",
        'square': '3287000 km<sup>2</sup>',
    },
    'Pakistan': {
        'capital': 'Islamabad',
        'population': '~' + 197 + " million",
        'square': '804000 km<sup>2</sup>',
    },
    'Mongolia': {
        'capital': 'Ulan-Bator',
        'population': '~' + 3.076 + " million",
        'square': '652200 km<sup>2</sup>',
    },
}
document.querySelector(".u-19__button").onclick = function () {

    let div = document.querySelector(".out-19");



    for (let key in Asia_Countries) {
        div.innerHTML += '<br>' + key + ": <br>";

        for (let info in Asia_Countries[key]) {
            div.innerHTML += info + " : " + Asia_Countries[key][info] + "<br>";
        }
    }
}


// Task 20
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select,
//  а необходимая информация подтягивалась на страницу.

document.querySelector(".u-20__button").onclick = function () {

    let div = document.querySelector(".out-20");
    let select = document.querySelector(".u20__select");


    for (let key in Asia_Countries) {
        if (select.value == key) {
            div.innerHTML += '<br>' + key + ": <br>";

            for (let info in Asia_Countries[key]) {
                div.innerHTML += info + " : " + Asia_Countries[key][info] + "<br>";
            }
        }
    }
}