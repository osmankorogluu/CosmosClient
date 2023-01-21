import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, MessageType: MessageType, position: Position, delay: number = 2.5){
    alertify.set('notifier','delay', delay);
    alertify.set('notifier','position',position);
    alertify[MessageType](message);
    
  }
  dismiss(){
    alertify.dismiss();
  }
}
 export enum MessageType{
  Error ="error",
  Message = "message",
  Notifyi ="notify",
  Success = "success",
  Warning= "warning"

 }
 
 export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
 }
