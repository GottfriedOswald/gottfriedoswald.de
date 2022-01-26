import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'gottfried_oswald.de';

  images = ['laptop002.jpg', 'code-on-screen.jpg', 'college001.jpg'];
  currentImage = 0;
  ngOnInit() {
      this.updateImage();
  }

  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    },8000);
  }
}
