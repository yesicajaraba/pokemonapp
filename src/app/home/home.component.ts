import { Component, OnInit } from '@angular/core';
import { PokemonsWSService}  from '../servicios/pokemon-ws.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title ="Home";
  constructor(public instrumentosWS:PokemonsWSService) { }

  ngOnInit() {
  //  this.getUserLogged();
  }

}
