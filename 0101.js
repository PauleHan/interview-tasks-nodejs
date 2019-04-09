/*
★★★☆☆
Есть три коллбэчные функции результаты которых должны быть переданы в ToServer только после того как все они отработали.
Можно использовать Callback, Async/Await, Promise
*/

function A(cb) {
  setTimeout(() => {
    cb('A executed');
  }, 500)
}

function B(cb) {
  setTimeout(() => {
    cb('B executed');
  }, 800)
}

function C(cb) {
  setTimeout(() => {
    cb('C executed');
  }, 1000)
}

function ToServer(all_data) {
  console.log(all_data);
}

function RunAll(res, ...a) {
      
  let promiseChain = a.map(data => new Promise((resolve, reject) => data(res => resolve(res))));
  
  Promise.all(promiseChain)
    .then(b => res(b));
}

RunAll(res => ToServer(res), A, B, C);