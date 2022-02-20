import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['laptop002.jpg', 'code-on-screen.jpg', 'college001.jpg'];
  headlines = ['work effectively', 'the next Generation of Code', 'learn from best'];
  currentImage = 0;
  showImage = true;
  showInfoText = false;

  hideAndSeek(){
    if (this.showInfoText == false) {
      this.showInfoText = true;
    }else{
      this.showInfoText = false;
    }
  }

  // ngOnInit(){} beinhaltet Funktionen die beim Start ausgeführt werden.
  // OnInit muss aber bei der Klassenerstellung implementiert werden
  ngOnInit() {
      this.updateImage();
  }

  // Zähler wird hochgezählt und mit der Arraylänge verglichen
  // wenn Zähler denselben Wert hat wie die Arraylänge wird durch
  // Restwertberechnung der Zähler wieder auf 0 gesetzt
  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.hideImage();
    },7000);
  }

  // blendet für kurze Zeit das Bild aus um das unschöne Flackern
  // beim Zurücksetzen des Zooms auszublenden
  hideImage(){
    this.showImage = false;
    setTimeout(()=>{
      this.showImage = true;
    }, 200);
  }
}


