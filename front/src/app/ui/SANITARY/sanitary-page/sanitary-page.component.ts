import { Component, OnInit } from '@angular/core';
import { ListSanitaryResponse } from '../../../models/list-of-sanitary';
import { PatientService } from '../../../services/patient.service';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { SanitaryDetailsResponse } from '../../../models/sanitary-details';

@Component({
  selector: 'app-sanitary-page',
  templateUrl: './sanitary-page.component.html',
  styleUrl: './sanitary-page.component.css'
})
export class SanitaryPageComponent implements OnInit {
  sanitary!:ListSanitaryResponse[];
  selectedPatient?:SanitaryDetailsResponse;
  constructor(
    private patientService: PatientService,
    config: NgbOffcanvasConfig,
    private offcanvasService: NgbOffcanvas
  ) {
    config.position = 'end';
    config.backdropClass = 'bg-dark';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.patientService.GetListSanitary().subscribe(response=>{
      this.sanitary=response;
    })
  }
  openOffcanvas(patientDetails: any, patient: ListSanitaryResponse) {
    this.patientService.GetSanitary(patient.email).subscribe(resp => {
      this.selectedPatient = resp;
      this.offcanvasService.open(patientDetails);

    });
  }
  deleteSanitary(uuid: string) {
    this.patientService.DeleteSanitary(uuid).subscribe(() => {
      
      this.patientService.GetListSanitary().subscribe(response => {
        this.sanitary = response;
      });
    });
  }


}
