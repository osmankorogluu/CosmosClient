import { Component} from '@angular/core';
import { NotificationsService } from 'angular2-notifications/public_api';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  
  title = 'CosmosClient';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message("Merhaba", "Osman",ToastrMessageType.Info, ToastrPosition.BottomCenter);
  }
  }


  
