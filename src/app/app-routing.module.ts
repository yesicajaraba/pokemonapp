import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '././home/home.component';
import { ListaPokemonesComponent } from '././lista-pokemones/lista-pokemones.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PopupViewPokemonComponent } from './popup/popup-view-pokemon/popup-view-pokemon.component';
import { PopupPokeStatsComponent} from './popup/popup-poke-stats/popup-poke-stats.component';

const routes: Routes = [  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'lista-pokemones',component:ListaPokemonesComponent},
  {path:'popup-view-pokemon',component:PopupViewPokemonComponent},
  {path:'popup-poke-stats',component:PopupPokeStatsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
