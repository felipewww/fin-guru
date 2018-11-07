import {Component, Input, OnInit} from '@angular/core';
import {ReceivablesModel} from "../pages/home/receivables/receivables.model";

@Component({
  selector: 'app-databox',
  templateUrl: './databox.component.html',
  styleUrls: ['./databox.component.css']
})
export class DataboxComponent implements OnInit {

    @Input() contentType: string;
    @Input() title:string;
    @Input() highlightTitle:string;

    ReceivablesModel: ReceivablesModel[];
    ReferenceObject: any;
    sumPropertyName: string;
    sum: number = 0;


    constructor(){
    }

    ngDoCheck(){
        console.log("\n\n");
        console.log(this.ReceivablesModel);
        this.sumValues();
    }

    ngOnInit() {
        if (this.contentType === 'receivables') {

          this.sumPropertyName = 'amount';
          this.ReceivablesModel = [
              { id: 1, description: 'Mock One', day: 26, amount: 100.98 },
              { id: 2, description: 'Mock Two', day: 26, amount: 223.47 },
              { id: 3, description: 'Mock Three', day: 26, amount: 52.62 },
          ];

          this.ReferenceObject = this.ReceivablesModel;
        }
    }

    // sumValues(sumPropertyName, object)
    sumValues()
    {
        let total = 0;
        for(let item of this.ReferenceObject){
            total += item[this.sumPropertyName];
        }

        this.sum = parseFloat(total.toFixed(2));
    }

    addReceivableMock()
    {
        this.ReceivablesModel.push(
            { id: 4, description: 'Mock Four', day: 26, amount: 1000.12 }
        );
    }
}
