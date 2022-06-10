import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attivita } from 'src/app/types/types';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../forms/task-form/task-form.component';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.scss']
})
export class ActiveTaskComponent implements OnInit {

  todo: Attivita[] = [
    {
      pk: 0,
      titolo: "Corso Angular",
      descrizione: "imparare angular",
      stato: 'Backlog'
    },
    {
      pk: 1,
      titolo: "Corso React",
      descrizione: "imparare React",
      stato: 'Backlog'
    }
  ]

  inProgress: Attivita[] = [];
  done: Attivita[] = [];
  isNewtask: boolean = false;


 


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  editTask(list: string, task: Attivita){

  }

  drop(event: CdkDragDrop<Attivita[]>){
    if(event.previousContainer === event.container){
      return;
    }

    if(!event.container.data || !event.previousContainer.data){
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }

  openModalAddTask(){
    //quando si inserisce un nuovo task
    this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: this.isNewtask = true
    })
  }
  

}
