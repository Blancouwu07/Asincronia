// datos.js — "Base de datos" simulada compartida
const empleados = [
    { id: 1, nombre: 'Miguel' },
    { id: 2, nombre: 'Yenny' },
    { id: 3, nombre: 'MCamila' },
];

const salarios = [
    { id: 1, salario: 1000, idempleado: 1 },
    { id: 2, salario: 2000, idempleado: 2 },
];

module.exports = { empleados, salarios };
