import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operacionesmat';

 // cantidadone: number;
  cantidadone = 0;
  cantidadtwo = 0;
  resultado = 0;

  multiplication(){
  let res =  this.resultado = (this.cantidadone * this.cantidadtwo);
    console.log(res);
  }

}
