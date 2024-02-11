import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReglementComponent } from './gestion-reglement.component';

describe('GestionReglementComponent', () => {
  let component: GestionReglementComponent;
  let fixture: ComponentFixture<GestionReglementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionReglementComponent]
    });
    fixture = TestBed.createComponent(GestionReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
