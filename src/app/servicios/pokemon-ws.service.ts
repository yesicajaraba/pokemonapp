import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';// convierte json a typescript
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonsWSService {
  private httpHeader = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl;

  obtenerPokemons():Observable<any>{
    let headers = new HttpHeaders({'content-type':'application/json'});
    let options = {HttpHeader:this.httpHeader};
    return this.http.get<any>(`${this.baseUrl}/pokemon`);
  }
  obtenerPokemonID(id:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`);
  }   
  obtenerTypePokemonID(id:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/type/${id}`);
  }     
}