import { Component, inject, OnInit, signal } from '@angular/core';
import { IProject, IProjectEmployee } from '../../Modal/Interface/master';
import { MasterService } from '../../service/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../Modal/class/Employee';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.css'
})
export class ProjectEmployeeComponent implements OnInit {
  ngOnInit(): void {
    this.getAlldata();
  }

 
  projectEmployeeList = signal<IProjectEmployee[]>([]);

  masterser = inject(MasterService)
  projectList$:Observable<IProject[]>=new Observable<IProject[]>;
  EmpList$:Observable<Employee[]>=new Observable<Employee[]>;

  constructor(){
    this.initializingform();
    this.projectList$=this.masterser.getAllProjects();
    this.EmpList$=this.masterser.getAllEmployee();
  }

  form: FormGroup = new FormGroup({})
  initializingform() {
    this.form = new FormGroup({
      empProjectId: new FormControl(0),
      projectId: new FormControl(0),
      empId: new FormControl(0),
      assignedDate: new FormControl(''),
      role: new FormControl(''),
      isActive: new FormControl(false)
    })
  }


  getAlldata() {
    this.masterser.getProjectEmploye().subscribe((res: IProjectEmployee[]) => {
      this.projectEmployeeList.set(res)
    })
  }

  onSave(){
    const formvalue=this.form.value;
    this.masterser.savegetProjectEmp(formvalue).subscribe(()=>{
      alert("Employee Added To Project Created")
      this.getAlldata();
      this.form.reset();
    },error=>{
      alert('Api Alert')
    })
  }
}
