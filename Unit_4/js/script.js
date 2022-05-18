// Task 1
document.querySelector('#button1').onclick = () => {
    alert("Task 1");
}

// Task 2
document.querySelector('#button2').onclick = () => {
    alert("Task 2");
}

// Task 3
document.querySelector('#task3').onclick = () => {
    alert("Task 3");
}

// Task 4
document.querySelector('#button4').onclick = () => {
    let checkbox = document.querySelector('#input4');
    if (checkbox.checked) {
        console.log("true, checkbox выбран");
    } else {
        console.log("false, checkbox не выбран");
    }
}

// Task 5
document.querySelector('#button5').onclick = () => {
    let checkbox = document.querySelector('#input5');
    if (checkbox.checked) {
        console.log("Checkbox value is '" + checkbox.value + "'");
    } else {
        console.log("false, checkbox is not selected");
    }
}
// Task 6
document.querySelector('#button6').onclick = () => {
    let input = document.querySelector('#input6');
    alert(input.value);
}

// Task 7
document.querySelector('#button7').onclick = () => {
    let input = document.querySelector('#input7');
    if (input.value.length < 6) {
        console.log("Длинна пароля меньше 6-ти символов");
    } else {
        alert(input.value);
    }
}

// Task 8
document.querySelector('#button8').onclick = () => {
    let div = document.querySelector('#div_task8');
    div.innerHTML = '<input type="text" id="js_input_8"></input>';
    div.innerHTML += '<button id="js_btn_8">Click me</button>';

    document.querySelector('#js_btn_8').onclick = () => {
        let input = document.querySelector('#js_input_8');
        alert(input.value);
    }
}

// Task 9
document.querySelector("#button9").onclick = () => {
    let input = document.querySelector("#input9");
    let reset = document.querySelector("#reset9");
    if (input.checked) {
        alert("Чекбокс выбран");
    } else {
        alert("Чекбокс не выбран");
    }
    reset.onclick = () => {
        document.querySelector("#input9").checked = false;
    }
}

// Task 10
let colorAll = document.querySelector("#button10_all").onclick = () => {
    let input = document.querySelector("#input10_all");
    let div = document.querySelector("#div10");
    div.style.background = input.value;
    div.style.color = input.value;
}
let colorText = document.querySelector("#button10_text").onclick = () => {
    let input = document.querySelector("#input10_text");
    let div = document.querySelector("#div10");
    div.style.color = input.value;
}
let colorBackground = document.querySelector("#button10_background").onclick = () => {
    let input = document.querySelector("#input10_background");
    let div = document.querySelector("#div10");
    div.style.background = input.value;
}

// Task 11
document.querySelector("#button11").onclick = () => {
    let input1 = document.querySelector("#input11_1");
    let input2 = document.querySelector("#input11_2");
    input2.value = input1.value;
}

// Task 12
document.querySelector("#button12").onclick = () => {
    let input = document.querySelector("#input12");
    if (input.value == "") {
        alert("Выберите дату"); // value возвращает или дату или пустую строку, если не введена 
    } else {
        alert(input.value);
    }
}

// Task 13

showRange = () => {
    let input = document.querySelector("#input13");
    let rangeValue = document.querySelector("#range_value13");
    rangeValue.innerHTML = input.value;
    document.querySelector("#button13").onclick = () => {
        alert(input.value);
    }
}

// Task 14
document.querySelector("#button14").onclick = () => {
    let input = document.querySelector("#input14");
    let divOut = document.querySelector("#result14");

    divOut.innerHTML = input.value
}

// Task 15
document.querySelector("#button15").onclick = () => {
    let InInput = document.querySelector("#InInput_15");
    let result = document.querySelector("#text_input15");

    result.value = InInput.value;
}

// Task 16
document.querySelector("#button16").onclick = () => {
    let select = document.querySelector("#task16");
    let result = document.querySelector("#result16");

    result.innerHTML = "Ваш выбор это - " + select.value;
}

// Task 18
document.querySelector("#task17").onchange = () => {
    let div = document.querySelector("#result17");
    div.innerHTML = document.querySelector("#task17").value;
}

// Task 19
document.querySelector("#button19").onclick = (event) => {
    event.preventDefault();
    let inputText = document.querySelector("#input_text19");
    let inputPass = document.querySelector("#input_pass19");

    console.log("************ Задание 19 ************");
    console.log("Значение, что вы ввели в textInput " + inputText.value);
    console.log("Значение, что вы ввели в input password " + inputPass.value);
}

// Task 20
document.querySelector("#button20").onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector("#form20");

    console.log("************ Задание 20 ************");
    console.log("Значение, что вы ввели в textInput " + form.elements.textInput.value);
    console.log("Значение, что вы ввели в input password " + form.elements.password.value);
}