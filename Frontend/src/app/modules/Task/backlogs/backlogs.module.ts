import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "src/app/components/task/task.component";
import { MaterialModule } from "../../material/material.module";
import { TaskFormComponent } from "src/app/components/forms/task-form/task-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, TaskFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [TaskComponent, TaskFormComponent]
})
export class BacklogsModule {}
