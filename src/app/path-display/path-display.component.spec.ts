import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDisplayComponent } from './path-display.component';

describe('PathDisplayComponent', () => {
  let component: PathDisplayComponent;
  let fixture: ComponentFixture<PathDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
