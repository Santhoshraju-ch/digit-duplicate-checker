import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{

constructor(private stuservices:StudentService){}

StudentData :any=[];

  ngOnInit(): void {


    this.stuservices.getAllStudent().subscribe((alldata)=>
    {
      console.log(alldata);

      this.StudentData=alldata;
    });
    
  }

  deleteStudent(student_id:any){

    //console.log(student_id);

    this.stuservices.deleteStudent(student_id)
    .subscribe((result)=>{
     // console.log(result);
    this.ngOnInit();
    });

  }

}
