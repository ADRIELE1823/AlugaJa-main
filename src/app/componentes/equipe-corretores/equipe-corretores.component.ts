import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe-corretores',
  standalone: true,
  imports: [NgFor],
  templateUrl: './equipe-corretores.component.html',
  styleUrl: './equipe-corretores.component.css'
})
export class EquipeCorretoresComponent {
  corretores = [
    {
      nome: 'João Silva',
      cargo: 'Corretor Sênior',
      descricao: 'Especialista em imóveis residenciais com mais de 10 anos de experiência.',
      foto: 'assets/joao.png'
    },
    {
      nome: 'Maria Souza',
      cargo: 'Corretora Comercial',
      descricao: 'Focada em negócios comerciais e investimentos imobiliários.',
      foto: 'assets/maria.png'
    },
    {
      nome: 'Carlos Mendes',
      cargo: 'Corretor de Luxo',
      descricao: 'Especializado em imóveis de alto padrão e mansões.',
      foto: 'assets/carlos.png'
    }
  ];
}