import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private logger: LoggerService) { }

  authenticate(username: string, password: string) {

    if (username == "abc" && password == "abc") { //login is correct

      this.logger.logMessage("Login Successfull!")
      return true;
    }

    this.logger.logMessage("Login Failed!")
    return false;
  }
}
