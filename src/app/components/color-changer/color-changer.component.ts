import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  defaultColor: string = 'white';
  divColor: string = this.defaultColor;

  changeColor(color: string) {
    this.divColor = color;
  }

  resetColor() {
    this.divColor = this.defaultColor;
  }
  
  //recevoir la couleur de l'enfant
  setColorFromChild(color: string) {
    this.divColor = color;
  }
}
