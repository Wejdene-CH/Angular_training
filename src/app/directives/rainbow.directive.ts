import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  // Tableau de couleurs
  private colors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  // Binding pour la couleur du texte
  @HostBinding('style.color') textColor: string = '';

  // Binding pour la couleur de la bordure
  @HostBinding('style.borderColor') borderColor: string = '';

  constructor() {}

  // Gestion de l'événement keyup
  @HostListener('keyup') onKeyUp() {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor; // Change la couleur du texte
    this.borderColor = randomColor; // Change la couleur de la bordure
  }

  // Méthode pour obtenir une couleur aléatoire
  private getRandomColor(): string {
    const index = Math.floor(Math.random() * this.colors.length); // Random index
    return this.colors[index];
  }
}
