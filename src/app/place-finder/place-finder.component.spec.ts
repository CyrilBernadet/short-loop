import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFinderComponent } from './place-finder.component';

describe('PlaceFinderComponent', () => {
  let component: PlaceFinderComponent;
  let fixture: ComponentFixture<PlaceFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
