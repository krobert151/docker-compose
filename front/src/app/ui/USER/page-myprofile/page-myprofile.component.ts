import { Component, OnInit } from '@angular/core';
import { DependientListResponde } from '../../../models/dependient-dtoresponses.module';
import { MyProfileResponse } from '../../../models/my-profile.module';
import { PatientService } from '../../../services/patient.service';


@Component({
  selector: 'app-page-myprofile',
  templateUrl: './page-myprofile.component.html',
  styleUrl: './page-myprofile.component.css'
})
export class PageMyprofileComponent implements OnInit {
  list!: MyProfileResponse[]

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.GetMyFamilyProfileResponse().subscribe(resp => {
      this.list = resp;
    })
  }

}
