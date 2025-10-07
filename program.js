const dodaj = () => {
   const f1 = document.getElementById('f1')
   const f2 = document.getElementById('f2')
  const wynik = document.getElementById('wynik')

  const a = parseFloat(f1.value.replace(',','.'))||0;
  const b = parseFloat(f2.value.replace(',','.'))||0;
   wynik.innerText = a+b;
}

const wyczysc = () =>{

   const f1 = document.getElementById('f1')
   const f2 = document.getElementById('f2')
  const wynik = document.getElementById('wynik')

   f1.value = '';
   f2.value = '';
   wynik.innerText = '';
  )
  document.addEvenListner('DOMContentLoaded', () => {
    document.getElementById ('calcBTN').addEvenListner('click', dodaj);
    document.getElementById ('clearBTN').addEvenListner('click', wyczyść);
  }};
