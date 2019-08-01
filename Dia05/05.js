const { Observable } = rxjs;

// Ejemplo 1: podemos completar un observable
// ejecutando complete
const observable = Observable.create( observer => {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    // Este nuevo valor nunca se aplica
    observer.next('Hello');
  } catch (err) {
    observer.error(err)
  }
})

console.log('Soy un observable')
observable.subscribe(x => console.log(x))

setTimeout(() => {
  console.log('Y yo otro y somos independientes')
  observable.subscribe(x => console.log(x))  
  console.log('A pesar que venimos del mismo lugar');
  console.log('Esperamos');
}, 1500);

// Ejemplo 2: podemos dejar de suscribirnos a
// un observable
setTimeout(() => {
  console.log('Ejecutamos el Ejemplo 2')
  const observable2 = Observable.create( observer => {
    const id = setInterval(() => {
      console.log('Ejecuto')
    }, 1000);
    return function unsubscribe() {
      console.log('Y termino la suscripcion')
      clearInterval(id);
    }
  })

  subscription = observable2.subscribe(x => console.log(x));

}, 6000);

setTimeout(() => {
  subscription.unsubscribe();
}, 10000);
