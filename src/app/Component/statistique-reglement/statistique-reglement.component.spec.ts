import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueReglementComponent } from './statistique-reglement.component';

describe('StatistiqueReglementComponent', () => {
  let component: StatistiqueReglementComponent;
  let fixture: ComponentFixture<StatistiqueReglementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueReglementComponent]
    });
    fixture = TestBed.createComponent(StatistiqueReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
