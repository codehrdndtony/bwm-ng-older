import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  componentTitle = 'I am comp from comp.ts';

  clickHandler() {
    alert('I Am Clicked!');
  }
}
