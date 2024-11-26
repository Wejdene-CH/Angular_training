import { Component, Input } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input() cv: Cv | null = null;
}
