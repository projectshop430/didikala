import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartemptyComponent } from './cartempty.component';

describe('CartemptyComponent', () => {
  let component: CartemptyComponent;
  let fixture: ComponentFixture<CartemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartemptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
