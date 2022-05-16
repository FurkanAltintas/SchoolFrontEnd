import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './models/teacherModel';
import { TeacherService } from './services/teacher.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.scss']
})
export class AdminTeachersComponent implements OnInit {

  teachers:TeacherModel[] = [];
  filterText:string = "";

  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.teachers = this.teacherService.teachers;
  }

}
