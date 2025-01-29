import { Routes } from '@angular/router';
import { Home0Component } from './home0/home0.component';
import { SigninComponent } from './login/signin.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListeComponent } from './home0/liste/liste.component';
import { AddComponent } from './home0/add/add.component';
import { UpdateComponent } from './home0/update0/update.component';

export const routes: Routes = [
  {path : '' , redirectTo : 'home' , pathMatch :'full' },
  {path : 'home' , component : Home0Component ,children : [

    {path : '' , redirectTo : 'liste' , pathMatch : 'full'},
    {path : 'liste' , component : ListeComponent},
    {path : 'add' , component : AddComponent},
    {path : 'update' , component : UpdateComponent},

  ]},
  {path : 'login' , component : SigninComponent },
  {path : 'register' , component : RegisterComponent },
  {path : '**' , component : NotfoundComponent },
];
