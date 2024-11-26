import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.css']
})
export class ColorChildComponent {
  @Input() parentColor: string = ''; // Pour recevoir la couleur du père
  @Output() favoriteColorEvent = new EventEmitter<string>(); // Pour envoyer la couleur au père

  myFavoriteColor: string = 'orange'; // Couleur favorite du fils

  setParentColor() {
    this.favoriteColorEvent.emit(this.myFavoriteColor);
  }
}
