import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  corretores = [
    { nome: 'João Silva', telefone: '(11) 98765-4321', email: 'joao.silva@corretores.com' },
    { nome: 'Maria Souza', telefone: '(21) 99887-6543', email: 'maria.souza@corretores.com' },
    { nome: 'Carlos Mendes', telefone: '(31) 91234-5678', email: 'carlos.mendes@corretores.com' }
  ];
}
