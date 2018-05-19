import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarzadzanieUzytkownikamiComponent } from './zarzadzanie-uzytkownikami.component';

describe('ZarzadzanieUzytkownikamiComponent', () => {
  let component: ZarzadzanieUzytkownikamiComponent;
  let fixture: ComponentFixture<ZarzadzanieUzytkownikamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarzadzanieUzytkownikamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarzadzanieUzytkownikamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
