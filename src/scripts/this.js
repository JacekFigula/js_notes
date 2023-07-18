// const user = {
//     name: 'Jarosław',
//     score: 0,
//     updateScore(newScore) {
//         user.score += newScore
//     }
// }
//
// // const user1 ...
// // Problem jak stworzyć wielu użytkowników, nie duplikując kodu (factory design pattern)
// // DRY - don't repeat yourself
// function user1(name) {
//     return {
//         // jeśli key: value są takie same to można użyć składni short object notation name: name, => name,
//         name,
//         score: 0,
//         updateScore(newScore) {
//             this.score += newScore
//         }
//     }
// }
//
// const u1 = user1('Lech');
// const u2 = user1('Mateusz');
//
// //this wskazuje na obiekt przed kropką, tzn że obiekt jest kontekstem metody(funkcja wywołana na rzecz obiektu lub klasy)
// u1.updateScore(42);
//
// // Problem 2, funkcja updateScore, dla każdego użytkownik jest taka sama, nie m sensu jej deklarować
// // dla każdego użytkownika osobno
//
// // funkcja konstruktor - zwyczajowo z dużej litery  - funkcja która tworzy obiekt , nie odpala się sam i do wywołania trzeba użyć słowa
// // kluczowego new 'function name'  , wtedy tworzy thisa , który jest odwołany do obiektu funkcji // nie tworzymy returna
// // do thisa możemy dodawać tylko key:values. Funkcjonalności dodajemy przez .prototype żeby nie kopiwać funkcjonalności do każdego obiektu stworzonego przez (this)
// function User(name) {
//     this.name = name;
//     this.score = 0;
// }
//
// //prototype chaining - dowiązowanie do funkcji z this co chcemy dzięki prototype
// User.prototype.updateScore = function (newScore) {
//     this.score += newScore;
// }
//
// //Cały JS jest zbudowany jak funcja konstruktor i prototype chaining
//
// const u3 = new User('Antoni');
// const u4 = new User('Jacek');
//
// String.prototype.capitalize = function () {
//     return this[0].toUpperCase() + this.slice(1);
// }
//
// // właśnie nadpisaliśmy prawdziwy .map nową funkcją
// // dupa debugging - pisze w wielu miejsach console.log('dupa') i patrze gdzie sie pojawi
// Array.prototype.myMap = function (cb) {
//     const temp = [];
//
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }
//
// const arr = [1, 2, 3, 4]
// const result = arr.myMap((item, id, coll) => item * id);
//
// Array.prototype.myFiler = function (cb) {
//     const temp = [];
//
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }
//
// const r = [1, 2, 3].myFilter((element, idx, arr) => element > 2) //[3]
//
// //acc - accumulator, ce - current element, idx, arr -> agregacja tablicy,
// // reduce => cb, ?initialValue
// Array.prototype.myReduce = function (fn, initialValue = undefined) {
//
//     let accumulator = initialValue !== undefined ? initialValue : this[0];
//
//     for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
//         accumulator = fn(accumulator, this[i], i, this);
//
//     }
//     return accumulator;
// }

// const arr = [1,2,3];
// const result = arr.myReduce((acc, ce, is, coll) => acc*ce);

// syntactic sugar = lukier składniowy
// klasa (robi to co konstruktor i prototype)

class User1 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(newScore) {
        this.score += newScore;
    }
}

// const u5 = new User1('Zbigniew');

// function magic (data){
//     this.data = data;
//     console.log(this)
// }
//
// const context = {
//     a: 1, b:2
// }
//
// magic.call(context, "ala ma kota");
// magic.apply(context, ["ala ma kota i ejc"]);
// const magic2 = magic.bind(context);
// magic2()

const h1Ref = document.querySelector('#title')

class Magic {
    constructor() {
        this.counter = 0;
    }

    click() {
        /// this - object klasy Magic


        /// this - object klasy Magic
        // h1Ref.addEventListener('click', (function(){
        //     this.counter++; // wskazuje na obiekt h1ref -> dot notation
        //     console.log(this.counter);
        // }).bind(this))
        // ///this - object klasy Magic

        // // janusze programowania
        // const that = this;
        // h1Ref.addEventListener('click', (function () {
        //     this.counter++; // wskazuje na obiekt h1ref -> dot notation
        //     console.log(this.counter);
        // }).bind(this))

        //arrow function nie ma this w ogóle, więc this od h1Ref szuka najbliższego kontekstu thisa w otoczeniu i znajduje go w click() który odwołuje się do obiektu klasy Magic i wtedy działa
        h1Ref.addEventListener('click', () => {
            this.counter++; // wskazuje na obiekt h1ref -> dot notation
            console.log(this.counter);
        })
    }
}

const m = new Magic();
m.click()