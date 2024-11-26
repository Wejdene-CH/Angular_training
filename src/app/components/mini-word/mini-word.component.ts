import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  color: string = ''; // Couleur du texte
  fontSize: number = 16; // Taille du texte par défaut
  fontFamily: string = 'Arial'; // Police par défaut
  fonts: string[] = ['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Courier New', 'Roboto']; // Liste des polices

}
