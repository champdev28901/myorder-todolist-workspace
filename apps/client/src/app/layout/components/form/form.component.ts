import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditTodoList, ToDoList } from '../../../models/todoList.model';
import { HttpService } from '../../../service/http.service';
import { Modal } from '../../../lib/modal';
import { IconModal } from '../../../utils/modal.confg';


@Component({
  selector: 'myorderworkspace-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Output() emitTriggerEdit = new EventEmitter<EditTodoList>();
  @Output() emitTriggerUpdate = new EventEmitter<boolean>();
  @Output() emitTriggerId = new EventEmitter<string>();
  @Input() dataFrom!: ToDoList
  @Input() editData?: EditTodoList;
  updateForm!: FormGroup;
  isInvalid = false;

  constructor(private fb: FormBuilder, private httpService: HttpService) { }


  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      source: this.fb.control(null, Validators.required),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["editData"]?.currentValue !== undefined) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { title, description, source } = changes["editData"]?.currentValue
      this.updateForm.setValue({
        title: title,
        description: description,
        source: source,
      })
    }
  }

  onCancel() {
    this.isInvalid = false;
    this.updateForm.reset()
    this.emitTriggerEdit.emit({ isEdit: false, ...this.updateForm.value })
  }


  onSubmit() {
    this.isInvalid = true
    if (this.updateForm.valid) {
      const body = this.updateForm.value
      if (this.editData?.isEdit) {
        this.httpService.updateTodo(body, this.editData?.id).subscribe(async (data) => {
          if (data.resStatus === "OK") {
            await Modal({ icon: IconModal.success, text: data.resMessage }).then(
              (state) => {
                if (state.isConfirmed) {
                  this.emitTriggerUpdate.emit(true)
                  // this.emitTriggerEdit.emit(false)
                }
              }
            );
            return;
          } else {
            await Modal({ icon: IconModal.error, text: data.resMessage });
            return;
          }
        })
      } else {

        this.httpService.createTodo(body).subscribe(async (data) => {
          if (data.resStatus === "OK") {
            await Modal({ icon: IconModal.success, text: data.resMessage }).then(
              (state) => {
                if (state.isConfirmed) {
                  this.emitTriggerUpdate.emit(true)
                  // this.emitTriggerEdit.emit(false)
                  this.onCancel()
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

      // const body = this.updateForm.value
      // this.httpService.fetchUpdateTodo(body, id).subscribe(async (data) => {
      //   if (data.resStatus === "OK") {
      //     await Modal({ icon: IconModal.success, text: data.resMessage }).then(
      //       (state) => {
      //         if (state.isConfirmed) {
      //           this.emitTriggerUpdate.emit(true)
      //           this.emitTriggerEdit.emit(false)
      //         }
      //       }
      //     );
      //     return;
      //   } else {
      //     await Modal({ icon: IconModal.error, text: data.resMessage });
      //     return;
      //   }
      // })
    }
  }

}
