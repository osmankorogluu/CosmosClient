import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }
  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom);
}

}
