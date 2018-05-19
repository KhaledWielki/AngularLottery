import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZgloszeniaDoLoteriiComponent } from './zgloszenia-do-loterii.component';

describe('ZgloszeniaDoLoteriiComponent', () => {
  let component: ZgloszeniaDoLoteriiComponent;
  let fixture: ComponentFixture<ZgloszeniaDoLoteriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZgloszeniaDoLoteriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZgloszeniaDoLoteriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
