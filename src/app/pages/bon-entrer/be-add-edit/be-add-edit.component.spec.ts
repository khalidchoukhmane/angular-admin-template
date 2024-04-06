import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAddEditComponent } from './be-add-edit.component';

describe('BeAddEditComponent', () => {
  let component: BeAddEditComponent;
  let fixture: ComponentFixture<BeAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
