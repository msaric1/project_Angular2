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
var task_service_1 = require("../../tasks/shared/task.service");
var user_service_1 = require("./user.service");
var StatusService = (function () {
    function StatusService(taskService, userService) {
        this.taskService = taskService;
        this.userService = userService;
    }
    StatusService.prototype.getUsersStatus = function () {
        return STATUS;
    };
    StatusService.prototype.saveUserStatus = function (userId, taskId) {
        var newStatus = {
            idUser: userId,
            idTask: taskId,
            status: "Not started"
        };
        if (this.ifStatusExist(userId, taskId)) {
            STATUS.push(newStatus);
        }
    };
    StatusService.prototype.ifStatusExist = function (userId, taskId) {
        if (STATUS.length > 0) {
            for (var i = 0; i < (this.userService.getUsers().length - 1); i++) {
                for (var j = 0; j < this.taskService.getTasks().length - 1; j++) {
                    if (STATUS[i].idUser == userId && STATUS[j].idTask == taskId) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    StatusService.prototype.getStatus = function (userId, taskId) {
        if (STATUS.length > 0) {
            for (var i = 0; i < STATUS.length; i++) {
                if (STATUS[i].idUser == userId && STATUS[i].idTask == taskId) {
                    return STATUS[i].status;
                }
            }
        }
    };
    StatusService.prototype.updateStatus = function (userId, taskId, status) {
        for (var i = 0; i < STATUS.length; i++) {
            if (STATUS[i].idUser == userId && STATUS[i].idTask == taskId) {
                STATUS[i].status = status;
            }
        }
    };
    return StatusService;
}());
StatusService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [task_service_1.TaskService, user_service_1.UserService])
], StatusService);
exports.StatusService = StatusService;
var STATUS = [];
//# sourceMappingURL=user.status-service.js.map