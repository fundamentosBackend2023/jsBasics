// Impresión y el objeto global //
console.log('Hola mundo');
console.group('My little group');
console.log('print 1');
console.log('print 2');
console.log('print 3');
console.groupEnd();
console.log('print 4');

console.log(globalThis);

// Variables //
var myVar = 15;
console.log(myVar);
myVar = 'Hola'
console.log(myVar);
let myLet = 30;
console.log(myLet);
let myLet1 = myLet2 = 0;
let myLet3, myLet4 = 0;
let myLet5 = 5, myLet6 = 6;
console.log(myLet1, myLet2);
console.log(myLet3, myLet4);
console.log(myLet5, myLet6);

console.log(typeof myLet, typeof myVar);
console.log('MyVar ' + myVar);
console.log(`MyVar ${myVar}`);

const myConst = 2;

let myString = 'This is a string :)';
console.log(myString.toUpperCase());
console.log(myString.charAt(4));
console.log(myString.slice(3, 8));
console.log(myString.replace('i', 'x'));
console.log(myString.replace(/i/g, 'x'));
console.log(myString.charCodeAt(2));
console.log(myString.split(''));
console.log(myString.split('').join(''));
console.log(myString.indexOf('i'));

console.log(`This is my string on capital letters ${myString.toUpperCase()}`);

let myFloat = 5.631241241;
console.log(typeof myFloat);
let result = myFloat + Math.PI;
console.log(result);
console.log(Math.round(result));
console.log(Math.ceil(result))
console.log(Math.floor(result))
console.log(result.toFixed(4))

console.log(4 + '7');

let myFloat2 = '3.12546';
console.log(typeof myFloat2);
myFloat2 = parseFloat(myFloat2);
console.log(typeof myFloat2);
console.log(Math.abs(myFloat2 ** myFloat));
console.log(Number('Hola'))

let myBool = 1;
console.log(Boolean(''))

// Arrays //
let myArray = [1, 'Hola', [1, 2], {}];
console.log(myArray);
console.log(myArray.length)
console.log(myArray[2])
const returnPush = myArray.push(12);
console.log(myArray);
console.log(returnPush);
myArray.unshift(0)
console.log(myArray);

let a = myArray.shift();
console.log(myArray);
let b = myArray.pop();
console.log(myArray);
console.log(b);

// let mySecondArray = [...myArray];
// let mySecondArray = Array.from(myArray);
let mySecondArray = myArray.slice();
mySecondArray.push(10000);
console.log(myArray);
console.log(mySecondArray);

console.log(mySecondArray.includes([1, 2]));
// delete mySecondArray[4];
console.log(mySecondArray);
const returning = mySecondArray.splice(1, 3, 'Adios');
console.log(mySecondArray);
console.log(returning)

// Objetos //
const myObj = {
    attr1: 'Hola',
    context: 'Mundo',
    2: 10,
    3: function(value='red'){console.log('hey! I am a function', value)}
}
console.log(myObj.attr1);
console.log(myObj['context']);
console.log(myObj[3]('blue'));
myObj[3]();

myObj.newAttr = 50;
console.log(myObj);
let nameA = 'dynamicAttr';
myObj[nameA] ='any value';
console.log(myObj);

const { context: u1, dynamicAttr: u2 } = myObj;
console.log(u1, u2);

myObj.co = { // computed objects
    otherAttr: 10,
    secondAttr: myObj.dynamicAttr
};

console.log(myObj.co.otherAttr);

delete myObj.context;
console.log(myObj);
const myNewObj = {...myObj}
console.log(myNewObj);

console.log('attr1' in myObj);

// for
const arr = [ 'red', 'blue', 'deep blue', 'pink' ];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let element in arr){
    console.log(element)
}

for(let element of Object.entries(myObj)){
    console.log(element)
}

// functions
function x(param1='green'){
    return param1
}

console.log(x())

const myFunction = function(param2){
    console.log({a: param2, b:param2 * 4})
    //return {a: param2, b:param2 * 4};
}
console.log(myFunction('hola'));

function sum(param1, param2, callback){
    const result = param1 + param2;
    callback(result);
    return result;
}


console.log(sum(2, 3, myFunction));
console.log(sum(2, 3, function(param){ console.log(param +'!!!!!') }));
console.log(sum(2, 3, x => console.log('the result is', x)));

const myArrow = (a) => {
    console.log(a);
    return a
} 

const myArrow2 = (a, b) => a;
let conditional;
console.log(conditional);
if(!conditional){
    console.log('I\'m in');
}

let outsider = 'Hello from global scope';
if(true){
    console.log(outsider);
    outsider = 'outsider modified';
    let insider = 'Hello from block scope';
    console.log(insider);
}
console.log(outsider);
insider = 'using var'; // Declaración
console.log(insider);

function mainFunction(dish1, dish2){
    console.log(dish1);
    console.log(dish2);
    return (dish3) => console.log('My favorite dishes are',dish1,','+dish2,dish3);
}

const closure = mainFunction('aguachile', 'frijoles');
closure('enchiladas');

(() => { console.log('I am a IIFE') })();

class Person {
    static species = 'human'; // Atributo de clase
    #hair = true;
    constructor(name, age){
        this.name = name; //Propiedades Atributos de instancia
        this.age = age;
    }

    static breathe(){ 
        console.log('I\´m breathing...');
    }

    greet(){
        console.log('Hi!');
        this.#introduceThemselves();
    }

    #introduceThemselves(nationality){ // Método de instancia
        console.log('My name is',this.name,'and I am',this.#hair);
    }

    get hair(){
        return this.#hair;
    }

    set hair(param){
        this.#hair = param;
    }

}

const myPerson = new Person('Raul', 26);
console.log(myPerson.name);
Person.breathe();
//myPerson.sayHi('Mexican');
console.log(Person.species);
myPerson.greet();
// console.log(myPerson.hair)
console.log(myPerson.hair)
myPerson.hair = 'another value';
console.log(myPerson.hair);


class Mexican extends Person {
    constructor(name, age, city){
        super(name, age);
        this.city = city;
    }

    rideHorse(){
        console.log('Yeeeeeeha');
    }

}

const myMexican = new Mexican('Francisco',30,'CDMX');
console.log(myMexican.city);
myMexican.rideHorse();
myMexican.greet();

// Async
const db = [ 'Muse', 'The Killers', 'Coldplay', 'The Strokes' ];

function retrieveData(toExecute, lastLine){
    setTimeout(() =>{
        const data=db; // Acción asíncrona
        console.log('Here')
        //! return data; 
        toExecute(data, lastLine); // Lo que haces cuando acabe la acción asincrona
    }, 2000);
}


const printData = (info, cb) => { 
    console.log(info); 
    cb();
}
const lastLine = () => { console.log('Last line') };
//retrieveData(printData, lastLine);
console.log('This code should be executed after async function');

const videogames = ['Halo', 'The Last of Us II', 'Gears of War', 'CoD'];
// const videogames = undefined;

function retrieveVideogames(){
    return new Promise((resolve, reject) => {
        const myVideogames = videogames; // Acción async fake
        if(!myVideogames){
            reject('There was some error :(');
        }else{
            resolve(myVideogames);
        }
    });
}

// retrieveVideogames()
//     .then( (response) => { 
//         console.log(response);
//         return 'hello';
//     })
//     .then( (param) => console.log('Last line',param) )
//     .catch( (err) => { console.log(err) } );

const books = ['El extranjero', 'El coronel no tiene quien le escriba', 
                    'Narraciones extraordinarias'];

function retrieveBooks(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const data = undefined;
            data ? resolve(data) : reject(':(');
        }, 2000);
    });
}

async function f(){
    try{
        const data = await retrieveBooks();
        console.log(data);
    }catch(err){
        console.log(err);
    }
};
f();