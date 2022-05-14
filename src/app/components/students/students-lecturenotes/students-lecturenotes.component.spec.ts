import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLecturenotesComponent } from './students-lecturenotes.component';

describe('StudentsLecturenotesComponent', () => {
  let component: StudentsLecturenotesComponent;
  let fixture: ComponentFixture<StudentsLecturenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsLecturenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLecturenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
