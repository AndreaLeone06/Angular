import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primachiamatahttp';
  obs!: Observable<any>;
  mydata_save: any = {}
  constructor(private http: HttpClient)
  {
    this.obs= this.http.get('https://jsonplaceholder.typicode.com/posts/42')
    this.obs.subscribe(this.faiQualcosa)
  }
  faiQualcosa=(mydata: any)=>
    {
      console.log(mydata)
      this.mydata_save=mydata
    }
}