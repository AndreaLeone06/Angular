import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {
  @Input() valore=new Array<string>();
  @Input() end:string
}
