import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() cv!: Cv;
  @Output() selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
