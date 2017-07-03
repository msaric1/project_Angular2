import { Component, EventEmitter, Output } from '@angular/core'
import { AuthService } from './auth.service'
import { UserService } from './shared/user.service'
import { TaskService } from '../tasks/shared/task.service'
import { StatusService } from './shared/user.status-service'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/users/create-user.component.html',

    styles:

    [`
    h1 { padding: 10px 20px;}
    .body  {  padding: 10px 100px;}
    input {  border-radius: 15px;border: 1px solid #99A3AE;padding: 3px 10px;}
    button {  border-radius: 30px;background-color: #6CB7D0;color: #fff}
    h1 {  font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}
    
  `]

})

export class CreateUserComponent {
    constructor(private authService: AuthService, private router: Router, private userService: UserService, private statusService: StatusService, private taskService: TaskService) { }
  

    login(formValues) {
        this.authService.loginUser(formValues.userName);
        this.router.navigate(['tasks']);
        this.userService.saveUser(formValues);
        if (this.taskService.getTasks().length > 0) {
            for (var i = 0; i < this.taskService.getTasks().length; i++) {
                this.statusService.saveUserStatus(this.userService.getUsers()[
                    (this.userService.getUsers().length) - 1].id, i + 1)
            }
        }
       
    }

    ifUserExist(username) {
        return this.userService.ifUserExist(username);
       
    }
      
}
