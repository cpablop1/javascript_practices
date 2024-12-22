import { Routes } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternalComponent } from './external/external.component';
import { ContactComponent } from './contact/contact.component';

// Array de rutas
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'curso', component: CursosComponent},
    {path: 'curso/:name', component: CursosComponent},
    {path: 'external', component: ExternalComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HomeComponent}
];
