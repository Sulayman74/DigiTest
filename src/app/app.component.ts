import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digisass';
  isHidden =false
hidden(){
  setTimeout(() => {
    this.isHidden=true
  }, 10000);
}
constructor(){
  this.hidden()
}
}
