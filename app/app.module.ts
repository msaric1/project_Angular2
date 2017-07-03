import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {TasksAppComponent} from './tasks-app.component'
import {TasksListComponent} from './tasks/tasks-list.component'
import {NavBarComponent} from './nav/navbar.component'
import {CreateTaskComponent} from './tasks/create-task.component'
import {CreateUserComponent} from './users/create-user.component'
import{UserDetailComponent} from './users/user-detail.component'
import {TaskService} from './tasks/shared/task.service'
import {AuthService} from './users/auth.service'
import {UserService} from './users/shared/user.service'
import {StatusService} from './users/shared/user.status-service'
import {appRoutes} from './routes'

@NgModule({
    imports: [BrowserModule,
              FormsModule,
              RouterModule.forRoot(appRoutes)],
    declarations: [TasksAppComponent,
                   TasksListComponent,
                   NavBarComponent,
                   CreateTaskComponent,
                   CreateUserComponent, 
                   UserDetailComponent],
    bootstrap: [TasksAppComponent],
    providers:[TaskService,AuthService,UserService, StatusService]

})

export class AppModule{

}
