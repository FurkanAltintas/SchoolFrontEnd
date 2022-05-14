import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminFooterComponent } from './components/admin/admin-layout/admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './components/admin/admin-layout/admin-navbar/admin-navbar.component';
import { AdminSidenavComponent } from './components/admin/admin-layout/admin-sidenav/admin-sidenav.component';
import { AdminRightSidenavComponent } from './components/admin/admin-layout/admin-right-sidenav/admin-right-sidenav.component';
import { AdminTeachersComponent } from './components/admin/admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './components/admin/admin-students/admin-students.component';
import { AdminLessonsComponent } from './components/admin/admin-lessons/admin-lessons.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherLayoutComponent } from './components/teachers/teacher-layout/teacher-layout.component';
import { TeacherSidenavComponent } from './components/teachers/teacher-layout/teacher-sidenav/teacher-sidenav.component';
import { TeacherFooterComponent } from './components/teachers/teacher-layout/teacher-footer/teacher-footer.component';
import { TeacherNavbarComponent } from './components/teachers/teacher-layout/teacher-navbar/teacher-navbar.component';
import { TeacherRightSidenavComponent } from './components/teachers/teacher-layout/teacher-right-sidenav/teacher-right-sidenav.component';
import { StudentsLayoutComponent } from './components/students/students-layout/students-layout.component';
import { StudentsFooterComponent } from './components/students/students-layout/students-footer/students-footer.component';
import { StudentsNavbarComponent } from './components/students/students-layout/students-navbar/students-navbar.component';
import { StudentsRightSidenavComponent } from './components/students/students-layout/students-right-sidenav/students-right-sidenav.component';
import { StudentsSidenavComponent } from './components/students/students-layout/students-sidenav/students-sidenav.component';
import { TeachersTestsComponent } from './components/teachers/teachers-tests/teachers-tests.component';
import { TeachersAnnouncementsComponent } from './components/teachers/teachers-announcements/teachers-announcements.component';
import { TeachersLecturenotesComponent } from './components/teachers/teachers-lecturenotes/teachers-lecturenotes.component';
import { ToastrModule } from 'ngx-toastr';
import { StudentsLecturenotesComponent } from './components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsReportCardComponent } from './components/students/students-reportcard/students-reportcard.component';
import { StudentsTestsComponent } from './components/students/students-tests/students-tests.component';
import { StudentsLoginComponent } from './components/students/students-login/students-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminLayoutComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    AdminSidenavComponent,
    AdminRightSidenavComponent,
    AdminTeachersComponent,
    AdminStudentsComponent,
    AdminLessonsComponent,
    TeachersComponent,
    TeacherLayoutComponent,
    TeacherSidenavComponent,
    TeacherFooterComponent,
    TeacherNavbarComponent,
    TeacherRightSidenavComponent,
    StudentsLayoutComponent,
    StudentsFooterComponent,
    StudentsNavbarComponent,
    StudentsRightSidenavComponent,
    StudentsSidenavComponent,
    TeachersTestsComponent,
    TeachersAnnouncementsComponent,
    TeachersLecturenotesComponent,
    StudentsLecturenotesComponent,
    StudentsReportCardComponent,
    StudentsTestsComponent,
    StudentsLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
