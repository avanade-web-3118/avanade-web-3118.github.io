const aereasNacional = [
    'Latam',
    'Gol',
    'Azul',
]

//const latam = aereaNacional[0];
//atribuição por desestruturação de arrays.
//const [latam, gol, azul] = aereasNacional;
console.log(azul);

const airCompanies = [
    ...aereasNacional, 
    'Delta', 
    'United AirLines', 
    'Emirates',
];

const [latam, gol, azul, ...internacionais] = airCompanies;
console.log(airCompanies);

const user = {
    name: "Karlessandra Lima",
    email: "karlessandralima@gmail.com",
    password: "ZAQXVGHYHJ3VFgnn54"
};

//destructuring assignment
const { password, ...data } = user;

console.log("Oh meu Deus!", data);