import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  preferencias: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.preferencias = this.route.snapshot.queryParams;
    console.log('Preferências recebidas:', this.preferencias);
  }
}