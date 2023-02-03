import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonsWSService } from 'src/app/servicios/pokemon-ws.service';
import { PopupPokeStatsComponent } from '../popup-poke-stats/popup-poke-stats.component';

@Component({
  selector: 'app-popup-view-pokemon',
  templateUrl: './popup-view-pokemon.component.html',
  styleUrls: ['./popup-view-pokemon.component.css']
})
export class PopupViewPokemonComponent implements OnInit {

  @Input() id:any
  @Input() name:any;
  InfPoke: any ='';
  TypesPoke =[];
  ImgPoke ='';
  displayedColumns: string[] = ['type'];
  data:any[]=[];
  dataSource= new MatTableDataSource<any>(this.data);
  columnas: string[] = [];
  constructor(private dialogRef:MatDialogRef<PopupViewPokemonComponent>,
              private pokemonWS:PokemonsWSService,
              public dialog:MatDialog,
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
         let pokeTypes;
         for(let i=0; i<responseJs.types.length; i++){ 

          this.pokemonWS.obtenerTypePokemonID(responseJs.types[i].slot).subscribe(
            resJs=>{
              pokeTypes ={
                type: responseJs.types[i].type.name
              };
              this.data.push(pokeTypes);
              this.dataSource = new MatTableDataSource<any>(this.data);
              console.log(resJs);
            },
            err=>
            {
              console.log(err);
            }
            );
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
  openDialog(id:any) {

    console.log('entra ondialog='+id);
    const dialogRef = this.dialog.open(PopupPokeStatsComponent,id);
    dialogRef.componentInstance.id= id;
}
 
}
