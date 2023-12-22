import { Component, OnInit } from '@angular/core';
import { CalendarMomentService } from '../../../../services/calendar-moment.service';
import { NextVaccinesToImplement } from '../../../../models/next-vaccines-to-implement.module';

@Component({
  selector: 'app-next-vacinnes',
  templateUrl: './next-vacinnes.component.html',
  styleUrl: './next-vacinnes.component.css'
})
export class NextVacinnesComponent implements OnInit{
  list!:NextVaccinesToImplement[];

  constructor(private calendarMomentService:CalendarMomentService){}

  ngOnInit(): void {
    this.calendarMomentService.getNextVaccinesToImplement().subscribe(resp=>{
      this.list=resp;
    })
  }
}
