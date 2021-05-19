import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  register(){
    console.log(this.model);
  }
  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelRegister.emit(false);
  }

}
