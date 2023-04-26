'use strict'

// filter
function filter(){
    const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']
    const shortNames = names.filter(function(name){
        return name.length < 5;
    })
    console.log(shortNames); // [ 'Ivan', 'Ann' ]
}
filter()

// map
function map(){
    let answers = ['IVan', 'AnNa', 'Hello']
    answers = answers.map(item => item.toLowerCase())
    console.log(answers) // [ 'ivan', 'anna', 'hello' ]
}
map()

// every/some
function some(){
    const arr = [4, 'qwerty', 'sfsesfas']
    console.log(arr.some(item => typeof(item) === 'number')) // true
}
some()

function every(){
    const arr = [4, 'qwerty', 'sfsesfas']
    const arr2 = [4, 5, 6]
    console.log(arr.every(item => typeof(item) === 'number')) // false
    console.log(arr2.every(item => typeof(item) === 'number')) // true
}
every()

// reduce
function reduce(){
    const arrNumb = [4, 5, 1, 3, 2, 6]
    const res = arrNumb.reduce((sum, current) => sum + current);
    console.log(res) // 21
 
    const res2 = arrNumb.reduce((sum, current) => sum + current, 3);
    console.log(res2) // 24

    const arrStr = ['apple', 'paer', 'plum']
    const res3 = arrStr.reduce((sum, current) => `${sum}, ${current}`);
    console.log(res3) // apple, paer, plum
}
reduce()

// practic
function practic(){
    const obj = {
        ivan: 'presone',
        ann: 'presone',
        dog: 'animal',
        cat: 'animal',
    }

    const newArr = Object.entries(obj) // объект превращаем в массив массивов
    .filter(item => item[1] === 'presone') // оставляем в массиве только значения с presone
    .map(item => item[0]) // оставляем только имена
    console.log(newArr) // [ 'ivan', 'ann' ]
}
practic()