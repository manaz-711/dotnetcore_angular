import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  // loggedIn:boolean;
  currentUser$:Observable<User>;

  constructor(public accountService:AccountService, private router: Router,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$=this.accountService.currentUser$;
  }
login(){
  this.accountService.login(this.model).subscribe(response=>
    {
      this.router.navigateByUrl('/members');

    },error=>{
      console.log(error);
      this.toaster.error(error.error);
    })
}
logout(){
  // this.loggedIn=false;
  this.accountService.logout();
  this.router.navigateByUrl('/');
}


}
