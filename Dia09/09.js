const { from, Subject } = rxjs;
const { pipe, multicast } = rxjs.operators;

/* Objecto Multicasted Observable:
Un Multicasted Observable es un operador que devuelve un
ConnectableObservable, que es un Observable con el método
connect(). Este Multicasted Observable recibe un Subject que
a su vez se suscribe a la fuente observable lo que nos
permite compartir el observable entre observers. El método
connect() es importante para determinar exactamente cuándo
se iniciará la ejecución observable compartida.

const multicasted = Observable.create({
  x => console.log('Observer', v )
}).pipe(
  multicast( () => new Subject)
);

multicasted.subscribe( v => console.log('Observer A', v ));

multicasted.subscribe( v => console.log('Observer B', v ));

multicasted.connect();
*/

// Ejemplo 1: dos Observers adjuntos a un Subject
const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(
  multicast( () => subject)
);

multicasted.subscribe({
  next: (v) => console.log('Observer A', v)
})

multicasted.subscribe({
  next: (v) => console.log('Observer b', v)
})

multicasted.connect();
