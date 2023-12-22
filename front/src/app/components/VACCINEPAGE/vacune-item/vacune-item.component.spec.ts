import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuneItemComponent } from './vacune-item.component';

describe('VacuneItemComponent', () => {
  let component: VacuneItemComponent;
  let fixture: ComponentFixture<VacuneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacuneItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacuneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
