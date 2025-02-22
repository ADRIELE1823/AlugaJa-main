import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CatalogoComponent } from "./componentes/catalogo/catalogo.component";
import { ChatComponent } from "./componentes/chat/chat.component";
import { BeneficiosComponent } from "./componentes/beneficio/beneficio.component";
import { EquipeCorretoresComponent } from "./componentes/equipe-corretores/equipe-corretores.component";
import { RecuperarSenhaComponent } from "./componentes/recuperar-senha/recuperar-senha.component";


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterModule, CatalogoComponent, BeneficiosComponent, EquipeCorretoresComponent], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AlugaJa';
}
