import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddUserComponent } from './edit-add-user.component';

describe('EditAddUserComponent', () => {
  let component: EditAddUserComponent;
  let fixture: ComponentFixture<EditAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAddUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
