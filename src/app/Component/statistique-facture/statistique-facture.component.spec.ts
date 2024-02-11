import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueFactureComponent } from './statistique-facture.component';

describe('StatistiqueFactureComponent', () => {
  let component: StatistiqueFactureComponent;
  let fixture: ComponentFixture<StatistiqueFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueFactureComponent]
    });
    fixture = TestBed.createComponent(StatistiqueFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
