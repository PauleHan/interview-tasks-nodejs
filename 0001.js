/*
★☆☆☆☆
Дано два массива. Написать функцию (Merge) которая вернет уникальные значения без повторений

let array_one = [1, 2, 3, 5, 5];
let array_two = [1, 2, 5, 6, 6];
console.log(Merge(array_one, array_two));

Результатом выполнения должно быть:
[ 3, 6 ]
*/

function Merge(array_one, array_two) {
    
    let one = Array.from(new Set(array_one));
    let two = Array.from(new Set(array_two));
    let arr = [...one, ...two];
    
    let counts = arr.reduce(function(counts, item) {
        counts[item] = (counts[item]||0)+1;
        return counts;
    }, {});
    
    return Object.keys(counts).reduce(function(arr, item) {
        if(counts[item] === 1) {
            arr.push(item);
        }
        return arr;
    }, []);
}

let array_one = [1, 2, 3, 5, 5];
let array_two = [1, 2, 5, 6, 6];
console.log(Merge(array_one, array_two));