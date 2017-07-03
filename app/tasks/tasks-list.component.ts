import { Component, OnInit } from '@angular/core'
import { TaskService } from './shared/task.service'
import { UserService } from './../users/shared/user.service'
import { ITask } from './shared/task.model'
import { IUser } from './../users/shared/user.model'
import { StatusService } from '../users/shared/user.status-service'

@Component({
    templateUrl: './app/tasks/tasks-list.component.html'


    , styles: [`.setinline {display:table;width:100%;margin-bottom:-10px;}
              .setinline li {display:table-cell;font-size:15px;}
              .set-div {width:100%}
              .user_list {list-style-type:none;}
              .content {  padding: 10px 100px;}
              .counter {font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}
              .blue {color:blue !important;}
              .green {color:green !important;}
              .orange {color:orange !important;}
              .red {color:red !important;}
              `]

})

export class TasksListComponent implements OnInit {
    tasks: ITask[]
    users: IUser[]
    constructor(private taskService: TaskService, private userService: UserService, private statusService: StatusService) {

    }

    ngOnInit() {
        this.tasks = this.taskService.getTasks();
        this.users = this.userService.getUsers();
    }
    getStatus(userId, taskId) {
        return this.statusService.getStatus(userId, taskId)

    }
}