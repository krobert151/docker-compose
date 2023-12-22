import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryPageComponent } from './sanitary-page.component';

describe('SanitaryPageComponent', () => {
  let component: SanitaryPageComponent;
  let fixture: ComponentFixture<SanitaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanitaryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanitaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
