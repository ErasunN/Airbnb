import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardLugaresInteresComponent } from './card-lugares-interes/card-lugares-interes.component';
import { CardProductoBusquedaComponent } from './card-producto-busqueda/card-producto-busqueda.component';
import { CardAnfitrionComponent } from './card-anfitrion/card-anfitrion.component';
import { ReseniaComponent } from './resenia/resenia.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetalleComponent,
    BusquedaComponent,
    CardComponent,
    SearchBarComponent,
    CarrouselComponent,
    CardLugaresInteresComponent,
    CardProductoBusquedaComponent,
    CardAnfitrionComponent,
    ReseniaComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
}
}
