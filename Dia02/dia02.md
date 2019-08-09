# 30 días con RxJS: Día 02 - #RxJS30 

#### Introduccion

Una función pura se define como aquella que siempre devolverá la misma salida para la misma entrada y no realizará efectos secundarios, esto quiere decir que una función pura no depende de elementos externos a ella. Lo que hace poderoso a RxJS es su capacidad de producir valores usando funciones puras. Eso significa que tu código será menos propenso a errores.

### Día 2:
En el tutorial de hoy vamos a comparar código *Vanilla Javascript* con código creado con RxJS usando operadores para aislar, regular y transformar valores a través de observables. En ejemplo 1 del tutorial de hoy vamos a mostrar la capacidad de RxJS para aislar el estado (una serie de *clicks*) usando el operador `scan`. El operador `scan` funciona de la misma forma que `reduce` lo hace para arreglos: éste toma un valor expuesto a un *callback*. El valor retornado por el *callback* se convertirá en el nuevo valor expuesto la próxima vez que el *callback* se ejecute. En el ejemplo 2 haremos lo mismo pero limitando la cantidad de *clicks* durante cierto tiempo con el operador `throttleTime`. En el ejemplo 3 vamos a modificar los *clicks* según donde se haga el click en la pantalla usando el operador `map`.

------

Sigamos al siguiente día: [día 03](https://github.com/suga0828/RxJS30/tree/master/Dia03/dia03.md).

Si no seguiste el tutorial anterior puedes conseguirlo en: [día 1](https://github.com/suga0828/RxJS30/tree/master/Dia01/dia01.md).
