const printSegitiga = 3;
let segitiga = "";

if (typeof printSegitiga == "number") {
  for (let i = printSegitiga; i > 0; i--) {
    for (let k = 1; k <= i; k++) {
      segitiga = segitiga + k + " ";
    }
    segitiga += "\n";
  }

  console.log(segitiga);
} else {
  console.log("Data harus angka!");
}
