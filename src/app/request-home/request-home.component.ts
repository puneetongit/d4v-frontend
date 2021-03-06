import { BloodReqeustService } from './../core/dataServices/blood-reqeust.service';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../core/typeFiles/blood-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-home',
  templateUrl: './request-home.component.html',
  styleUrls: ['./request-home.component.scss']
})
export class RequestHomeComponent implements OnInit {

  public bloodRequestList: BloodRequest[] = []
  public totalBloodRequests: number
  isNewFormVisible = false
  openforEdit= false
  public formData:BloodRequest
  
  constructor(private dataService: BloodReqeustService, private formBuilderObject: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.dataService.getBloodRequestList().subscribe( dataResponse => {
      this.bloodRequestList = dataResponse as BloodRequest[]
    })
  }

  showBRform(dataFormValue,indexValue){
    if(indexValue == -1)
      this.formData = <BloodRequest>{}
    else
      this.formData = dataFormValue
    this.isNewFormVisible = !this.isNewFormVisible
  }

  removeDialog(){
    
    this.dataService.getBloodRequestList().subscribe( dataResponse => {
      this.bloodRequestList = dataResponse as BloodRequest[]
      this.isNewFormVisible = false;    
    })
  }

}
