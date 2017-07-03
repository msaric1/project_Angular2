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
var router_1 = require("@angular/router");
var user_service_1 = require("./shared/user.service");
var user_status_service_1 = require("./shared/user.status-service");
var task_service_1 = require("../tasks/shared/task.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, statusService, taskService) {
        this.userService = userService;
        this.route = route;
        this.statusService = statusService;
        this.taskService = taskService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser(Number(this.route.snapshot.params['id']));
        this.tasks = this.taskService.getTasks();
    };
    UserDetailComponent.prototype.updateStatus = function (userId, taskId, status) {
        return this.statusService.updateStatus(userId, taskId, status);
    };
    UserDetailComponent.prototype.getStatus = function (userId, taskId) {
        return this.statusService.getStatus(userId, taskId);
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './app/users/user-detail.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, user_status_service_1.StatusService, task_service_1.TaskService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map