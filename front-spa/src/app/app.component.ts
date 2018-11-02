import { Component } from '@angular/core';
import { DataboxComponent } from './databox/databox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-spa';

  currency = 'R$';
}
