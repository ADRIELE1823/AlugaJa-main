// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http'; // Para habilitar o HttpClient
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient() // Adiciona o HttpClient ao aplicativo
//     provideRouter(routes) // Adiciona o roteamento ao aplicativo
//   ]
// }).catch(err => console.error(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importe o provideHttpClient
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Adicione esta linha
    provideRouter(routes)// Outros provedores, se houver
  ],
}).catch((err) => console.error(err));