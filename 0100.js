/*
★★★★☆
Песочница.
Поднять веб-сервер.
Реализовать алгоритм базовой авторизации на страничке (логин, пароль), которая возвращается на одном из эндпоинтов.
Можно использовать любые фреймворки и места хранения данных.
*/

/*
Result here: https://task-3-paulehan.c9users.io/
*/

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

const port          = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
    
    let signInPage = '<!doctype html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
    '<title>Task for SmartLine</title>' +
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">' +
    '<link rel="stylesheet" href="https://getbootstrap.com/docs/4.0/examples/sign-in/signin.css">' +
    '</head>' +
    '<body class="text-center">' +
    '<form class="form-signin">' +
    '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDM3LjAyLDMzMC45OGMtMjcuODgzLTI3Ljg4Mi02MS4wNzEtNDguNTIzLTk3LjI4MS02MS4wMThDMzc4LjUyMSwyNDMuMjUxLDQwNCwxOTguNTQ4LDQwNCwxNDggICAgQzQwNCw2Ni4zOTMsMzM3LjYwNywwLDI1NiwwUzEwOCw2Ni4zOTMsMTA4LDE0OGMwLDUwLjU0OCwyNS40NzksOTUuMjUxLDY0LjI2MiwxMjEuOTYyICAgIGMtMzYuMjEsMTIuNDk1LTY5LjM5OCwzMy4xMzYtOTcuMjgxLDYxLjAxOEMyNi42MjksMzc5LjMzMywwLDQ0My42MiwwLDUxMmg0MGMwLTExOS4xMDMsOTYuODk3LTIxNiwyMTYtMjE2czIxNiw5Ni44OTcsMjE2LDIxNiAgICBoNDBDNTEyLDQ0My42Miw0ODUuMzcxLDM3OS4zMzMsNDM3LjAyLDMzMC45OHogTTI1NiwyNTZjLTU5LjU1MSwwLTEwOC00OC40NDgtMTA4LTEwOFMxOTYuNDQ5LDQwLDI1Niw0MCAgICBjNTkuNTUxLDAsMTA4LDQ4LjQ0OCwxMDgsMTA4UzMxNS41NTEsMjU2LDI1NiwyNTZ6IiBmaWxsPSIjMDA2OWQ5Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />' +
    '<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>' +
    '<label for="inputLogin" class="sr-only">Login</label>' +
    '<input type="text" id="inputLogin" class="form-control" placeholder="Login" required autofocus>' +
    '<label for="inputPassword" class="sr-only">Password</label>' +
    '<input type="password" id="inputPassword" class="form-control" placeholder="Password" required>' +
    '<button class="btn btn-lg btn-primary btn-block" type="submit" onclick="sendForm()">Sign in</button>' +
    '</form>' +
    '</body>' +
    '</html>' +
    '<script type="text/javascript">' +
    'function sendForm() {' +
        'let param = {email: document.getElementById("inputLogin").value, pass: document.getElementById("inputPassword").value};' +
        'let xmlhttp = new XMLHttpRequest();' +
        'xmlhttp.open("POST", "/auth", true);' +
        'xmlhttp.setRequestHeader("Content-Type", "application/json");' +
        'xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");' +
        'xmlhttp.send(JSON.stringify(param));' +
    '}' +
    '</script>';
        
    response.send(signInPage);
});

app.post("/auth", (request, response) => {
    
    if (!request.xhr) throw new Error('Is it not AJAX request');
    
    console.log(request.body);
    
    response.json({'Status': 'Ok'});
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});