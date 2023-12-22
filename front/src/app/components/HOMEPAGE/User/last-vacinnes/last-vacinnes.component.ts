import { Component, OnInit } from '@angular/core';
import { LastVaccinesImplementedResponse } from '../../../../models/last-vaccines-implemented-response.module';
import { AdministrationService } from '../../../../services/administration.service';


@Component({
  selector: 'app-last-vacinnes',
  templateUrl: './last-vacinnes.component.html',
  styleUrl: './last-vacinnes.component.css'
})
export class LastVacinnesComponent implements OnInit {
  list!:LastVaccinesImplementedResponse[]
  
  constructor(private administrationService:AdministrationService){}

  ngOnInit(): void {
    this.administrationService.getLastVaccinesIMplemented().subscribe(resp=>{
      this.list=resp;
    })

  }

}
