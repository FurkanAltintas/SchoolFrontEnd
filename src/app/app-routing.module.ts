import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminClassesComponent } from './components/admin/admin-classes/admin-classes.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminLessonsComponent } from './components/admin/admin-lessons/admin-lessons.component';
import { AdminStudentsComponent } from './components/admin/admin-students/admin-students.component';
import { AdminTeacherAddComponent } from './components/admin/admin-teachers/admin-teacher-add/admin-teacher-add.component';
import { AdminTeachersComponent } from './components/admin/admin-teachers/admin-teachers.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsLayoutComponent } from './components/students/students-layout/students-layout.component';
import { StudentsLecturenotesComponent } from './components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsReportCardComponent } from './components/students/students-reportcard/students-reportcard.component';
import { StudentsTestsComponent } from './components/students/students-tests/students-tests.component';
import { StudentsComponent } from './components/students/students.component';
import { TeacherLayoutComponent } from './components/teachers/teacher-layout/teacher-layout.component';
import { TeachersAnnouncementsComponent } from './components/teachers/teachers-announcements/teachers-announcements.component';
import { TeachersLecturenotesComponent } from './components/teachers/teachers-lecturenotes/teachers-lecturenotes.component';
import { TeachersTestsComponent } from './components/teachers/teachers-tests/teachers-tests.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  // { path: 'admin-login', component:  AdminLoginComponent},
  // { path: 'student-login', component:  StudentsLoginComponent},
  // { path: 'teacher-login', component:  TeachersLoginComponent},
  { path : 'admin', component: AdminLayoutComponent, children: [
    { path: '', component: AdminComponent},
    { path: 'teachers', component: AdminTeachersComponent},
    { path: 'teacher/add', component: AdminTeacherAddComponent},
    { path: 'students', component: AdminStudentsComponent},
    { path: 'lessons', component: AdminLessonsComponent},
    { path: 'classes', component: AdminClassesComponent}
  ]},
  { path : 'teacher', component: TeacherLayoutComponent, children: [
    { path: '', component: TeachersComponent},
    { path: 'announcements', component: TeachersAnnouncementsComponent},
    { path: 'lecturenotes', component: TeachersLecturenotesComponent},
    { path: 'tests', component: TeachersTestsComponent}
  ]},
  { path : 'student', component: StudentsLayoutComponent, children: [
    { path: '', component: StudentsComponent},
    { path: 'lecturenotes', component: StudentsLecturenotesComponent},
    { path: 'reportcard', component: StudentsReportCardComponent},
    { path: 'tests', component: StudentsTestsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
