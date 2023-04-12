// kondisional if //
let a = 10;
if (a > 5) {
  console.log("a lebih besar dari 5");
}

// Kondisional If-Else //
let b = 3;
if (b > 5) {
  console.log("b lebih besar dari 5");
} else {
  console.log("b kurang dari atau sama dengan 5");
}

// Kondisional If-Else If //
let c = 3;
if (c > 5) {
  console.log("c lebih besar dari 5");
} else if (x > 0) {
  console.log("c lebih besar dari 0 dan kurang dari atau sama dengan 5");
} else {
  console.log("c kurang dari atau sama dengan 0");
}

// Kondisional Switch //
let hari = 5;
switch (hari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Tidak ada hari yang cocok");
    break;
}



