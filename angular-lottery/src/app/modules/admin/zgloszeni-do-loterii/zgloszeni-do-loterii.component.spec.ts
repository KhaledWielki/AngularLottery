import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZgloszeniDoLoteriiComponent } from './zgloszeni-do-loterii.component';

describe('ZgloszeniDoLoteriiComponent', () => {
  let component: ZgloszeniDoLoteriiComponent;
  let fixture: ComponentFixture<ZgloszeniDoLoteriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZgloszeniDoLoteriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZgloszeniDoLoteriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
