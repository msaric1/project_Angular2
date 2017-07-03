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
var auth_service_1 = require("./auth.service");
var user_service_1 = require("./shared/user.service");
var task_service_1 = require("../tasks/shared/task.service");
var user_status_service_1 = require("./shared/user.status-service");
var router_1 = require("@angular/router");
var CreateUserComponent = (function () {
    function CreateUserComponent(authService, router, userService, statusService, taskService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.statusService = statusService;
        this.taskService = taskService;
    }
    CreateUserComponent.prototype.login = function (formValues) {
        this.authService.loginUser(formValues.userName);
        this.router.navigate(['tasks']);
        this.userService.saveUser(formValues);
        if (this.taskService.getTasks().length > 0) {
            for (var i = 0; i < this.taskService.getTasks().length; i++) {
                this.statusService.saveUserStatus(this.userService.getUsers()[(this.userService.getUsers().length) - 1].id, i + 1);
            }
        }
    };
    CreateUserComponent.prototype.ifUserExist = function (username) {
        return this.userService.ifUserExist(username);
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/create-user.component.html',
        styles: ["\n    h1 { padding: 10px 20px;}\n    .body  {  padding: 10px 100px;}\n    input {  border-radius: 15px;border: 1px solid #99A3AE;padding: 3px 10px;}\n    button {  border-radius: 30px;background-color: #6CB7D0;color: #fff}\n    h1 {  font-weight: 300;color: #2B323B;font-size: 28px;letter-spacing: 1px;margin: 30px 0px;}\n    \n  "]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, user_service_1.UserService, user_status_service_1.StatusService, task_service_1.TaskService])
], CreateUserComponent);
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=create-user.component.js.map