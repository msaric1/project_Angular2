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
var user_service_1 = require("../users/shared/user.service");
var user_status_service_1 = require("../users/shared/user.status-service");
var CreateTaskComponent = (function () {
    function CreateTaskComponent(taskService, userService, statusService) {
        this.taskService = taskService;
        this.userService = userService;
        this.statusService = statusService;
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
        this.tasks = this.taskService.getTasks();
    };
    CreateTaskComponent.prototype.saveTask = function (formValues) {
        this.taskService.saveTask(formValues);
        if (this.taskService.getTasks().length > 0) {
            for (var i = 0; i < this.userService.getUsers().length; i++) {
                this.statusService.saveUserStatus(i + 1, this.taskService.getTasks().length);
            }
        }
    };
    CreateTaskComponent.prototype.ifTaskExist = function (taskname) {
        return this.taskService.ifTaskExist(taskname);
    };
    return CreateTaskComponent;
}());
CreateTaskComponent = __decorate([
    core_1.Component({
        templateUrl: './app/tasks/create-task.component.html',
        styles: ["\n    input {  border-radius: 15px;border: 1px solid #99A3AE;padding: 3px 10px;}\n    button {  border-radius: 30px;background-color: #6CB7D0;color: #fff}\n    .createtask {  font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}\n    .listtasks {  font-weight: 300;color: #2B323B;font-size: 28px;margin: 30px 0px;}\n    .bodytasks {padding: 10px 100px;}\n    h1 { padding: 10px 20px;}\n    em { color: #DF7875;font-size: 15px;margin-left: 10px;}\n    .error input { background-color:#E3C3C5; }\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error ::ms-input-placeholder { color: #999; }  \n  "]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, user_service_1.UserService, user_status_service_1.StatusService])
], CreateTaskComponent);
exports.CreateTaskComponent = CreateTaskComponent;
//# sourceMappingURL=create-task.component.js.map