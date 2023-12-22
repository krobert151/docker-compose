import { Component, Input } from '@angular/core';
import { Dependient } from '../../../models/dependient-dtoresponses.module';
import { MyProfileResponse } from '../../../models/my-profile.module';


@Component({
  selector: 'app-dependient',
  templateUrl: './dependient.component.html',
  styleUrl: './dependient.component.css'
})
export class DependientComponent {
  @Input() dependient !: MyProfileResponse;
}
