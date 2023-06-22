import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajeEnviadoPage } from './mensaje-enviado.page';

describe('MensajeEnviadoPage', () => {
  let component: MensajeEnviadoPage;
  let fixture: ComponentFixture<MensajeEnviadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajeEnviadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
