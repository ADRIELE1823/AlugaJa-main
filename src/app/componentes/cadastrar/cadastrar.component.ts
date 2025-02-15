import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  // Função para verificar se o formulário está válido
  isFormValid(): boolean {
    return this.usuario.nome.trim() !== '' &&
           this.usuario.email.trim() !== '' &&
           this.usuario.senha.trim() !== '';
  }

  onCadastrar() {
    alert(`Usuário cadastrado com sucesso:\n${JSON.stringify(this.usuario)}`);
    // Aqui você pode chamar uma API para salvar o novo usuário
  }
}