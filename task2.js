const bhsIndonesia = 90;
const bhsInggris = 85;
const mtk = 70;
const IPA = 65;

const nilaiRataRata = (bhsIndonesia + bhsInggris + mtk + IPA) / 4;

if (nilaiRataRata >= 90) {
  console.log(`Nilai Rata-Rata : ${nilaiRataRata}`);
  console.log("Grade : A");
} else if (nilaiRataRata >= 80) {
  console.log(`Nilai Rata-Rata : ${nilaiRataRata}`);
  console.log("Grade : B");
} else if (nilaiRataRata >= 70) {
  console.log(`Nilai Rata-Rata : ${nilaiRataRata}`);
  console.log("Grade : C");
} else if (nilaiRataRata >= 60) {
  console.log(`Nilai Rata-Rata : ${nilaiRataRata}`);
  console.log("Grade : D");
} else {
  console.log(`Nilai Rata-Rata : ${nilaiRataRata}`);
  console.log("Grade : E");
}
