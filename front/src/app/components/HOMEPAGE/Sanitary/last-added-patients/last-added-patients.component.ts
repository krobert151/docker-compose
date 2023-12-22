import { Component, OnInit } from '@angular/core';
import { PatientInfoOnTableMainResponse } from '../../../../models/pantient-info-on-sanitary-main.module';
import { PatientService } from '../../../../services/patient.service';

@Component({
  selector: 'app-last-added-patients',
  templateUrl: './last-added-patients.component.html',
  styleUrl: './last-added-patients.component.css'
})
export class LastAddedPatientsComponent implements OnInit {
  patients!: PatientInfoOnTableMainResponse[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.GetLastAddedPatients().subscribe(resp => {
      this.patients = resp
    })
  }
}
