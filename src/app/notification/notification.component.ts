import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class='alert alert-success' [ngClass]="{fadeout : !displayNotification}" > 
              <p> This website uses cookies to provide better user experience </p>
              <div class="close"> <button class="btn" (click) = "closeNotification()" > X </button> </div>
            </div>`,
  styles: ["div{margin : 10px 0px; padding : 10px 20px; text-align: center;}", 
  "p{font-size: 15px; color: blue;}", 
  ".close{float: right; margin-top: -45px;}",
  ".fadeout{ visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear }" ]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = true; 
  closeNotification(){
    this.displayNotification = false;
  }
}
