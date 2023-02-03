import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonsWSService } from 'src/app/servicios/pokemon-ws.service';

@Component({
  selector: 'app-popup-poke-stats',
  templateUrl: './popup-poke-stats.component.html',
  styleUrls: ['./popup-poke-stats.component.css']
})
export class PopupPokeStatsComponent implements OnInit {

  @Input() id:any
  @Input() name:any;
  InfPoke: any ='';
  TypesPoke =[];
  ImgPoke ='';
  displayedColumns: string[] = ['stat','base'];
  data:any[]=[];
  dataSource= new MatTableDataSource<any>(this.data);
  columnas: string[] = [];
  constructor(private dialogRef:MatDialogRef<PopupPokeStatsComponent>,
              private pokemonWS:PokemonsWSService,
              ) { }

  ngOnInit(): void {
    console.log('entra oninit popup'+this.id);
    this.actualizarPantalla(this.id);
  }
  actualizarPantalla(id){
      this.pokemonWS.obtenerPokemonID(id).subscribe(
        responseJs=>{
         this.InfPoke=responseJs;
         this.ImgPoke=this.InfPoke.sprites.front_default;
         let pokeStats;
         for(let i=0; i<responseJs.stats.length; i++){ 
console.log(responseJs.stats.length);
console.log('statr'+responseJs.stats[i].stat.name);
          //this.pokemonWS.obtenerTypePokemonID(responseJs.stats[i].name).subscribe(
            //resJs=>{
              pokeStats ={
                stat: responseJs.stats[i].stat.name,
                base: responseJs.stats[i].base_stat
              };
              this.data.push(pokeStats);
              this.dataSource = new MatTableDataSource<any>(this.data);
              //console.log(resJs);
            //},
            //err=>
            //{
            //  console.log(err);
            //}
            //);
          }
          console.log(responseJs);
        },
        err=>
        {
          console.log(err);
        }
        );
  }  
  cancelar() {
    this.dialogRef.close();
  }

 
}
