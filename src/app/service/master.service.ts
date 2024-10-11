import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIRESPONSE, IProject, IProjectEmployee } from '../Modal/Interface/master';
import { Employee } from '../Modal/class/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  apiLink:string="https://projectapi.gerasim.in/api/EmployeeManagement/";

  getAllDept():Observable<IAPIRESPONSE>{
    return this.http.get<IAPIRESPONSE>(this.apiLink+"GetParentDepartment")
  }

  getChildDept(deptId:number):Observable<IAPIRESPONSE>{
    return this.http.get<IAPIRESPONSE>(`${this.apiLink}GetChildDepartmentByParentId?deptId=${deptId}`)
  }


  saveEmployee(obje:Employee):Observable<Employee>{
    return this.http.post<Employee>("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser",obje)
  }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiLink+"GetAllEmployees")
  }

  UpdateEmployee(obje:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiLink+"UpdateEmployee/1"+obje.employeeId ,obje)
  }

  deleteEmpbyID(id:number):Observable<IAPIRESPONSE>{
    return this.http.delete<IAPIRESPONSE>(this.apiLink+"DeleteEmployee/1"+id)
  }

  saveProject(obje:Employee):Observable<IProject>{
    return this.http.post<IProject>(this.apiLink+"CreateProject",obje)
  }

  updateProjectEmp(obj: IProjectEmployee): Observable<IProjectEmployee> {
    
    return this.http.put<IProjectEmployee>(this.apiLink + "UpdateProjectEmployee/"+obj.empProjectId, obj);
  }
  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.apiLink + "GetAllProjects");
  }

  getRppjectById(id:number): Observable<IProject> {
    return this.http.get<IProject>(this.apiLink + "/GetProject/"+id);
  }

  getProjectEmploye(){
    return this.http.get<IProjectEmployee[]>(this.apiLink+"GetAllProjectEmployees")
  }
  savegetProjectEmp(obj:IProjectEmployee):Observable<IProjectEmployee>{
    return this.http.post<IProjectEmployee>(this.apiLink+"CreateProjectEmployee",obj)
  }
  updateProjectEmplo(obj:IProjectEmployee):Observable<IProjectEmployee>{
    return this.http.put<IProjectEmployee>(this.apiLink+"UpdateProjectEmployee/1"+obj.empProjectId,obj)
  }

  GetDashBoardData():Observable<any[]>{
    return this.http.get<any[]>(this.apiLink +"GetDashboard")
  }
}
