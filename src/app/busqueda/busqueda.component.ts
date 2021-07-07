import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Espacio } from '../Espacios';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  lugares: Espacio[] = [
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: true,
      tipo: "busqueda"
    },
    {
      titulo: "Cabana con playa",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 260,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    }
  ];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  
  getSearch(): string{
    return this.searchService.getSearch();
  }
}
