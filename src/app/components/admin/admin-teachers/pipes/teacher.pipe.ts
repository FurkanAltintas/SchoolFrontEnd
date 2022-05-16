import { Pipe, PipeTransform } from '@angular/core';
import { TeacherModel } from '../models/teacherModel';

@Pipe({
  name: 'teacherPipe'
})
export class TeacherPipe implements PipeTransform {

  transform(value: any[], filterText:string): any[] {
    if(!filterText) { // Gönderdiğim değer yok ise
      return value;
    }

    return value.filter(p => {
      const name = p.name.toLowerCase().toString().includes(filterText.toLowerCase()) // include => içerisinde arama yapıyor
      const identityNumber = p.identityNumber.toString().includes(filterText) // include => içerisinde arama yapıyor
      const address = p.address.toString().includes(filterText.toLowerCase()) // include => içerisinde arama yapıyor
      const gender = p.gender.toLowerCase().toString().includes(filterText.toLowerCase()) // include => içerisinde arama yapıyor
      return name + identityNumber + address + gender;
    })
  }

}
