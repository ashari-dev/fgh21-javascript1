const printSegitiga = 3;
let segitiga = "";

if (typeof printSegitiga == "number") {
  for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      segitiga += j + " ";
    }
    segitiga += "\n";
  }

  console.log(segitiga);
} else {
  console.log("Data harus angka!");
}
