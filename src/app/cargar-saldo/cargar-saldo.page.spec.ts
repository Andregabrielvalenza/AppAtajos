import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarSaldoPage } from './cargar-saldo.page';

describe('CargarSaldoPage', () => {
  let component: CargarSaldoPage;
  let fixture: ComponentFixture<CargarSaldoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargarSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
