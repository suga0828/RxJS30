const { Subject, Observable, from } = rxjs;

/* Objecto Subject:
Un Subject de RxJS es un tipo especial de Observable que
permite que los valores sean “multicasted” a muchos
observadores. Mientras que los Observables simples son
unicast (cada Subject es una ejecución independiente del
  Observable), los Subject son multicast.

const subject = new Subject();

subject.subscribe({
  next: ( v => console.log('Observer ', v ) )
});

subject.next(1);
*/

// Ejemplo 1: dos Observers adjuntos a un Subject
console.log('Ejemplo 1: dos Observers adjuntos a un Subject')
const subject = new Subject();
subject.subscribe({
  next: ( v => console.log('ObserverA ', v ) )
});
subject.subscribe({
  next: ( v => console.log('ObserverB ', v ) )
});
subject.next(1);
subject.next(2);

// Ejemplo 2: Multicasting con Subject: Subject como Observer
console.log('')
console.log('--------------')
console.log('Ejemplo 2: Multicasting con Subject: Subject como Observer')
const observable = from([1, 2, 3]);
observable.subscribe(subject)