import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
ngOnInit(): void {
  this.master.GetDashBoardData().subscribe((res:any)=>{
    this.dash=res
  })
}

dash:any;
master=inject(MasterService)


}
