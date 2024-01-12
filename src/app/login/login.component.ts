import { Component } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  showError = false;
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
    this.loginService.loginError.subscribe((error) => {
      this.showError = error;
    });
  }

  onLogin(): void {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(credentials);
  }

  onRegister(){
    const credentials = {
      email: this.email,
      password: this.password,
      role: "USER"
    };

    this.loginService.register(credentials);
  }

}
