import { Component, OnInit } from '@angular/core';
import { PatientInfoOnTableMainResponse } from '../../../../models/pantient-info-on-sanitary-main.module';
import { PatientService } from '../../../../services/patient.service';


@Component({
  selector: 'app-youngest-patients',
  templateUrl: './youngest-patients.component.html',
  styleUrl: './youngest-patients.component.css'
})
export class YoungestPatientsComponent implements OnInit {
  patients!: PatientInfoOnTableMainResponse[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.GetYoungestPatients().subscribe(resp => {
      console.log(resp)
      this.patients = resp
    })
  }
}
