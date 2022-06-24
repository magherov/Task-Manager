import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Attivita, Stato, User } from 'src/app/types/types';
import { TaskFormComponent } from '../forms/task-form/task-form.component';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { noop } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
});

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Attivita | null = null;
  @Output() edit = new EventEmitter<Attivita>();

  taskList: Attivita[] = [];
  userList: User[] = [];
  newTask!: Attivita;
  isNewtask = false;
  statiTask: Stato[] = ['Backlog', 'inProgress', 'Completata'];

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {
    this.getUser();
  }

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.taskService.getAllTaskFake().subscribe({
      next: (res) => (this.taskList = res),
      error: () => noop,
      complete: () => noop,
    });
  }

  getUser() {
    this.userService.getAllUserFake().subscribe({
      next: (res) => (this.userList = res),
      error: () => noop,
      complete: () => noop,
    });
  }

  openModalAddTask() {
    //quando si inserisce un nuovo task
    this.dialog
      .open(TaskFormComponent, {
        width: '55%',
        height: '50%',
        data: [(this.isNewtask = true)],
      })
      .afterClosed()
      .subscribe((res: Attivita) => {
        if (res) {
          this.newTask = res;
          this.taskService.inserTaskFake(this.newTask).subscribe({
            next: (res) => this.notification.notificationSuccesEvent(),
            error: () => this.notification.notificationErroEvent(),
            complete: noop,
          });
        } else {
          this.notification.notificationCancelEvent();
          console.log(res);
        }
      });
  }

  searchTask(utente?: string ) {
    this.taskService.getTaskByUser(utente!).subscribe({
      next: (res) => {
        this.taskList = res;
      },
    });
  }
}
