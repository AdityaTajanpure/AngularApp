import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  txtNameVal = "";
  txtEmailVal = "";
  txtMobileVal = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frm) {

    console.log("Form is submitted!");

    console.log(frm);

    this.txtNameVal = frm.value.txtName;
    this.txtEmailVal = frm.value.txtEmail;
    this.txtMobileVal = frm.value.txtMobile;
  }

}
