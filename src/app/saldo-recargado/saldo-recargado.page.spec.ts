import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaldoRecargadoPage } from './saldo-recargado.page';

describe('SaldoRecargadoPage', () => {
  let component: SaldoRecargadoPage;
  let fixture: ComponentFixture<SaldoRecargadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaldoRecargadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
