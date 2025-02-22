import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [HeaderComponent],
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