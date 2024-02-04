import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array=new Array<string>()
  end:string
  macchina(colore:HTMLInputElement, porte:HTMLInputElement, cambio:HTMLInputElement): boolean{
    this.end="Colore "+colore.value+","+porte.value+" porte,cambio "+cambio.value
    this.array.push(this.end)
    for ( let i of this.array) {
      console.log(i)
     }
    return false
  }
}
