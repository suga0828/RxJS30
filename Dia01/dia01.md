# 30 dias con RxJs: Día 01 - #Rxjs30 

#### Introduccion

RxJS es una librería para crear programas asíncronos y basados en eventos a través del uso de secuencias observables. Esta librería provee un tipo fundamental, el observable, tipos satelites (observadores[^1], *Schedulers*[^1], *Subject*[^1]) y operadores inspirados por los de [arreglos en Javascript 1.6](https://developer.mozilla.org/es/docs/Web/JavaScript/Novedades_en_JavaScript/1.6) (`map`, `filter`, `reduce`, `every`, etc) que permite manejar eventos asincronos como colecciones.

Según la documentacion oficial una forma de pensar RxJS es:

> Piensa en RxJS como *Lodash* para eventos.

ReactiveX combina el patrón del observador, el patrón del iterador y la programacion funcional con colecciones que completa lo necesario para manejar secuencias de eventos de una forma ideal.

Los conceptos esenciales en RxJS que solucionan el manejo asíncrono de eventos son:

- el Observable: representa la idea de una coleccion invocable de futuros valores o eventos.
- el Observador: es una colecciones de callbacks que 

------

Sígamos al siguiente día: [día 02](https://github.com/suga0828/RxJS30/tree/master/Dia02/dia02.md).

Si no seguiste el tutorial anterior puedes conseguirlo en: [día 0](https://github.com/suga0828/RxJS30/tree/master/Dia0/dia0.md).

[^1]: Por comodidad, en los siguientes tutoriales usaremos los términos observador y *Observer*, programadores y *Schedulers* o sujeto y *Subject* de forma indistinta.