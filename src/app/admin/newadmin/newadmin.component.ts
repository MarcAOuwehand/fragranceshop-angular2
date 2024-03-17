import { Component } from '@angular/core';
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrl: './newadmin.component.less'
})
export class NewadminComponent {
  showError = false;
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
    this.loginService.loginError.subscribe((error) => {
      this.showError = error;
    });
  }

  createNewAdmin(){
    const credentials = {
      email: this.email,
      password: this.password,
      role: "ADMIN"
    };

    this.loginService.registerAdmin(credentials);
  }


}
