import { Routes } from '@angular/router';

// Import of components
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CreateComponent } from './component/create/create.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ErrorComponent } from './component/error/error.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'create-project', component: CreateComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent }
];