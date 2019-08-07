// Docs: https://rxjs.dev/guide/overview

const { Observable, fromEvent, subscribe } = rxjs;

// Register an event
let button = document.querySelector('#button');
button.addEventListener('click', () => console.log('clicked'))

// Subscribe to a observable
fromEvent(button, 'click')
  .subscribe(() => console.log('clicked RxJS'));
