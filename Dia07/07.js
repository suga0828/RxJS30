const { Observable, interval } = rxjs;

/* Objecto Subscription:
Un Suscription es un objeto que representa un recurso
desechable, generalmente la ejecución de un Observable.
Este tiene un método importante, unsubscribe, que no toma
ningún argumento y acaba de disponer del recurso en poder
de la suscripción.

const subscription = observable.subscribe(x => console.log(x));
subscription.unsuscribe();
*/

// Ejemplo 1: Utilizar objecto Subscription
console.log('Ejemplo 1:')
const observable = interval(500);
console.log(`Comenzamos la suscripción de interval(500)`)
const subscription = observable.subscribe(x => console.log(x));

setTimeout(() => {
  console.log(`Luego de tres segundos, a través de la variable 'subscription' cancelamos la suscripción`);
  subscription.unsubscribe();
}, 3000);

// Las suscripciones también pueden ser agrupadas
setTimeout(() => {
  console.log('')
  console.log('--------------')
  console.log('Ejemplo 2:')
  // Ejemplo 2: Agrupar objectos Subscription
  const observable1 = interval(400);
  const observable2 = interval(300);
  
  console.log(`Comenzamos la suscripción de ambos observables: primero:interval(400) y segundo:interval(300)`)
  const subscription1 = observable1.subscribe(x => console.log('primero: ', x));
  const childSubscription = observable2.subscribe(x => console.log('segundo: ', x));
  
  subscription1.add(childSubscription);
  
  setTimeout(() => {
    console.log(`Luego de un segundo, cancelamos las suscripciones agrupadas a través del padre`);
    subscription1.unsubscribe();
  }, 1000);

  /* Los Subscriptions también tienen un método
  remove(otherSubscription), con el fin de
  deshacer la adición de una suscripción hijo. */
  setTimeout(() => {
    console.log('')
    console.log('--------------')
    console.log('Ejemplo 3:')
    // Ejemplo 3: Agrupar objectos Subscription y luego remover
    
    console.log(`Comenzamos la suscripción de ambos observables: primero:interval(400) y segundo:interval(300)`)
    const subscription3 = observable1.subscribe(x => console.log('primero: ', x));
    const childSubscription2 = observable2.subscribe(x => console.log('segundo: ', x));
    
    subscription3.add(childSubscription2);
    
    setTimeout(() => {
      console.log(`Luego de un segundo, removemos la suscripción hija`);
      subscription3.remove(childSubscription2);
      console.log(`y cancelamos la suscripción del padre, por separado`);
      subscription3.unsubscribe()
      console.log(`quedando la suscripción hija solamente`);
      setTimeout(() => {
        console.log(`que también podemos cancelar`);
        childSubscription2.unsubscribe()
      }, 1000);

    }, 1000);
  }, 9000);
}, 9000);
