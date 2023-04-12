// deklarasi function //
function sapa(nama) {
    console.log('Halo, ' + nama + '!');
  }
  sapa('Budi');

  // function dengan return value //
  function tambah(a, b) {
    return a + b;
  }
  let hasil = tambah(5, 3);
  console.log(hasil);

  
  // function dengan default parameter //
  function sapa(nama = 'dunia') {
    console.log('Halo, ' + nama + '!');
  }
  sapa();
  sapa('Budi');

// function dengan rest parameter //
function jumlah(...angka) {
    let total = 0;
    for (let i = 0; i < angka.length; i++) {
      total += angka[i];
    }
    return total;
  }
  let hasill = jumlah(1, 2, 3, 4, 5);
  console.log(hasill);

    // function sebagai parameter //
    function sapa() {
        console.log('Halo, dunia!');
      }
      function jalankanFunction(functionLain) {
        functionLain();
      }
      jalankanFunction(sapa);  



  
  