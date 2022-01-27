import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['laptop002.jpg', 'code-on-screen.jpg', 'college001.jpg'];
  currentImage = 0;
  showImage = true;

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
    },8000);
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
