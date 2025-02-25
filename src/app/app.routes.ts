import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes =  [
    { path: '', component: HomeComponent },
    { path: 'dpc-admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotfoundComponent },
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];
