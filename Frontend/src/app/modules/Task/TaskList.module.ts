import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskFormComponent } from "src/app/components/forms/task-form/task-form.component";
import { TaskComponent } from "src/app/components/task/task.component";
import { MaterialModule } from "../material/material.module";
import { TaskListRoutingModule } from "./TaskList-routing.module";

@NgModule({
  declarations: [TaskComponent, TaskFormComponent],
  imports: [MaterialModule, ReactiveFormsModule, TaskListRoutingModule],
  exports: [TaskComponent, TaskFormComponent],
})
export class TaskListModule {}
