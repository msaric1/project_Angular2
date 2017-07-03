"use strict";
var tasks_list_component_1 = require("./tasks/tasks-list.component");
var create_task_component_1 = require("./tasks/create-task.component");
var create_user_component_1 = require("./users/create-user.component");
var user_detail_component_1 = require("./users/user-detail.component");
exports.appRoutes = [
    { path: 'tasks', component: tasks_list_component_1.TasksListComponent },
    { path: 'tasks/create', component: create_task_component_1.CreateTaskComponent },
    { path: 'users/create', component: create_user_component_1.CreateUserComponent },
    { path: 'users/:id', component: user_detail_component_1.UserDetailComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map