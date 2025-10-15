import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service'; // Assure-toi que ce chemin est correct

@Component({
  selector: 'app-joueurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  joueurs: Joueur[] = [];

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.chargerJoueurs();
  }

  chargerJoueurs(): void {
    this.joueurService.listeJoueur().subscribe((joueurs) => {
      console.log(joueurs);
      this.joueurs = joueurs;
    });
  }
}
