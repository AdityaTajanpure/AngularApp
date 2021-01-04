import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  showIf = false;
  num = 11;

  cities = ["Nashik", "Pune", "Mumbai", "Nagar", "Solapur", "Jalgaon", "ABad"];

  digit = 15;

  colorVal = "";

  pColor = "red";
  bgColor = "pink";

  isRed = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {

    this.pColor = this.colorVal;
  }

}
