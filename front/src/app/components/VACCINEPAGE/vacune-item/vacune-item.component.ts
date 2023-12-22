import { Component, Input } from '@angular/core';
import { Vacune } from '../../../models/vacune.module';

@Component({
  selector: 'app-vacune-item',
  templateUrl: './vacune-item.component.html',
  styleUrl: './vacune-item.component.css'
})
export class VacuneItemComponent {
  @Input() vacune: Vacune | undefined;

}

