import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  isModalOpen = false;
  isModalmenu = false;

  constructor() { }

  ngOnInit() {
  }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenmenu(isOpen: boolean) {
    this.isModalmenu = isOpen;
  }

}
