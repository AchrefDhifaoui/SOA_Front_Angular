import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFactureComponent } from './gestion-facture.component';

describe('GestionFactureComponent', () => {
  let component: GestionFactureComponent;
  let fixture: ComponentFixture<GestionFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionFactureComponent]
    });
    fixture = TestBed.createComponent(GestionFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
