'use strict'

function ex1(){
    console.log(1)

    setTimeout(() => {
        console.log('timeout_2000')
    }, 2000);

    setTimeout(() => {
        console.log('timeout_4000')
    }, 4000);

    console.log(2)
}
// ex1()

function ex2(){
    console.log(1)

    setTimeout(() => {
        console.log('timeout')
    }, 4000);

    setTimeout(() => {
        console.log('timeout_4000')
    }, 4000);

    console.log(2)
}
// ex2()

function ex3(){
    setTimeout(() => {
        console.log(1)
    }, 0)
    console.log(2)
}
ex3()