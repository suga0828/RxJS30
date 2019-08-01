const { Observable } = rxjs;

/* Objecto Observer:
Los Observers son sólo objetos con (uno, dos o) 
tres callbacks: uno para cada tipo de
notificación que un Observable puede entregar

const observer = {
  x => console.log(x), // next()
  err => console.log(err), // error()
  () => console.log('complete') // complete()
} */

// Con los tres callbacks
const observer1 = {
  next: x => console.log('El valor de x', x),
  error: err => console.log('el valor de err', err),
  complete: () => console.log('completado')
}
const observable1 = observable.create(observer1);

// Sin el complete()
const observer2 = {
  next: x => console.log('El valor de x', x),
  error: err => console.log('el valor de err', err),
  complete: () => console.log('completado')
}
const observable2 = observable.create(observer2);

// Sólo con el next(), directamente
const observable3 = observable.create(x => console.log('El valor de x', x));
