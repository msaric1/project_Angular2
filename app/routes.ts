import { Routes } from '@angular/router'
import { TasksListComponent } from './tasks/tasks-list.component'
import { CreateTaskComponent } from './tasks/create-task.component'
import { CreateUserComponent } from './users/create-user.component'
import { UserDetailComponent } from './users/user-detail.component'


export const appRoutes: Routes = [
    { path: 'tasks', component: TasksListComponent },
    { path: 'tasks/create', component: CreateTaskComponent },
    { path: 'users/create', component: CreateUserComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
]