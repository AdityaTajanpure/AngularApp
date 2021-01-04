import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1 = "";
  num2 = "";
  result = "";

  num1Err = "";
  num2Err = "";

  operate(optr) {

    this.num1Err = "";
    this.num2Err = "";

    if (this.num1 == "") {

      this.num1Err = "Please enter num1";
    }
    else if (this.num2 == "") {

      this.num2Err = "Please enter num2";
    }
    else {

      if (optr == "+")
        this.result = String(Number(this.num1) + Number(this.num2));
      else if (optr == "-")
        this.result = String(Number(this.num1) - Number(this.num2));
      else if (optr == "*")
        this.result = String(Number(this.num1) * Number(this.num2));
      else if (optr == "/")
        this.result = String(Number(this.num1) / Number(this.num2));
    }

  }


}
