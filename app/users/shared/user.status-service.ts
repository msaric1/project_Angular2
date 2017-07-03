import { Injectable } from '@angular/core'
import { TaskService } from '../../tasks/shared/task.service'
import { UserService } from './user.service'
import { IStatus } from './user.status-model'

@Injectable()
export class StatusService {
    constructor(private taskService: TaskService, private userService: UserService) {


    }
    getUsersStatus() {
        return STATUS;

    }
    saveUserStatus(userId, taskId) {
        var newStatus: IStatus = {
            idUser: userId,
            idTask: taskId,
            status: "Not started"

        }

        if (this.ifStatusExist(userId, taskId)) {
            STATUS.push(newStatus)

        }

    }

    ifStatusExist(userId, taskId) {
        if (STATUS.length > 0) {
            for (var i = 0; i < (this.userService.getUsers().length - 1); i++) {
                for (var j = 0; j < this.taskService.getTasks().length - 1; j++) {
                    if (STATUS[i].idUser == userId && STATUS[j].idTask == taskId) {
                        return false
                    }
                }
            }
        }
        return true
    }
    getStatus(userId, taskId) {
        if (STATUS.length > 0) {
            for (var i = 0; i < STATUS.length; i++) {
                if (STATUS[i].idUser == userId && STATUS[i].idTask == taskId) {
                    return STATUS[i].status
                }
            }
        }
    }
    updateStatus(userId, taskId, status) {
        for (var i = 0; i < STATUS.length; i++) {
            if (STATUS[i].idUser == userId && STATUS[i].idTask == taskId) {
                STATUS[i].status = status;
            }
        }


    }
}
const STATUS: IStatus[] = []



