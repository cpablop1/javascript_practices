"use strict";
// Clase (Molde del objecto)
class Camiseta {
    // Método constructor
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Métodos Setters
    setColor(color) {
        this.color = color;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setTalla(talla) {
        this.talla = talla;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    // Métodos getters
    getColor() {
        return this.color;
    }
    getModelo() {
        return this.modelo;
    }
    getMarca() {
        return this.marca;
    }
    getTalla() {
        return this.talla;
    }
    getPrecio() {
        return this.precio;
    }
}
/* var camiseta = new Camiseta("Rojo", "M2", "Run", "M", 15);

var playera = new Camiseta("Negro", "Unisex", "Slim", "S", 85);

console.log(camiseta, playera);

playera.setColor("Arcoiris");

console.log(playera); */ 
