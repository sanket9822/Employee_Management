import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
studentobj:any={
  username:"",
  password:'',
}
http=inject(Router)

onsubmit(){
  if(this.studentobj.username=='admin' && this.studentobj.password=='1122'){
   this.http.navigateByUrl('dashboard')
  }else{
    alert('Wrong Credentials')
  }
}


}
