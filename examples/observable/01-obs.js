const { Observable } = require("rxjs");

const obs = new Observable((subscriber) => {
  subscriber.next(34);
  subscriber.next(56);
  const timer = setTimeout(() => {
    console.log("run timeout");
    subscriber.next("abc");

    subscriber.complete();
  }, 1000);

  return () => {
    console.log("housekeeping");
    clearTimeout(timer);
  };
});

const subscription = obs.subscribe({
  next: (data) => {
    console.log("data: ", data);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 500);
