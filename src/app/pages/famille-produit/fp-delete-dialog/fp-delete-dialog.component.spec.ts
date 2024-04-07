import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpDeleteDialogComponent } from './fp-delete-dialog.component';

describe('FpDeleteDialogComponent', () => {
  let component: FpDeleteDialogComponent;
  let fixture: ComponentFixture<FpDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FpDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FpDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
