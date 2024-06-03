const bahasaIndonesia = 80;
const bahasaInggris = 90;
const mtk = 89;
const ipa = 69;

const rataRata = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4;

if (rataRata >= 90) {
  console.log(`Rata-Rata : ${rataRata} \nGrade : A`);
} else if (rataRata >= 80) {
  console.log(`Rata-Rata : ${rataRata} \nGrade : B`);
} else if (rataRata >= 70) {
  console.log(`Rata-Rata : ${rataRata} \nGrade : C`);
} else if (rataRata >= 60) {
  console.log(`Rata-Rata : ${rataRata} \nGrade : D`);
} else {
  console.log(`Rata-Rata : ${rataRata} \nGrade : E`);
}
