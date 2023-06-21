import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPefilUnoPage } from './crear-pefil-uno.page';

describe('CrearPefilUnoPage', () => {
  let component: CrearPefilUnoPage;
  let fixture: ComponentFixture<CrearPefilUnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearPefilUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
