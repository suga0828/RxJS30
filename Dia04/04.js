const { Observable } = rxjs;

// Ejemplo 1: Los observables pueden ejecutar funciones
// sincrónicas y asincrónicas

// Con Javscript
console.log('Ejemplo 1: Los observables pueden ejecutar funciones sincrónicas y asincrónicas');
console.log('Con Javascript');
const fooJS = () => {
  console.log('Hello');
  return 42
}

const x = fooJS.call();
console.log(x);

const y = fooJS.call();
console.log(y);

// Salto
console.log('');

// Con RxJS
console.log('Con RxJS');
const fooRxJS = Observable.create( observer => {
  console.log('Hello');
  observer.next(42);
})

fooRxJS.subscribe(x => console.log(x))

fooRxJS.subscribe(y => console.log(y))

console.log('--------------------');
console.log('');
// Ejemplo 2
console.log('Ejemplo 2');
console.log('Con Javascript');

console.log('antes');
console.log(fooJS.call());
console.log('despues');

// Salto
console.log('');

// Con RxJS
console.log('antes');
fooRxJS.subscribe(x => console.log(x))
console.log('despues');

console.log('--------------------');
console.log('');
// Ejemplo 3: Los observables pueden devolver
// uno o más valores, las funciones no.
console.log('Ejemplo 3: Los observables pueden devolver uno o más valores, las funciones no.');
console.log('Con Javascript');
const fooJS3 = () => {
  console.log('Hello');
  return 42;
  return 100;
}

console.log('retorna un solo valor');
console.log(fooJS3.call());
console.log('y sólo uno');

// Salto
console.log('');

// Con RxJS
console.log('Con RxJS');
const fooRxJS3 = Observable.create( observer => {
  console.log('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
})

console.log('retorna un valor');
fooRxJS3.subscribe(x => console.log(x))
console.log('despues retorna otros');

