# 30 días con RxJS: Día 01 - #RxJS30 

#### Introduccion

RxJS es una librería para crear programas asíncronos y basados en eventos a través del uso de secuencias observables. Esta librería provee un tipo fundamental, el observable, tipos satelites (observadores[^1], *Schedulers*[^1], *Subject*[^1]) y operadores inspirados por los de [arreglos en Javascript 1.6](https://developer.mozilla.org/es/docs/Web/JavaScript/Novedades_en_JavaScript/1.6) (`map`, `filter`, `reduce`, `every`, etc) que permite manejar eventos asincronos como colecciones.

Según la documentacion oficial una forma de pensar RxJS es:

> Piensa en RxJS como *Lodash* para eventos.

ReactiveX combina el patrón del observador, el patrón del iterador y la programacion funcional con colecciones que completa lo necesario para manejar secuencias de eventos de una forma ideal.

Los conceptos esenciales en RxJS que solucionan el manejo asíncrono de eventos son:

- el **Observable**: representa la idea de una coleccion invocable de futuros valores o eventos.
- el **Observador**: es una colecciones de callbacks que saben como escuchar los valores entregados por un observable.
- la **Suscripción**: representa la ejecución de un observable, se usa principalmente para cancelar una ejecuciòn.
- los **Operadores**: son funciones puras que permiten un estilo de la programación funcional para manejar las colecciones con operadores como `map`, `filter`, `reduce`, `every`, etc.
- el Sujeto: es el equivalente a un `EventEmitter`, y la única forma de distribuir un valor o evento a multiples observadores.
- los *Schedulers*: son despachadores centralizados para controlar la concurrencia, permitiéndonos coordinar cuando sucede un cálculo en, por ejemplo, `setTimeout`, un `requestAnimationFrame` u otros.

### Día 1:
En el tutorial de hoy vamos a comparar el registro de un escuchador de eventos y la suscripción a un observable.

------

Sigamos al siguiente día: [día 02](https://github.com/suga0828/RxJS30/tree/master/Dia02/dia02.md).

Si no seguiste el tutorial anterior puedes conseguirlo en: [día 0](https://github.com/suga0828/RxJS30/tree/master/Dia0/dia0.md).

[^1]: Por comodidad, en los siguientes tutoriales usaremos los términos observador y *Observer*, programadores y *Schedulers* o sujeto y *Subject* de forma indistinta.