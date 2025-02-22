import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastroComponent {
  usuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };
 
  onCadastrar() {
    // Verifica se as senhas coincidem
    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Aqui você pode enviar os dados para o backend ou realizar outra ação
    console.log('Dados do usuário:', this.usuario);
    alert('Cadastro realizado com sucesso!');
  }
}