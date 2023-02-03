import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListaPokemonesComponent } from './lista-pokemones/lista-pokemones.component';
import { MaterialModule} from './material.moduls';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { PopupViewPokemonComponent } from './popup/popup-view-pokemon/popup-view-pokemon.component';
import {MatChipsModule, MatChip, MatChipGrid} from '@angular/material/chips';
import { PopupPokeStatsComponent } from './popup/popup-poke-stats/popup-poke-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPokemonesComponent,
    NotfoundComponent,
    PopupViewPokemonComponent,
    PopupPokeStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
