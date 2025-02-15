import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent {
  usuario = {
    email: '',
    senha: ''
  };

  onLogin() {
    // Simulação de validação de login
    if (this.usuario.email === 'usuario@example.com' && this.usuario.senha === 'senha123') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra página ou realizar outra ação
    } else {
      alert('E-mail ou senha incorretos.');
    }
  }
}