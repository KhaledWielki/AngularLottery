import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien.component';

describe('UstawieniaPowiadomienComponent', () => {
  let component: UstawieniaPowiadomienComponent;
  let fixture: ComponentFixture<UstawieniaPowiadomienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UstawieniaPowiadomienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UstawieniaPowiadomienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
