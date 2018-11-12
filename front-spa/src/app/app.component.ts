import {Component, Injectable} from '@angular/core';
import { FormModalComponent } from './shared/form-modal/form-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
    title = 'front-spa';
    constructor(private FormModal: FormModalComponent){
    }
}
