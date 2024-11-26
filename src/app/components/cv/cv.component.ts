import { Component } from '@angular/core';
import { Cv } from './models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv):void {
        this.selectedCv = cv;
    }
}
