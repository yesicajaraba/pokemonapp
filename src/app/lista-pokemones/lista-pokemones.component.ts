import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PokemonsWSService } from '../servicios/pokemon-ws.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PopupViewPokemonComponent} from '../popup/popup-view-pokemon/popup-view-pokemon.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pokemones',
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.css']
})
export class ListaPokemonesComponent implements OnInit {


  displayedColumns: string[] = ['id','name','image'];
  data:any[]=[];
  ListarPokemons=[];
  dataSource= new MatTableDataSource<any>(this.data);
  columnas: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pokemonWS:PokemonsWSService,
              public dialog:MatDialog,
              private router:Router
              ) {
                }

  ngOnInit(): void {
    //this.obtenerPokemons();
    this.actualizarPantalla();
  }

  actualizarPantalla(){
    let pokeData;
    for(let i=1; i<=151; i++){ 
      this.pokemonWS.obtenerPokemonID(i).subscribe(
        responseJs=>{
          pokeData ={
            id: i,
            name: responseJs.name,
            image: responseJs.sprites.front_default
          };
          this.data.push(pokeData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort = this.sort;
          console.log(responseJs);
        },
        err=>
        {
          console.log(err);
        }
        );
      }
  }  

  aplicaFiltro(event: Event){
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
    if(this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }

  onDialog(id:any){
    console.log('entra ondialog='+id);
    const dialogRef = this.dialog.open(PopupViewPokemonComponent,{id});
    dialogRef.componentInstance.id= id;
  }

  obtenerRow(row){
    this.router.navigateByUrl(`popup-view-pokemon/${row.id}`);
  }
  
  openDialog(row:any) {

    console.log('entra ondialog='+row.id);
    const dialogRef = this.dialog.open(PopupViewPokemonComponent,row);
    dialogRef.componentInstance.id= row.id;
    dialogRef.componentInstance.name= row.name;
}
}
