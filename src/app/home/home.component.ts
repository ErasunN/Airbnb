import { Component, OnInit } from '@angular/core';
import { Espacio } from '../Espacios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lugares: Espacio[] = [
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

  valorados: [Espacio, Espacio, Espacio][] = [
    [{
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
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
      titulo: "Cabana con playa",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 260,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    }],
    [{
      titulo: "Cabaña con playa privada",
      descripcion: "Excelente departamento de excelente diseño totalmente reciclado, excelente vistas de la ciudad, muy buena ubicación, a metros del mar, del centro comercial Guemes, del Cacino, del Hotel Hermitage, Provincial y Museo Castagnino. Ideal para desplazarse caminando a todos los lugares, sin necesidad de...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Estudio en Plaza Mitre",
      descripcion: "Disfrutá de la sencillez de este alojamiento tranquilo y céntrico. Muy luminoso, confortable y con todos los servicios. Excelente ubicación, a 50 mts. de Plaza Mitre, y a 500 mts. del shopping y de la Peatonal. Importante: a 100 mts el estacionamiento es libre y gratuito en la calle. Hay estacionamiento de pago cerca ...",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
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
    }],
    [{
      titulo: "Dto con pileta",
      descripcion: "Dpto con pileta",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Mansion Playboy",
      descripcion: "Mansion playboy con servicio de petits y MILF a eleccion. Cuenta con salon de juegos, casino privado, pileta y salida para lanchas y embarcaciones privada.",
      precio: 26,
      valoracion: [true, true, false, false, false],
      imagen: "https://static1.sosiva451.com/8037839/767d218c-49c7-430a-a55d-63b1b1b71f18_u_small.jpg",
      oferta: false,
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
    }]
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
