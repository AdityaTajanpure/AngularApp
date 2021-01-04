import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  //1. Create a data source which is array of objects.
  employees: Employee[] = [

    {
      empCode: 101,
      empName: "Employe One",
      empEmail: "employee1@gmail.com",
      empSalary: 10000,
    },

    {
      empCode: 102,
      empName: "Employe Two",
      empEmail: "employee2@gmail.com",
      empSalary: 20000
    },

    {
      empCode: 103,
      empName: "Employe Three",
      empEmail: "employee3@gmail.com",
      empSalary: 30000
    },

    {
      empCode: 104,
      empName: "Employe Four",
      empEmail: "employee4@gmail.com",
      empSalary: 40000
    },

    {
      empCode: 105,
      empName: "Employe Five",
      empEmail: "employee5@gmail.com",
      empSalary: 50000
    }

  ];
  editIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  delteEmployee(index) {

    console.log("Delete button clicked on index : " + index);

    if (confirm("Do you want to delete employee?")) {

      this.employees.splice(index, 1);
      console.log("Employee on index : " + index + " Deleted!");
    }
  }

  onCreateSubmit(frm) {

    console.log("Create form submitted!")
    console.log(frm);

    //Creare an object of tpe Employee from submitted form fields
    let emp: Employee = {

      empCode: Number(frm.value.empCode),
      empName: frm.value.empName,
      empEmail: frm.value.empEmail,
      empSalary: Number(frm.value.empSalary)
    }
    console.log(emp);

    //Insert emp into array
    this.employees.push(emp);
    console.log("Employee Added Succesfully!")

  }

  editEmployee(index) {

    let emp: Employee = this.employees[index];
    console.log(emp);

    //TODO: Fill the form fields with details of emp object

    this.editIndex = index;

  }

  onEditSubmit(frm) {

    console.log(frm);

    //Creare an object of tpe Employee from submitted form fields
    let emp: Employee = {

      empCode: Number(frm.value.editEmpCode),
      empName: frm.value.editEmpName,
      empEmail: frm.value.editEmpEmail,
      empSalary: Number(frm.value.editEmpSalary)
    }
    console.log(emp);

    this.employees[this.editIndex] = emp;
  }
}

