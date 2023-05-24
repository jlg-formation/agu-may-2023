const { Subject } = require("rxjs");

const subject = new Subject();

const subscription1 = subject.subscribe((data) => {
  console.log("s1", data);
});
setTimeout(() => {
  const subscription2 = subject.subscribe((data) => {
    console.log("s2", data);
  });
}, 1000);

setTimeout(() => {
  subject.next(23);
}, 200);

setTimeout(() => {
  subject.next(52);
}, 1200);
