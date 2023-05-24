const {
  Observable,
  interval,
  map,
  startWith,
  take,
  tap,
  of,
  delay,
} = require("rxjs");

console.log("start");
of(undefined)
  .pipe(
    tap((x) => {
      console.log("x: ", x);
    }),
    delay(2000),
    tap((x) => {
      console.log("y: ", x);
    })
  )
  .subscribe();
