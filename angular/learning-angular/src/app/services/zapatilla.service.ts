import { Injectable } from "@angular/core";

import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Tenis', 'Puma', 'Blanco', 800, true),
            new Zapatilla('Botas', 'Puma', 'Negro', 1200, true),
            new Zapatilla('Tenis', 'Nike', 'Gris', 950, true),
            new Zapatilla('Tenis', 'I-Run', 'Negro', 550, true),
            new Zapatilla('Tenis', 'I-Run', 'Negro', 550, true)
        ];
    }

    getText(): string {
        return 'Hello world from a service';
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}