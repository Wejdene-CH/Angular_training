import { Component, Output, EventEmitter } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Output() cvSelected = new EventEmitter<Cv>();

  // Liste des CVs
  cvs: Cv[] = [
    { id: 1, name: 'Chamroukhi', firstname: 'Wejdene', age: 24, cin: '12345678', job: 'Student', path: 'assets/images/wejdene.jpg' },
    { id: 2, name: 'Tounsi', firstname: 'Mohamed', age: 25, cin: '87654321', job: 'Engineer', path: '' },
    { id: 3, name: 'Laabidi', firstname: 'Wassim', age: 24, cin: '12345679', job: 'Student', path: 'assets/images/wassim.jpg' },
  ];

  selectedCv?: Cv; // Stocke le CV sélectionné

  // Méthode pour sélectionner un CV
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
    this.cvSelected.emit(cv);
  }
}
