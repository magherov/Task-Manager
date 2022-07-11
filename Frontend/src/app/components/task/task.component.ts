import {
  Component, EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  BehaviorSubject, noop,
  of,
  Subscription,
  switchMap
} from "rxjs";
import { NotificationService } from "src/app/services/notification.service";
import { TaskService } from "src/app/services/task.service";
import { UserService } from "src/app/services/user.service";
import { Attivita, StatoTypeEnum, User } from "src/app/types/types";
import { TaskFormComponent } from "../forms/task-form/task-form.component";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() task: Attivita | null = null;
  @Output() edit = new EventEmitter<Attivita>();

  isNotResult: boolean | null;
  counter = new BehaviorSubject<number>(0);
  counterNumber: number = 20;
  subs = new Subscription();

  taskList: Attivita[] = [];
  userList: User[] = [];
  newTask!: Attivita;
  isNewtask = false;
  statiTask = StatoTypeEnum;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.getTask();
    this.getUser();
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
    //Add new task
    this.subs.add(
      this.dialog
        .open(TaskFormComponent, {
          data: [(this.isNewtask = true)],
        })
        .afterClosed()
        .pipe(
          switchMap((result) => {
            if (result) {
              this.newTask = result;
              return this.taskService.inserTaskFake(this.newTask);
            } else {
              return of(null);
            }
          })
        )
        .subscribe({
          next: (res) => {
            this.isNotResult = res
            res != null ? this.notification.notificationSuccesEvent(): noop;
          },
          error: () => this.notification.notificationErroEvent(),
          complete: () =>  this.isNotResult ? this.getTask() : noop
        })
    );
  }

  searchTask(utente?: string) {
    this.taskService.getTaskByUser(utente!).subscribe({
      next: (res) => {
        this.taskList = res;
      },
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
