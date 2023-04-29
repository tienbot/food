'use strict'

// new ReqExp('pattern', 'flags')
// /pattern/f

function ex1(){
    const ans = prompt('Введите ваше имя')
    const reg = /n/i
    console.log(ans.search(reg)) //найти символ n без учета регистра
}
// ex1()

function ex2(){
    const ans = prompt('Введите ваше имя')
    const reg = /n/ig
    console.log(ans.match(reg)) // //найти все символы n без учета регистра
}
// ex2()

function ex3(){
    
    const pass = prompt('Password')
    console.log(pass.replace(/./g, '*')) //заменить все буквы на *
}
// ex3()

function ex4(){
    console.log('12-34-56'.replace(/-/g, ':')) //заменить все дефисы на :
}
// ex4()

function ex5(){
    const ans = prompt('Введите ваше имя')
    const reg = /n/ig
    console.log(reg.test(ans)) //Проверка, есть ли в строке символ n
}
// ex5()

function ex6(){
    const ans = prompt('Введите ваше число')
    const reg = /\d/g
    console.log(ans.match(reg)) //найти числа в строке
}
// ex6()

function ex7(){
    const str = 'My name is R2D2'
    console.log(str.match(/\w\d\w\d/i)) //найти букву-число-букву-число вне зависимости от регистра
}
ex7()

// i - независимость от регистра
// g - найти несколько вхождений
// m - многострочный режим

// \d - ищем цифры
// \w - ищем слова, буквы
// \s - ищем пробелы

// \D - не цифры
// \W - не буквы