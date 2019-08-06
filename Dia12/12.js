const { ReplaySubject } = rxjs;

/* Objecto ReplaySubject:
Un ReplaySubject registra varios valores de la ejecución
Observable y los vuelve a mostrar a los nuevos suscriptores.

const behaviorSubject = new BehaviorSubject(0);
// En nuestro caso '0' es el valor actual al comienzo
*/

// Ejemplo 1: Usar un ReplaySubject para almacenar
// los últimos tres valores antes de la suscripción de
// un observer.
console.log('Ejemplo 1');
const subject = new ReplaySubject(3);

subject.subscribe({
  next: v => console.log('ObserverA', v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: v => console.log('ObserverB', v)
});

subject.next(5);

// Ejemplo 2: Usar un ReplaySubject para almacenar
// los últimos cien valores dentro de los últimos
// quinientos milisegundos antes de la suscripción de
// un observer.
console.log('Ejemplo 2');
const subject2 = new ReplaySubject(100, 500); // 500 windows time

subject2.subscribe({
  next: v => console.log('ObserverA ', v)
});

let i = 0;
const interval = setInterval( () => subject2.next(i++), 200);

setTimeout(() => {
  console.log('Toma el 4, pero antes el 3 y antes el 2, por la definición del ReplaySubject')
  subject2.subscribe({
    next: v => console.log('ObserverB ', v)
  });
  console.log('Luego siguen a la par')

  setTimeout(() => {
    clearInterval(interval)
  }, 1000);
}, 1000);
