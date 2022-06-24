import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { TaskService } from "src/app/services/task.service";
import { UserService } from "src/app/services/user.service";
import { Attivita, Stato, User } from "src/app/types/types";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  isNewtask: boolean = false;
  taskForm!: FormGroup;

  userList: User[] = [];
  task!: Attivita;
  stati: Stato[] = ["Backlog", "inProgress", "Completata"];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataInput: any,
    private userService: UserService,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskFormComponent>
  ) {
    this.isNewtask = this.dataInput[0] ? this.dataInput[0] : false;

    this.getAllUser();
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      titolo: new FormControl("", Validators.required),
      descrizione: new FormControl("", Validators.required),
      commento: new FormControl(""),
      risorsa: new FormControl("", Validators.required),
      oreLavorate: new FormControl(0),
      oreTotali: new FormControl(0),
      stato: new FormControl("Backlog"),
    });
  }

  getAllUser() {
    this.userService.getAllUserFake().subscribe((result) => {
      this.userList = result;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    this.task = {
      titolo: this.taskForm.get("titolo")?.value,
      descrizione: this.taskForm.get("descrizione")?.value,
      commento: this.taskForm.get("commento")?.value,
      utenteAssegnato: {
        name: "Alessandro",
      },
      totaleOre: this.taskForm.get("oreTotali")?.value,
      oreLavorate: this.taskForm.get("oreLavorate")?.value,
      stato: this.taskForm.get("stato")?.value,
    };

    this.dialogRef.close(this.task);
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
