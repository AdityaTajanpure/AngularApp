import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  message = "demo";

  route_name = "";
  route_city = "";

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.route_name = this.activatedroute.snapshot.paramMap.get("uname");
    this.route_city = this.activatedroute.snapshot.paramMap.get("city");
  }

}
