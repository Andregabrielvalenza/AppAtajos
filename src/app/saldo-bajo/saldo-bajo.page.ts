import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo-bajo',
  templateUrl: './saldo-bajo.page.html',
  styleUrls: ['./saldo-bajo.page.scss'],
})
export class SaldoBajoPage implements OnInit {
  isModalmenu = false;
  isModalOpen = false;

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
