import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaldoBajoPage } from './saldo-bajo.page';

describe('SaldoBajoPage', () => {
  let component: SaldoBajoPage;
  let fixture: ComponentFixture<SaldoBajoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaldoBajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
