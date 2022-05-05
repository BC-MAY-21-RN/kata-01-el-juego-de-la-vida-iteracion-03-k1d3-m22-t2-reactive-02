
//import Table from "../index";
const Table = require('../index');


describe("Filter function", () => {
    test("Prueba de dimensión", () => {
        let tabla = new Table(10, 10, ".......*....**....**.");
        console.log(tabla.matriz.length);
        expect(tabla.matriz.length).toBe(10);
        expect(tabla.matriz[0].length).toBe(10);
    });
  });