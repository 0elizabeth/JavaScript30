//declaracion de arrays
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];


// 1.Filtrar la lista de inventores para los que nacieron en el 1500's

// Metodo filter() para filtrar datos XD
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);
// Simplificación de función
//  const fifteen = inventors.filter(function(inventor){
//     if(inventor.year >= 1500 && inventor.year < 1600){
//         return true;
//     };
//  });//
//  console.table(fifteen);

// 2. Danos una matriz de los nombres y apellidos del inventor.

// Metodo map() para hacer una nueva matriz de datos
const fullNames = inventors.map(name => (`${name.first} ${name.last}`));
console.table(fullNames);

// const fullNames = inventors.map(function(name){
//     return name.first + ' ' + name.last;
// });
// console.table(fullNames);

// 3. Ordenar los inventores por fecha de nacimiento, de mayor a menor

//Metodo sort() para ordenar valores //por defecto ordena en forma ascendente
const order = inventors.sort((a, b) => a.year > b.year ? 1:-1);
console.table(order);

// const order = inventors.sort(function(a,b){
//     if (a.year > b.year){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.table(order);

// 4. ¿Cual es la suma de todas las edades?

//Metodo reduce() para reducir una matriz a un solo valor
//el metodo reduce() usa los siguientes parametros: (acumulador, valorActual)
const edad = inventors.reduce((total, inventor)=>{
    return total = (inventor.passed - inventor.year) + total;
}, 0); //el cero funciona como valor inicial del acumulador
console.log(edad);

// 5. Ordenar los inventores por años vividos

const años = inventors.sort(function(a,b){
    const primero = a.passed - a.year;
    const segundo = b.passed - b.year;
    return primero > segundo ? 1:-1;
});
console.table(años);

// 7. Ordenar las personas alfabéticamente por apellido

const alfa = people.sort((a,b)=>{
    const [aApellido, aNombre] = a.split(', ');
    const [bApellido, bNombre] = b.split(', ');
    return aApellido > bApellido ? 1:-1;
});
console.table(alfa);

// 8. ¿Cuantos hay de cada uno?

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
//no entendí nada :v
    console.log(transportation);
