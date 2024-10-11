import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../Modal/class/Employee';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';
import { IProject } from '../../Modal/Interface/master';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {

projectForm:FormGroup=new FormGroup({})
emplLis$:Observable<Employee[]>=new Observable<[]>

masterser=inject(MasterService)
activatedroute=inject(ActivatedRoute)


constructor(){
  this.initializzingForm();
  this.emplLis$=this.masterser.getAllEmployee();
  this.activatedroute.params.subscribe((res:any)=>{
    if(res.id!=0){
     this.getPRoject(res.id)
    }
  })
}
initializzingForm(data?:IProject){
this.projectForm=new FormGroup({
  projectId :new FormControl(data ? data.projectId:0),
  projectName:new FormControl(data ? data.projectId:''),
  clientName:new FormControl(data ? data.projectId:''),
  startDate:new FormControl(data ? data.projectId:''),
  leadByEmpId:new FormControl(data ? data.projectId:''),
  contactPerson:new FormControl(data ? data.projectId:''),
  contactNo:new FormControl(data ? data.projectId:''),

  emailId:new FormControl(data ? data.projectId:'')
})
}


getPRoject(id:number){
  this.masterser.getRppjectById(id).subscribe((res:IProject)=>{
    this.initializzingForm(res)
  },error=>{
    alert('Api Error')
  })
}

onSaveProject(){
  const formValue=this.projectForm.value;
  this.masterser.saveProject(formValue).subscribe((res:IProject)=>{
    alert("Project Created")
    this.projectForm.reset()
  },errors=>{
    alert('Api Error')
  })
}

onupdate(){
  const formValue=this.projectForm.value;
  this.masterser.updateProjectEmp(formValue).subscribe(()=>{
    alert("Project Update")
    this.projectForm.reset()
  },errors=>{
    alert('Api Error')
  })
}

}

