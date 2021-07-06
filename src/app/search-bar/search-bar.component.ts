import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  @Output() 
  busqueda: EventEmitter<string> = new EventEmitter<string>();
  
  input_busqueda: string = "";

  ngOnInit(): void {}

  changeInput(e: string){
    this.input_busqueda = e;
  }
  search(){
    this.searchService.search(this.input_busqueda);
    this.busqueda.emit(this.input_busqueda);
  }
}


