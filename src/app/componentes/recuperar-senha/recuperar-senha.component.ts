import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})

export class RecuperarSenhaComponent {
  email: string = '';

  onRecuperarSenha() {
    alert(`Um e-mail de recuperação foi enviado para: ${this.email}`);
    // Aqui você pode chamar uma API para enviar o e-mail de recuperação
  }
}
