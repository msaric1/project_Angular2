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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var tasks_app_component_1 = require("./tasks-app.component");
var tasks_list_component_1 = require("./tasks/tasks-list.component");
var navbar_component_1 = require("./nav/navbar.component");
var create_task_component_1 = require("./tasks/create-task.component");
var create_user_component_1 = require("./users/create-user.component");
var user_detail_component_1 = require("./users/user-detail.component");
var task_service_1 = require("./tasks/shared/task.service");
var auth_service_1 = require("./users/auth.service");
var user_service_1 = require("./users/shared/user.service");
var user_status_service_1 = require("./users/shared/user.status-service");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)],
        declarations: [tasks_app_component_1.TasksAppComponent,
            tasks_list_component_1.TasksListComponent,
            navbar_component_1.NavBarComponent,
            create_task_component_1.CreateTaskComponent,
            create_user_component_1.CreateUserComponent,
            user_detail_component_1.UserDetailComponent],
        bootstrap: [tasks_app_component_1.TasksAppComponent],
        providers: [task_service_1.TaskService, auth_service_1.AuthService, user_service_1.UserService, user_status_service_1.StatusService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map