const { Subject, interval } = rxjs;
const { pipe, multicast, refCount } = rxjs.operators;

/* Objecto Count:
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

// Ejemplo 1: Usar un ConnectableObservable para ejecutar
// el multicast explícitamente: connect().
console.log('Ejemplo 1');
const source = interval(500);
const subject = new Subject();
const multicasted = source.pipe(
  multicast( () => subject)
);

let subscription1 = multicasted.subscribe({
  next: (v) => console.log('Observer A', v)
});

var subscription2;

let subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next: (v) => console.log('Observer B', v)
  })
}, 600);

setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe();
}, 2000);

setTimeout(() => {
  // Ejemplo 2: Usar un ConnectableObservable para ejecutar
  // el multicast implícitamente: refCount(). Este método
  // vuelve el ConnectableObservable un Observable ordinario
  // conectando observers si son mayor a uno y desconectando
  // si es cero.
  console.log('')
  console.log('-----------------')
  console.log('Ejemplo 2')
  const refCounted = source.pipe(
    multicast( () => subject),
    refCount()
  );
  console.log('ObserverC suscribed')
  subscription1 = refCounted.subscribe({
    next: v => console.log('ObserverC:', v)
  })
  
  setTimeout(() => {
    console.log('ObserverD described')
    subscription2 = refCounted.subscribe({
      next: v => console.log('ObserverD:', v)
    })
  }, 600);

  setTimeout(() => {
    console.log('ObserverC unsuscribed')
    subscription1.unsubscribe();
  }, 1200);

  setTimeout(() => {
    console.log('ObserverD unsuscribed')
    subscription2.unsubscribe();
  }, 2000);
}, 3000);
