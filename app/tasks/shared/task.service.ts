import { Injectable } from '@angular/core'
import { ITask } from './task.model'

@Injectable()

export class TaskService {
    counterId : number = 1 ;

    getTasks(): ITask[] {
        return TASKS;
         
    
    }
 

    saveTask(task) {
        var newTask : ITask = {
            name : task.name,
            description : task.description,
            id : this.counterId
        }
        TASKS.push(newTask);
     this.counterId = this.counterId + 1 ;
    }
   

    ifTaskExist(taskname){
        for (var i = 0; i < TASKS.length; i++){
            if (taskname == TASKS[i].name){
                return true
            }

        }
        return false
        

    }

   
}

const TASKS: ITask[] = [];