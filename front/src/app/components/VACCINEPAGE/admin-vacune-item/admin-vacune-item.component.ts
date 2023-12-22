import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vacune } from '../../../models/vacune.module';

@Component({
  selector: 'app-admin-vacune-item',
  templateUrl: './admin-vacune-item.component.html',
  styleUrl: './admin-vacune-item.component.css'
})
export class AdminVacuneItemComponent {
  @Input() vacune: Vacune | undefined;
  @Output() delete = new EventEmitter<Vacune>();
  @Output() edit = new EventEmitter();

  deleteModal() {
    this.delete.emit(this.vacune);
  }

  editModal() {
    this.edit.emit();
  }
}
