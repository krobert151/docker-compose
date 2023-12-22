import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesPageComponent } from './vaccines-page.component';

describe('VaccinesPageComponent', () => {
  let component: VaccinesPageComponent;
  let fixture: ComponentFixture<VaccinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaccinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
