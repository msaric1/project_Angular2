import {Component} from '@angular/core'


@Component({
    selector:'tasks-app',
    template: `
    <nav-bar></nav-bar><br>
    <br><router-outlet></router-outlet>
    `

})

export class TasksAppComponent{

}