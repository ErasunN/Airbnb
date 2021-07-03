import { Component, OnInit } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
// posteriormente sera un arreglo de card's
  card: Card={
  titulo:'el titulo',
  descripcion:'la descripciosa descripcion',
  precio: 999,
  valoracion:4,
  imagen:'assets/ratatata.jpg',
  oferta:false,
  tipo:"card base"
  }

  card2: Card={
    titulo:'el titulo',
    descripcion:'la descripciosa descripcion',
    precio: 999,
    valoracion:4,
    imagen:'assets/ratatata.jpg',
    oferta:true,
    tipo:"unaClasequevieneGuardadaComoAtributoTremendaideatodaguapaQuetuveLastimaQueSoyMedioAutista"
    }
  constructor() { }

  ngOnInit(): void {
  }

}
