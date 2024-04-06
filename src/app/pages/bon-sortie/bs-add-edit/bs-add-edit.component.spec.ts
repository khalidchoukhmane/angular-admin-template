import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAddEditComponent } from './bs-add-edit.component';

describe('BsAddEditComponent', () => {
  let component: BsAddEditComponent;
  let fixture: ComponentFixture<BsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BsAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
