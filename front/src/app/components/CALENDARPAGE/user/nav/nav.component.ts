import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service';
import { patientBasicDataResponse } from '../../../../models/patient-data.interface';
import { AdministrationService } from '../../../../services/administration.service';
import { CalendarResponse } from '../../../../models/calendar-response.module';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  active = 1;
  listCalendar: CalendarResponse[] = [];

  constructor(private patientService: PatientService, private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.administrationService.getCalendarOfMyFamily().subscribe(resp => {
      for (let i = 0; i < resp.length; i++) {
        this.listCalendar.push(resp[i]);
      }
    });
  }
}
