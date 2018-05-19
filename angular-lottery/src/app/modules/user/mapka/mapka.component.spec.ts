import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapkaComponent } from './mapka.component';

describe('MapkaComponent', () => {
  let component: MapkaComponent;
  let fixture: ComponentFixture<MapkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
