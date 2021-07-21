for (let i = 25; i >= 0; i--) {
  console.log(i);
}

// let counter = 25;
// while (true) {
//   console.log(counter);

//   counter--;
//   if (counter < 0) {
//     break;
//   }
// }

// let counter = 25;
// do {
//   console.log(counter);
//   counter--;
//   if (counter < 0) {
//     break;
//   }
// } while (true);

for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// let counter = 5;
// while (true) {
//   counter++;
//   if (counter % 5 === 0) {
//     console.log(counter);
//   }
//   if (counter > 50) {
//     break;
//   }
// }

// counter = 5;
// do {
//   counter++;
//   if (counter % 5 === 0) {
//     console.log(counter);
//   }
//   if (counter > 50) {
//     break;
//   }
// } while (true);

let result = 0;
for (let i = 1; i <= 100; i++) {
  result += i;
}
console.log(result);

// let counter = 1;
// let result = 1;
// while (true) {
//   counter++;
//   if ((result += counter)) {
//   }
//   // if (result < 5050) {
//   //   continue;
//   // }
//   console.log(result);

//   if (counter >= 100) {
//     break;
//   }
// }

// let counter = 1;
// let result = 1;
// do {
//   counter++;
//   if ((result += counter)) {
//   }
//   if (result < 5050) {
//     continue;
//   }
//   console.log(result);

//   if (counter >= 100) {
//     break;
//   }
// } while (true);

// let result1 = 6;
// while (true) {
//   let user = +prompt("2+2*2");
//   if (result1 === user) {
//     break;
//   }
// }

// let result1 = 6;
// do {
//   let user = +prompt("2+2*2");
//   if (result1 === user) {
//     break;
//   }
// } while (true);

for (let i = 6; ; ) {
  let user = +prompt("2+2*2");
  if (user === i) {
    break;
  }
}
