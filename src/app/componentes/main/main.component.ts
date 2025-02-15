import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  formulario: FormGroup;
  router: any;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      tipoImovel: ['', Validators.required],
      valorMaximo: ['', [Validators.required, Validators.min(500)]]
    });
  }


  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log('Formulário enviado:', formData);
  
      // Redireciona para a página de catálogo com os dados como queryParams
      this.router.navigate(['/catalogo'], { queryParams: formData }).then((success: any) => {
        if (success) {
          console.log('Redirecionado para /catalogo');
        } else {
          console.error('Falha ao redirecionar para /catalogo');
        }
      });
    } else {
      console.error('Formulário inválido');
    }
  }
}