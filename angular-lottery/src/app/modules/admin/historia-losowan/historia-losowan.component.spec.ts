import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaLosowanComponent } from './historia-losowan.component';

describe('HistoriaLosowanComponent', () => {
  let component: HistoriaLosowanComponent;
  let fixture: ComponentFixture<HistoriaLosowanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaLosowanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaLosowanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
