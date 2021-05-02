import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'int-web';
  isMenu = true;


  toogleMenu() {
    this.isMenu = !this.isMenu
  }
  onExpandMenu(value) {
    this.toogleMenu()
  }
}
