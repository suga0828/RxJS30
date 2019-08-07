const { fromEvent } = rxjs;
const { scan, throttleTime, map } = rxjs.operators;

// EJEMPLO 1
// Con javascript: Crear contador
let count = 0;
// y, obtener el botton
const buttonJS = document.getElementById('JSButton');
buttonJS.addEventListener('click', ()=> {
  console.log(`JS Click ${++count} times`);
});

// Con RxJS: obtener el boton
const buttonRxJS = document.getElementById('RxJSButton');
fromEvent(buttonRxJS, 'click')
  // funcion pipe que agrupa operadores
  .pipe(
    // funcion pura (sumar 1 al contador)
    scan(count => count + 1, -1)
  )
  // nos suscribimos (recibimos el contador e imprimimos)
  .subscribe( count => {
    console.log(`RxJS Click ${++count} times`)
  });

// EJEMPLO 2
// Con javascript: Crear contador, rango para limitar click
let count2 = 0;
const rate2 = 3000;
let lastClick2 = Date.now() - rate2;
// y, obtener el botton
const buttonJS2 = document.getElementById('JSButton2');
buttonJS2.addEventListener('click', ()=> {
  if (Date.now() - lastClick2 >= rate2) {
    console.log(`JS Click ${++count2} times`);
    lastClick2 = Date.now();
  }
});

// Con RxJS: igual a nuestra parte anterior pero agregando throttleTime
const buttonRxJS2 = document.getElementById('RxJSButton2');
fromEvent(buttonRxJS2, 'click')
  // funcion pipe que agrupa operadores
  .pipe(
    // funcion para limitar el evento
    throttleTime(3000),
    // funcion pura (sumar 1 al contador)
    scan(count => count + 1, -1)
  )
  // nos suscribimos (recibimos el contador e imprimimos)
  .subscribe( count => {
    console.log(`RxJS Click ${++count} times`)
  });

// EJEMPLO 3
// Con javascript: Crear contador, rango para limitar click
let count3 = 0;
const rate3 = 1000;
let lastClick3 = Date.now() - rate3;
// y, obtener el botton
const buttonJS3 = document.getElementById('JSButton3');
buttonJS3.addEventListener('click', event => {
  if (Date.now() - lastClick3 >= rate3) {
    count3 += event.clientX;
    console.log(count3)
    lastClick3 = Date.now();
  }
});

// Con RxJS: igual a nuestra parte anterior
const buttonRxJS3 = document.getElementById('RxJSButton3');
fromEvent(buttonRxJS3, 'click')
  // funcion pipe que agrupa operadores
  .pipe(
    // funcion para limitar el evento
    throttleTime(1000),
    map(event => event.clientX),
    // funcion pura (sumar 1 al contador)
    scan( (count, clientX) => count + clientX, -1)
  )
  // nos suscribimos (recibimos el contador e imprimimos)
  .subscribe(count => {
    console.log(count)
  });