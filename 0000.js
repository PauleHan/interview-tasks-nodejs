/*
★★☆☆☆
Написать функцию (Replacer) подстановки переменных в текст по шаблону.

console.log(Replacer("Вашим запросом занимается %1 номер %2", {'%1': 'Юзер', '%2': '1234'}));
console.log(Replacer("Вашим запросом занимается %1 номер %2", ['Юзер', '1234']));
Результатом обеих вызовов должен стать вывод:
"Вашим запросом занимается Юзер номер 1234"

P.S.[Реализация второго варианта необязательна]
*/

function Replacer(text, param) {
        
    let [a, b] = Object.values(param);
    return text.replace(/%1/, a).replace(/%2/, b);
}

console.log(Replacer("Вашим запросом занимается %1 номер %2", {'%1': 'Юзер', '%2': '1234'}));
console.log(Replacer("Вашим запросом занимается %1 номер %2", ['Юзер', '1234']));