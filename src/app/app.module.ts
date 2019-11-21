import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EventComponent } from './events/event/event.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './_component/login/login.component'

//Importar HttpClientModule fazer chamadas api,
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { JwtModule } from '@auth0/angular-jwt';
import { IndexComponent } from './_component/index/index.component';
import { CadastroComponent } from './_component/user/cadastro/cadastro.component';
import { MinhaContaComponent } from './_component/user/minha-conta/minha-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventComponent,
    EventsComponent,
    LoginComponent,
    IndexComponent,
    CadastroComponent,
    MinhaContaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost'],
        blacklistedRoutes: ['localhost/login']
      }
    })
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
