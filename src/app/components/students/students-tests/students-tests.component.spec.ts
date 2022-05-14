import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTestsComponent } from './students-tests.component';

describe('StudentsTestsComponent', () => {
  let component: StudentsTestsComponent;
  let fixture: ComponentFixture<StudentsTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
