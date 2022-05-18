// https://api.telegram.org/bot905215921:AAFYBeh7KXqog4EE3yXdJCefK53y3vrrlNA/getupdates

//https: //api.telegram.org/bot905215921:AAFYBeh7KXqog4EE3yXdJCefK53y3vrrlNA/sendMessage?chat_id=197988865&text=приветики_видимо_работает\



    document.querySelector('.btn-press').onclick = function () {
        let message = document.querySelector('.in-message').value;
        const token = '905215921:AAFYBeh7KXqog4EE3yXdJCefK53y3vrrlNA';
        const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=197988865&text=';
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url+message, true);
        xhttp.send();
    }