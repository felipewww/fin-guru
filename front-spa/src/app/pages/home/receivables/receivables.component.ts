import {Component, Input, OnInit} from '@angular/core';
import {ReceivablesModel} from "./receivables.model";

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.css']
})
export class ReceivablesComponent implements OnInit {

    @Input() data:ReceivablesModel;

    constructor(){

    }

    ngOnInit() {
    }

    delete($this: ReceivablesModel, ReceivablesModelArray: ReceivablesModel[]){
        for (let item of ReceivablesModelArray) {
            if (item === $this) {
                ReceivablesModelArray.splice( ReceivablesModelArray.indexOf(item) ,1);
            }
        }
    }
}
