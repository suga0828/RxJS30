const { BehaviorSubject } = rxjs;

/* Objecto BehaviorSubject:
Es un Subject  que tiene una noción de “el valor actual”. 
Almacena el último valor emitido a sus consumidores, y cada
vez que New Observer se suscriba, recibirá inmediatamente
el “valor actual” del BehaviorSubject.

const behaviorSubject = new BehaviorSubject(0);
// En nuestro caso '0' es el valor actual al comienzo
*/

// Ejemplo 1: Usar un BehaviorSubject para almacenar
// el valor actual de un observable
console.log('Ejemplo 1');
const subject = new BehaviorSubject(0);

subject.subscribe({
  next: v => console.log('ObserverA', v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: v => console.log('ObserverB', v)
});

subject.next(3);
