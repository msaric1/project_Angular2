"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("./shared/task.service");
var user_service_1 = require("./../users/shared/user.service");
var user_status_service_1 = require("../users/shared/user.status-service");
var TasksListComponent = (function () {
    function TasksListComponent(taskService, userService, statusService) {
        this.taskService = taskService;
        this.userService = userService;
        this.statusService = statusService;
    }
    TasksListComponent.prototype.ngOnInit = function () {
        this.tasks = this.taskService.getTasks();
        this.users = this.userService.getUsers();
    };
    TasksListComponent.prototype.getStatus = function (userId, taskId) {
        return this.statusService.getStatus(userId, taskId);
    };
    return TasksListComponent;
}());
TasksListComponent = __decorate([
    core_1.Component({
        templateUrl: './app/tasks/tasks-list.component.html',
        styles: [".setinline {display:table;width:100%;margin-bottom:-10px;}\n              .setinline li {display:table-cell;font-size:15px;}\n              .set-div {width:100%}\n              .user_list {list-style-type:none;}\n              .content {  padding: 10px 100px;}\n              .counter {font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}\n              .blue {color:blue !important;}\n              .green {color:green !important;}\n              .orange {color:orange !important;}\n              .red {color:red !important;}\n              "]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, user_service_1.UserService, user_status_service_1.StatusService])
], TasksListComponent);
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasks-list.component.js.map