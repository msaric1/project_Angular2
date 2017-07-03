import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserService } from './shared/user.service'
import { StatusService } from './shared/user.status-service'
import { TaskService } from '../tasks/shared/task.service'
import { ITask } from '../tasks/shared/task.model'
import {IStatus} from './shared/user.status-model'


@Component({
    templateUrl: './app/users/user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
    user: any
    tasks: ITask[]
    constructor(private userService: UserService, private route: ActivatedRoute, private statusService: StatusService, private taskService: TaskService) {

    }

    ngOnInit() {
        this.user = this.userService.getUser(Number(this.route.snapshot.params['id']))
        this.tasks = this.taskService.getTasks()
    }
    updateStatus(userId, taskId, status) {
        return this.statusService.updateStatus(userId, taskId, status)
    }
     

    getStatus(userId, taskId) {
       return this.statusService.getStatus(userId,taskId);
}
}