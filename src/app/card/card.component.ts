import { Component, Input, OnInit } from '@angular/core';
import { Espacio } from '../Espacios';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
// posteriormente sera un arreglo de card's
  /* card: Espacio={
  titulo:'Mansion Playboy',
  descripcion:'la descripciosa descripcion',
  precio: 160,
  valoracion:[true,true,false,false,false],
  imagen:'assets/ratatata.jpg',
  oferta:false,
  tipo:"card base"
  } */
  
  @Input()
  lugar: Espacio = {
    titulo: '',
    descripcion: '',
    precio: 0,
    valoracion: [],
    imagen: '',
    oferta: false,
    tipo: ''
  };
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
