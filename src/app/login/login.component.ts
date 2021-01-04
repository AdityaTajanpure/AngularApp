import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  usernameError = "";
  passwordError = "";
  isLogin = 0;

  constructor(private logger: LoggerService, private login: LoginService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    console.log("Login button has clicked!")

    //Initialize error messages as blank
    this.usernameError = "";
    this.passwordError = "";

    //console.log("Error messages are cleared!")
    this.logger.logMessage("Error messages are cleared!");

    if (this.username == "") { //Check if username is blank

      this.usernameError = "Please enter username";
      //console.log("Username is blank!")
      this.logger.logMessage("Error messages are cleared!");
    }
    else if (this.password == "") { //check if password is blank

      this.passwordError = "Please enter password";
      //console.log("Password is blank!")
      this.logger.logMessage("Password is blank!");
    }
    else { //username and password both are not blank

      //console.log("Username and Password both are not blank!")
      this.logger.logMessage("Username and Password both are not blank!");

      //Check login
      if (this.login.authenticate(this.username, this.password)) { //login is correct

        //login success
        this.isLogin = 1;
      }
      else { //login details are in-correct

        //login failed
        this.isLogin = 2;
      }
    }
  }

}
