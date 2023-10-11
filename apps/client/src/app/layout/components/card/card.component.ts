import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditTodoList, ToDoList } from '../../../models/todoList.model';
import { HttpService } from '../../../service/http.service';
import { Modal } from '../../../lib/modal';
import { IconModal } from '../../../utils/modal.confg';

@Component({
  selector: 'myorderworkspace-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() todoList!: ToDoList
  @Output() emitTriggerUpdate = new EventEmitter<boolean>();
  @Output() emitTriggerEdit = new EventEmitter<EditTodoList>();

  imagePath?: string;

  constructor(private httpService: HttpService) { }


  onHandleFormatDateToShort(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  onHandleFormatTime(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  ngOnInit(): void {
    this.imagePath = `assets/images/${this.todoList?.source}.svg`;
  }

  onDelete(item: ToDoList) {
    Modal({ icon: IconModal.warning, text: `are you sure for delete ${item.title} ?`, isShowCancel: true })
      .then((state) => {
        if (state.isConfirmed) {
          this.httpService.removeTodo(item.id).subscribe(async (data) => {
            if (data.resStatus === "OK") {
              await Modal({ icon: IconModal.success, text: data.resMessage }).then(
                (state) => {
                  if (state.isConfirmed) {
                    this.emitTriggerUpdate.emit(true)
                  }
                }
              );
              return;
            } else {
              await Modal({ icon: IconModal.error, text: data.resMessage });
              return;
            }
          })

        }
      })
  }

  onEdit(item: ToDoList) {
    this.emitTriggerEdit.emit({ isEdit: true, ...item })
  }

  get borderClass() {
    return this.todoList?.source ? `bg-${this.todoList?.source}-100` : '';
  }

}
