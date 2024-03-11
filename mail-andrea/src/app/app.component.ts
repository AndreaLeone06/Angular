import { Component } from '@angular/core';
import { Email } from './mail.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mail-andrea';
  vettore: Email[] = [];
  newEmail(destinatario: HTMLInputElement, oggetto: HTMLInputElement, corpo: HTMLInputElement): boolean {
    this.vettore.push(new Email(destinatario.value, oggetto.value, corpo.value))
    console.log(this.vettore)
    return false
  }
}

