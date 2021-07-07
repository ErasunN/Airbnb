import { Component, Input, OnInit } from '@angular/core';
import { Espacio } from '../Espacios';

@Component({
  selector: 'app-card-producto-busqueda',
  templateUrl: './card-producto-busqueda.component.html',
  styleUrls: ['./card-producto-busqueda.component.scss']
})
export class CardProductoBusquedaComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
