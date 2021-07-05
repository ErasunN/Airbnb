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
  titulo:'Mansion Playboy',
  descripcion:'la descripciosa descripcion',
  precio: 160,
  valoracion:[true,true,false,false,false],
  imagen:'assets/ratatata.jpg',
  oferta:false,
  tipo:"card base"
  }
  

  
  
   
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
