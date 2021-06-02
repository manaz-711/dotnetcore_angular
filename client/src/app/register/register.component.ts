import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'selenium-webdriver';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  register(){
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error);
      this.toaster.error(error.error);
    })
  }
  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelRegister.emit(false);
  }

}
