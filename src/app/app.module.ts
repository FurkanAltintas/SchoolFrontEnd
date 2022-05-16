import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminSidenavComponent } from './components/admin/admin-layout/admin-sidenav/admin-sidenav.component';
import { AdminFooterComponent } from './components/admin/admin-layout/admin-footer/admin-footer.component';
import { AdminRightSidenavComponent } from './components/admin/admin-layout/admin-right-sidenav/admin-right-sidenav.component';
import { AdminNavbarComponent } from './components/admin/admin-layout/admin-navbar/admin-navbar.component';
import { AdminTeachersComponent } from './components/admin/admin-teachers/admin-teachers.component';
import { AdminLessonsComponent } from './components/admin/admin-lessons/admin-lessons.component';
import { AdminClassesComponent } from './components/admin/admin-classes/admin-classes.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherLayoutComponent } from './components/teachers/teacher-layout/teacher-layout.component';
import { TeacherSidenavComponent } from './components/teachers/teacher-layout/teacher-sidenav/teacher-sidenav.component';
import { TeacherNavbarComponent } from './components/teachers/teacher-layout/teacher-navbar/teacher-navbar.component';
import { TeacherFooterComponent } from './components/teachers/teacher-layout/teacher-footer/teacher-footer.component';
import { TeacherRightSidenavComponent } from './components/teachers/teacher-layout/teacher-right-sidenav/teacher-right-sidenav.component';
import { TeachersAnnouncementsComponent } from './components/teachers/teachers-announcements/teachers-announcements.component';
import { TeachersTestsComponent } from './components/teachers/teachers-tests/teachers-tests.component';
import { TeachersLecturenotesComponent } from './components/teachers/teachers-lecturenotes/teachers-lecturenotes.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsLayoutComponent } from './components/students/students-layout/students-layout.component';
import { StudentsNavbarComponent } from './components/students/students-layout/students-navbar/students-navbar.component';
import { StudentsSidenavComponent } from './components/students/students-layout/students-sidenav/students-sidenav.component';
import { StudentsFooterComponent } from './components/students/students-layout/students-footer/students-footer.component';
import { StudentsRightSidenavComponent } from './components/students/students-layout/students-right-sidenav/students-right-sidenav.component';
import { StudentsTestsComponent } from './components/students/students-tests/students-tests.component';
import { StudentsLecturenotesComponent } from './components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsReportCardComponent } from './components/students/students-reportcard/students-reportcard.component';
import { AdminTeacherAddComponent } from './components/admin/admin-teachers/admin-teacher-add/admin-teacher-add.component';
import { TeacherPipe } from './components/admin/admin-teachers/pipes/teacher.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminLayoutComponent,
    AdminSidenavComponent,
    AdminFooterComponent,
    AdminRightSidenavComponent,
    AdminNavbarComponent,
    AdminTeachersComponent,
    AdminSidenavComponent,
    AdminLessonsComponent,
    AdminClassesComponent,
    TeachersComponent,
    TeacherLayoutComponent,
    TeacherSidenavComponent,
    TeacherNavbarComponent,
    TeacherFooterComponent,
    TeacherRightSidenavComponent,
    TeachersAnnouncementsComponent,
    TeachersTestsComponent,
    TeachersLecturenotesComponent,
    StudentsComponent,
    StudentsLayoutComponent,
    StudentsNavbarComponent,
    StudentsSidenavComponent,
    StudentsFooterComponent,
    StudentsRightSidenavComponent,
    StudentsTestsComponent,
    StudentsLecturenotesComponent,
    StudentsReportCardComponent,
    AdminTeacherAddComponent,
    TeacherPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
