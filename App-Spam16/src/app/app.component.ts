import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  spam(testo:HTMLInputElement,volte:HTMLInputElement): boolean{
    let cont = Number(volte.value);
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
    {
      this.articles.push(i + " " + testo.value);
    }
    console.log(this.articles)
    return false;
  }




  
  
 
}
