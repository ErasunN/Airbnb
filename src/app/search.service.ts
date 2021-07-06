import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  busqueda: string = '';

  getSearch(): string {
    return this.busqueda;
  }

  search(input_busqueda: string) {
    this.busqueda = input_busqueda;
  }

  constructor() { }
}
