import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImagePath: string = 'assets/images/default.jpg'): string { {
    // Vérifie si la valeur est vide ou ne contient que des espaces
    if (!value || value.trim().length === 0) {
      return defaultImagePath; // Retourne l'image par défaut
    }
    return value; // Retourne l'image d'origine si elle est valide

  }
}
}

