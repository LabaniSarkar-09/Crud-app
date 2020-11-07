import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { CreateproComponent } from './createpro.component';

describe('CreateproComponent', () => {
  let component: CreateproComponent;
  let fixture: ComponentFixture<CreateproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproComponent ],
      imports: [ReactiveFormsModule, FormsModule, UserdataService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
