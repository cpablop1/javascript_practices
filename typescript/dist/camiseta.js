"use strict";
// Decorador
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde del objecto)
let Camiseta = (() => {
    let _classDecorators = [estampar("Gucci Gang")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Camiseta = _classThis = class {
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
    };
    __setFunctionName(_classThis, "Camiseta");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Camiseta = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Camiseta = _classThis;
})();
/* var camiseta = new Camiseta("Rojo", "M2", "Run", "M", 15);

var playera = new Camiseta("Negro", "Unisex", "Slim", "S", 85);

console.log(camiseta, playera);

playera.setColor("Arcoiris");

console.log(playera); */
var camiseta = new Camiseta("Negro", "Manga corta", "Nike", "M", 700);
console.log(camiseta);
camiseta.estampacion();
