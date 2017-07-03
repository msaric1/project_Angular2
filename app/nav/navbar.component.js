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
var auth_service_1 = require("./../users/auth.service");
var user_service_1 = require("./../users/shared/user.service");
var NavBarComponent = (function () {
    function NavBarComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: ["\n             .nav.navbar-nav {font-size:12px;font-weight:bold;  background-color: #fff;}\n             .navbar .navbar-nav {display: inline-block;\n                                 float: none;\n                                 vertical-align: top;\n                                 background-color: #fff;\n                                 }\n            .navbar .navbar-collapse {text-align: center;  background-color: #fff;}\n            .navbar-brand {color:#31B0D5;font-size:20px;font-weight:bold;  background-color: #fff;}\n            "]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map