const { Observable, interval, map, startWith, take } = require("rxjs");

console.log("start");
interval(1000)
  .pipe(
    map((x) => x + 1),
    startWith(0),
    map((x) => {
      return String.fromCharCode(97 + x);
    }),
    take(3)
  )
  .subscribe(console.log);
