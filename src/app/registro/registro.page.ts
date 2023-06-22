import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
