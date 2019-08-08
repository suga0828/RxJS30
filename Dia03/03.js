const { Observable } = rxjs;

let observable = Observable.create( observer => {
  // Lo segundo que se ejecuta.
  observer.next(1);
  observer.next(2);
  observer.next(3);

  setTimeout(() => {
    // Lo cuarto que se ejecuta.
    observer.next(4);
    
    // Lo último que se ejecuta.
    observer.complete();
  }, 1000);
});

// Lo primero que se ejecuta.
console.log('justo antes de subscribirnos');

observable.subscribe({
  next: x => console.log('x vale', x),
  error: error => console.log('algo salió mal', error),
  complete: () => console.log('done')
});

// Lo tercero que se ejecuta.
console.log('justo despues de subscribirnos');
