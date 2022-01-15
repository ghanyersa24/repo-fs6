// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");
// console.log("* * * * *");

for (let baris = 1; baris <= 10; baris++) {
  // baris 2
  let print = "";
  for (let kolom = 1; kolom < baris + 1; kolom++) {
    // kolom = 1 kolom < 2+1
    // kolom = 1  kolom < 2+1
    print += "* "; // * * *
  }
  console.log(print);
}
