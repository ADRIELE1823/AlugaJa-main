import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
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
