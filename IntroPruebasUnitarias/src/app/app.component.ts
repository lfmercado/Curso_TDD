import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myVar = 'Hola mundo';
  public saludo = 'Hola buenos días, Luis Fernando';

  par(numero:number):boolean{
    return numero%2 == 0 ? true : false;
  }
}


