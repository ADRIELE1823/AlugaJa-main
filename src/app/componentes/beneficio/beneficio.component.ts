import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './beneficio.component.html',
  styleUrl: './beneficio.component.css'
 
})
export class BeneficiosComponent {
  beneficios = [
    {
      titulo: 'Facilidade na Locação',
      descricao: 'Encontre imóveis disponíveis rapidamente e alugue sem burocracia.'
    },
    {
      titulo: 'Variedade de Opções',
      descricao: 'Escolha entre milhares de imóveis residenciais e comerciais.'
    },
    {
      titulo: 'Segurança Garantida',
      descricao: 'Transações seguras e suporte jurídico para garantir sua tranquilidade.'
    },
    {
      titulo: 'Preços Competitivos',
      descricao: 'Alugue por preços acessíveis e negocie diretamente com proprietários.'
    },

    {
      titulo: 'Chat',
      descricao: 'Interaja diretamente com proprietários e tire suas dúvidas em tempo real.'
    },
    {
      titulo: 'Mapeia as Preferências',
      descricao: 'Personalize sua busca com base em suas preferências e histórico.'
    }
  ];
}