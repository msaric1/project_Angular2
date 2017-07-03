import { Component, OnInit } from '@angular/core'
import { TaskService } from './shared/task.service'
import { ITask } from './shared/task.model'
import { UserService } from '../users/shared/user.service'
import { StatusService } from '../users/shared/user.status-service'
@Component({
    templateUrl: './app/tasks/create-task.component.html'

    ,

    styles: [`
    input {  border-radius: 15px;border: 1px solid #99A3AE;padding: 3px 10px;}
    button {  border-radius: 30px;background-color: #6CB7D0;color: #fff}
    .createtask {  font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}
    .listtasks {  font-weight: 300;color: #2B323B;font-size: 28px;margin: 30px 0px;}
    .bodytasks {padding: 10px 100px;}
    h1 { padding: 10px 20px;}
    em { color: #DF7875;font-size: 15px;margin-left: 10px;}
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::ms-input-placeholder { color: #999; }  
  `]
})

export class CreateTaskComponent implements OnInit {
    tasks: ITask[];
    constructor(private taskService: TaskService, private userService: UserService, private statusService: StatusService) {

    }


    ngOnInit() {
        this.tasks = this.taskService.getTasks()
    }
    
    

    saveTask(formValues) {
        this.taskService.saveTask(formValues);
        if (this.taskService.getTasks().length > 0) {
            for (var i = 0; i < this.userService.getUsers().length; i++) {
                this.statusService.saveUserStatus(i + 1, this.taskService.getTasks().length)
            }
        }
        
    }

    ifTaskExist(taskname) {
        return this.taskService.ifTaskExist(taskname);


    }
     

}