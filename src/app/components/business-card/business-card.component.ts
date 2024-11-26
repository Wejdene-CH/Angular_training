import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cv } from '../cv/models/cv.model';
@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnChanges {
  @Input() cv: Cv | null = null; // The CV object passed dynamically

  cardData = {
    name: '',
    firstname: '',
    job: '',
    path: '', // default path
    quote: '',
    description: '',
    keywords: ''
  };

  /**
   * Update cardData whenever cv input changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cv'] && changes['cv'].currentValue) {
      this.cardData = { ...this.cardData, ...changes['cv'].currentValue };
    }
  }

  /**
   * Flip the card (for front/back view)
   */
  rotateCard(event: any) {
    const card = event.target.closest('.card');
    card.classList.toggle('flipped');
  }
}
