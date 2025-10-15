import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  apiURL: string = 'http://localhost:8089/jouoeurs/api/all';

  joueurs!: Joueur[]; //un tableau de joueurs
  //categories : Categorie[];

  constructor(private http: HttpClient) {}

  listeJoueur(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiURL);
  }
}
