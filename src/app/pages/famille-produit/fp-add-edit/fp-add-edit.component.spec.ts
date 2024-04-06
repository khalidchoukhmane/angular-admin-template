import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpAddEditComponent } from './fp-add-edit.component';

describe('FpAddEditComponent', () => {
  let component: FpAddEditComponent;
  let fixture: ComponentFixture<FpAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FpAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
