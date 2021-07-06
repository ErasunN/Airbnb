import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lugares-interes',
  templateUrl: './card-lugares-interes.component.html',
  styleUrls: ['./card-lugares-interes.component.scss']
})
export class CardLugaresInteresComponent implements OnInit {

    lugares=[
    {
      nombre:"Montañas",
      imagen:"https://aventuravertical.com/wp-content/uploads/2019/12/monta%C3%B1as-de-mexico.jpg"
    },
    {
      nombre:"playas",
      imagen:""
    },  {
      nombre:"bosques",
      imagen:""
    },  {
      nombre:"turismo",
      imagen:""
    },  {
      nombre:"ciudad",
      imagen:""
    },{
      nombre:"polares",
      imagen:""
    }
];
  constructor() { 
  
    
      
    
  }
  
  ngOnInit(): void {
  }

}
