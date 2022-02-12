import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css', '../../app.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  employeeInfo = this.fb.group({
    employeeName : ['',Validators.required],
    employeeEmail:['',[Validators.required,Validators.email]],
    employeePhone:['',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
    employeeDOB:['',Validators.required],
    employeeAddress:this.fb.group({
      employeeStreet:['',Validators.required],
      employeeCity:['',Validators.required],
      employeeState:['',Validators.required],
      employeeCountry:['',Validators.required]
    })
  })

  submitHandler(){
    if(this.employeeInfo.status==='VALID'){
      console.log(this.employeeInfo.value)
      alert("form data is valid, check console for output")
    }else{
      alert("form is invalid")
    }
    
  }

  ngOnInit(): void {
  }

}
