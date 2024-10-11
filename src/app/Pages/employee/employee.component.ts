import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IAPIRESPONSE, IChildDept, IParentDept } from '../../Modal/Interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Modal/class/Employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
ngOnInit(): void {
  this.getParentDept();
  this.EmployeetList();
  
}

parentDeptList=signal<IParentDept[]>([])
EmployeetList=signal<Employee[]>([])
ChildDeptList=signal<IChildDept[]>([])

masterservice=inject(MasterService)

isFormVisible=signal<boolean>(false);

parentDeptId:number=0;

employeeObj:Employee=new Employee();

getParentDept(){
  this.masterservice.getAllDept().subscribe((res:IAPIRESPONSE)=>{
    this.parentDeptList.set(res.data)
  })
}
getAllEmployee(){
  this.masterservice.getAllEmployee().subscribe((res:Employee[])=>{
    this.EmployeetList.set(res)
  })
}

OnParentDeptChange(){
  this.masterservice.getChildDept(this.parentDeptId).subscribe((Res:IAPIRESPONSE)=>{
   this.ChildDeptList.set(Res.data)
  })
}

onsave(){
  this.masterservice.saveEmployee(this.employeeObj).subscribe((res:Employee)=>{
    alert("SuccessFully Created")
    this.getAllEmployee();
    this.employeeObj=new Employee()
  },error=>{

  })


}

onEdit(data:Employee){
  this.employeeObj=data;
  this.isFormVisible.set(true)
}

onUpdate(){
  this.masterservice.UpdateEmployee(this.employeeObj).subscribe(()=>{
    alert("Employee Update");
    this.getAllEmployee();
    this.employeeObj=new Employee()
  },error=>{
    alert("Api Error")
  })
}

onDelete(id:number){
 const iddeete=confirm("Are you Want to Delete");
 if(iddeete){
  this.masterservice.deleteEmpbyID(id).subscribe((res:IAPIRESPONSE)=>{
    alert("Employee Deleted");
    this.getAllEmployee()
  },error=>{
    alert('api Error')
  })
 }
}

}
