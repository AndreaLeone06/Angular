import { Component } from '@angular/core';
import { QuartoComponent } from '../quarto/quarto.component';

@Component({
  selector: 'app-terzo',
  standalone: true,
  imports: [QuartoComponent],
  templateUrl: './terzo.component.html',
  styleUrl: './terzo.component.css'
})
export class TerzoComponent {
  nome='terzo'
}
