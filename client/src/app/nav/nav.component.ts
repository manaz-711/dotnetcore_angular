import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  // loggedIn:boolean;
  currentUser$:Observable<User>;

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$=this.accountService.currentUser$;
  }
login(){
  this.accountService.login(this.model).subscribe(response=>
    {
      console.log(JSON.stringify(response));

    },error=>{
      console.log(error);
    })
}
logout(){
  // this.loggedIn=false;
  this.accountService.logout();

}


}
