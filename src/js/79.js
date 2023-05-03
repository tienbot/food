'use strict'

function ex1(){
    function* generator(){
        yield 'S'
        yield 'c'
        yield 'r'
        yield 'i'
        yield 'p'
        yield 't'
    }
    
    const str = generator()
    
    console.log(str.next()) //{ value: 'S', done: false }
    console.log(str.next()) //{ value: 'c', done: false }
    console.log(str.next()) //{ value: 'r', done: false }
    console.log(str.next()) //{ value: 'i', done: false }
    console.log(str.next()) //{ value: 'p', done: false }
    console.log(str.next()) //{ value: 't', done: false }
    console.log(str.next()) //{ value: undefined, done: true }
}
// ex1()

function ex2(){
    function* generator(){
        yield 'S'
        yield 'c'
        yield 'r'
        yield 'i'
        yield 'p'
        yield 't'
    }
    
    const str = generator()
    console.log(str.next().value) 
}
// ex2()

function ex3(){
    function* count(n){
        for(let i = 0; i < n; i++){
            yield i;
        }
    }

    const counter = count(7)

    console.log(counter.next().value) // 0
    console.log(counter.next().value) // 1
    console.log(counter.next().value) // 2
}
// ex3()

function ex4(){
    function* count(n){
        for(let i = 0; i < n; i++){
            yield i;
        }
    }

    for (let k of count(7)){
        console.log(k) //1 2 3 4 5 6
    }
}
ex4()

