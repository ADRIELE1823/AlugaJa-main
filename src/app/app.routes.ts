import { Router, RouterLink, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { LogarComponent } from './componentes/logar/logar.component';
import { BeneficiosComponent } from './componentes/beneficio/beneficio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalogo', component: CatalogoComponent }, 
  { path: 'chat/:id', component: ChatComponent },
  { path: 'Logar', component:LogarComponent},
  {path: 'beneficio', component:BeneficiosComponent},
  { path: 'Cadastrar', component:CadastrarComponent}

];
