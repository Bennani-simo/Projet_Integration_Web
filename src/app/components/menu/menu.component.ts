import { Component, OnInit, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() expendedMenuEvent = new EventEmitter<boolean>();
  isMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu() {
    this.isMenu = !this.isMenu;
    this.expendedMenuEvent.emit(this.isMenu);
  }



}
