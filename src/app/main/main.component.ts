import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  showInfoText = false;
  hideAndSeek(){
    if (this.showInfoText == false) {
      this.showInfoText = true;
    }else{
      this.showInfoText = false;
    }
  }

}
