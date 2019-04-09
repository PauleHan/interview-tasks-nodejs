/*
★★★★☆
Дана функция Get которая, условно, достает из базы данные с задержкой.
Написать функцию (Recursion) которая будет использовать оную рекурсией, чтобы можно было получать массив данных

Recursion([123, 321, 333, 111], res => console.log(res));
Результатом выполнения должно быть:
[ { id: 123 }, { id: 321 }, { id: 333 }, { id: 111 } ]
*/

function Get(id, cb) {
  setTimeout(() => {
    cb({id: id});
  }, 1000);
}

function Recursion(arr, res) {
  
  let promiseChain = arr.map(id => new Promise((resolve, reject) => Get(id, data => resolve(data))));
  
  Promise.all(promiseChain)
    .then(b => res(b));
}

Recursion([123, 321, 333, 111], res => console.log(res));