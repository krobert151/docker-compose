import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { MyProfileResponse } from '../../../models/my-profile.module';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {
  constructor(private patientService: PatientService) { }
  profile!: MyProfileResponse;

  ngOnInit(): void {
    this.patientService.GetMyProfilePage().subscribe(resp => {
      this.profile = resp;
    })
  }

}
