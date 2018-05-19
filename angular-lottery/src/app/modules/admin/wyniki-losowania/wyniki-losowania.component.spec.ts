import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WynikiLosowaniaComponent } from './wyniki-losowania.component';

describe('WynikiLosowaniaComponent', () => {
  let component: WynikiLosowaniaComponent;
  let fixture: ComponentFixture<WynikiLosowaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WynikiLosowaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WynikiLosowaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
