import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
// import { provideRouter, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  formulario: FormGroup;
  usuarioAutenticado: boolean = false;

  constructor(
    private fb: FormBuilder,
    // private router: Router,
    // private authService: AuthService
  ) {
    this.formulario = this.fb.group({
      tipoImovel: ['', Validators.required],
      localizacao: ['', Validators.required],
      quartos: [1, [Validators.required, Validators.min(1)]],
      banheiros: [1, [Validators.required, Validators.min(1)]],
      garagem: ['', Validators.required],
      valorMaximo: [500, [Validators.required, Validators.min(500)]],
      outrasPreferencias: ['']
    });

    // Verifica se o usuário está autenticado
    // this.usuarioAutenticado = this.authService.isLoggedIn();
  }

  onSubmit() {
    // if (!this.usuarioAutenticado) {
    //   alert('Você precisa estar logado para enviar suas preferências.');
    //   this.router.navigate(['/login']);
    //   return;
    // }

    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log('Preferências enviadas:', formData);

      // Simulação de envio para o backend ou outra ação
      alert('Solicitação enviada com sucesso!');
    } else {
      console.error('Formulário inválido');
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isAuthenticated: boolean = false;

//   constructor() {
//     // Simulação: Verifica se há um token no localStorage
//     this.isAuthenticated = !!localStorage.getItem('token');
//   }

//   login(token: string): void {
//     localStorage.setItem('token', token);
//     this.isAuthenticated = true;
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     this.isAuthenticated = false;
//   }

//   isLoggedIn(): boolean {
//     return this.isAuthenticated;
//   }
// }