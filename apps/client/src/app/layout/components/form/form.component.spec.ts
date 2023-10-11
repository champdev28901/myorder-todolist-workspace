import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormComponent } from './form.component';
import { HttpService } from '../../../service/http.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const mockEditData = {
    isEdit: true,
    id: '1',
    title: 'title',
    description: 'description',
    create_date: 'create_date',
    update_date: 'update_date',
    source: 'source',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule ],
      declarations: [ FormComponent ],
      providers: [HttpService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display "Create" message when isEdit is false', () => {
    component.editData = mockEditData;
    component.editData.isEdit = false
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement.textContent).toContain('Create');
  });

  it('should display "Update : [title]" message when isEdit is true', () => {
    component.editData = mockEditData;
    component.editData.isEdit = true
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement.textContent).toContain('Update : title');
  });

});
