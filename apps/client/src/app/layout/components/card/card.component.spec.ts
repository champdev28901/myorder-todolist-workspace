import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../../../service/http.service';
import { Modal } from '../../../lib/modal';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockEditData = {
    id: '1',
    title: 'title',
    description: 'description',
    create_date: 'Wed Oct 11 2023 01:50:06 GMT+0700 (Indochina Time)',
    update_date: 'Wed Oct 11 2023 01:50:06 GMT+0700 (Indochina Time)',
    source: 'vue',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      declarations: [ CardComponent ],
      providers: [
        HttpService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.imagePath = "assets/images/vue.svg"
    component.todoList = mockEditData
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "11 Oct" for "Wed Oct 11 2023 01:50:06 GMT+0700 (Indochina Time)"', () => {
    component.todoList = mockEditData
    expect(component.onHandleFormatDateToShort(component.todoList.update_date)).toBe('11 Oct');
  });

  it('should return "1:50" for "Wed Oct 11 2023 01:50:06 GMT+0700 (Indochina Time)"', () => {
    component.todoList = mockEditData
    expect(component.onHandleFormatTime(component.todoList.update_date)).toBe('1:50');
  });


});
