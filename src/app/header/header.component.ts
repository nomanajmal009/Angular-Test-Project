import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  logoutData: any;
  @Input() drawer !: MatDrawer;

  
  constructor(
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
    ) {}

  logoutUser() {
    this.service.logout().subscribe(
      (data) => {
        this.logoutData = data
        console.log(data)
        if(this.logoutData?.status === true){
          this.toastr.success(this.logoutData?.message)
          sessionStorage.removeItem('token')
          return this.router.navigate(['auth'])
        }
        else{
          return this.toastr.error("Not able to Logout User")
        }
    });
  }
}
