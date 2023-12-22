import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacuneItemComponent } from './admin-vacune-item.component';

describe('AdminVacuneItemComponent', () => {
  let component: AdminVacuneItemComponent;
  let fixture: ComponentFixture<AdminVacuneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVacuneItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVacuneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
