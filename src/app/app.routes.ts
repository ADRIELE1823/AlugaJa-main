import { CanActivate, Router, RouterLink, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { LogarComponent } from './componentes/logar/logar.component';
import { BeneficiosComponent } from './componentes/beneficio/beneficio.component';
import { CadastroComponent } from './componentes/cadastrar/cadastrar.component';
import { RecuperarSenhaComponent } from './componentes/recuperar-senha/recuperar-senha.component';
import { NaoAchadoComponent } from './pages/nao-achado/nao-achado.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'Logar', component: LogarComponent },
  { path: 'beneficio', component: BeneficiosComponent },
  { path: 'Cadastrar', component: CadastroComponent },
  { path: 'Recuperar-senha', component: RecuperarSenhaComponent },
  
  { path: "**", component: NaoAchadoComponent }
  // { path: 'Chat', component:ChatComponent}
];

// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }