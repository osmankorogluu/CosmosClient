import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

constructor(private spinner: NgxSpinnerService){}
ngOnInit(): void{
  this.spinner.show();

  
}
  }
  
  
 