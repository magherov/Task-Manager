import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveTaskComponent } from './components/active-task/active-task.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'shell',
    component: ShellComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "welcome", 
    component: WelcomeComponent
  },
  {
    path: "taskActive",
    component: ActiveTaskComponent
  },
  {
    path: "task",
    component: TaskComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
