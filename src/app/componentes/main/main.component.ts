import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormularioPrincipalComponent } from "../formulario-principal/formulario-principal.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { BeneficiosComponent } from "../beneficio/beneficio.component";
import { EquipeCorretoresComponent } from "../equipe-corretores/equipe-corretores.component";
// import { provideRouter, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FormularioPrincipalComponent, CatalogoComponent, BeneficiosComponent, EquipeCorretoresComponent], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
}