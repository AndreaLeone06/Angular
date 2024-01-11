import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  standalone: true,
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
  @Input() name: string;
  pezzo:string[]
  constructor() { 
    this.pezzo=["bulloni","viti","ferro"]
  }
}
