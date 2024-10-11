import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProject } from '../../Modal/Interface/master';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  ngOnInit(): void {
    this.getProjects()
  }
  projectList:IProject[]=[]
  masterserv=inject(MasterService)
  router=inject(Router)
  

  getProjects() {
    this.masterserv.getAllProjects().subscribe((Res: IProject[])=>{
      this.projectList =  Res;
    })
  }

  onEdit(id:number){
  this.router.navigate(['new-project',id])
  }
  onDelete(id:number){

  }

}
