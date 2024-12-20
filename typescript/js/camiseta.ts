// Decorador

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// Clase (Molde del objecto)
@estampar("Gucci Gang") // Aplicando el decorador creado arriba
class Camiseta{
    // Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Método constructor
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    // Métodos Setters
    public setColor(color: string): void{
        this.color = color;
    }

    public setModelo(modelo: string): void{
        this.modelo = modelo;
    }

    public setMarca(marca: string): void{
        this.marca = marca;
    }

    public setTalla(talla: string): void{
        this.talla = talla;
    }

    public setPrecio(precio: number): void{
        this.precio = precio;
    }

    // Métodos getters
    public getColor(): string{
        return this.color;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getTalla(): string{
        return this.talla;
    }

    public getPrecio(): number{
        return this.precio;
    }
}

/* var camiseta = new Camiseta("Rojo", "M2", "Run", "M", 15);

var playera = new Camiseta("Negro", "Unisex", "Slim", "S", 85);

console.log(camiseta, playera);

playera.setColor("Arcoiris");

console.log(playera); */

var camiseta = new Camiseta("Negro", "Manga corta", "Nike", "M", 700);
console.log(camiseta);
camiseta.estampacion()