import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_component/login/login.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './_guards/auth.guard'
import { CadastroComponent } from './_component/user/cadastro/cadastro.component'
import { MinhaContaComponent } from './_component/user/minha-conta/minha-conta.component';


const routes: Routes = [
  {
    path: 'events',
    canActivate: [AuthGuard],
    component: EventsComponent
  },
  {
    path: 'user/cadastro',
    component: CadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'minha-conta',
    canActivate: [AuthGuard],
    component: MinhaContaComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
