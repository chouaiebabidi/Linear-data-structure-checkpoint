function test() {
  let a = [3, 1, 7, 9];
  let b = [2, 4, 1, 9, 3];
  let c = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        b.splice(j, 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }

  for (let i = 0; i < a.length; i++) {
    c[i] = a[i];
  }
  for (let i = 0; i < b.length; i++) {
    c[i + 1] = b[i];
  }
  let s = 0;
  for (let i = 0; i < c.length; i++) {
    s = s + c[i];
  }

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(s);
}

console.log(test());
