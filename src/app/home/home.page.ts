import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isModalOpen = false;
  isModalmenu = false;
  constructor() { }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenmenu(isOpen: boolean) {
    this.isModalmenu = isOpen;
  }

}
