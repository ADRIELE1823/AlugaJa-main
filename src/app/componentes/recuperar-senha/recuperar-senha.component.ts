import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})

export class RecuperarSenhaComponent {
    formulario: FormGroup;
    mensagemFeedback: string = '';
  
    constructor(private fb: FormBuilder) {
      this.formulario = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    onSubmit() {
      if (this.formulario.valid) {
        const email = this.formulario.value.email;
  
        // Simulação de envio de e-mail
        console.log(`E-mail de recuperação enviado para: ${email}`);
        this.mensagemFeedback = `Um e-mail de recuperação foi enviado para ${email}. Verifique sua caixa de entrada.`;
  
        // Aqui você pode integrar com o backend para enviar o e-mail real
        // Exemplo de chamada HTTP:
        // this.http.post('/api/recuperar-senha', { email }).subscribe(
        //   response => {
        //     this.mensagemFeedback = 'E-mail enviado com sucesso!';
        //   },
        //   error => {
        //     this.mensagemFeedback = 'Erro ao enviar o e-mail. Tente novamente mais tarde.';
        //   }
        // );
      } else {
        console.error('Formulário inválido');
        alert('Por favor, insira um e-mail válido.');
      }
    }
  }