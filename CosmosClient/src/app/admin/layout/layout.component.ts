import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private alertify: AlertifyService){}
  ngOnInit(): void{
  this.alertify.message("Merhaba",MessageType.Error, Position.TopCenter)
  
  }

}
