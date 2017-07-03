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
var UserService = (function () {
    function UserService() {
        this.counterId = 1;
        /* searchUsers(searchTerm: string){
            var term = searchTerm.toLocaleLowerCase();
            var results = []
            USERS.forEach(function(user){
               results= results.concat(USERS.filter(function(){
                   user["userId"] = user.id; //session["eventId"] = event.id; pa ne treba ici u model oddatvati taj atribut
                return user.userName.toLocaleLowerCase().indexOf(term) > -1
               }))
            })
            var sendResult = new EventEmitter(true);
            setTimeout(function(){
        sendResult.emit(results);
            }, 0);
          
            return sendResult; // ovo je Oservable object- arry čiji članovi se popunjavaju s vremenom
    
        }*/
    }
    UserService.prototype.getUsers = function () {
        return USERS;
    };
    UserService.prototype.saveUser = function (user) {
        var newUser = {
            userName: user.userName,
            id: this.counterId
        };
        USERS.push(newUser);
        this.counterId = this.counterId + 1;
    };
    UserService.prototype.getUser = function (id) {
        return USERS.find(function (user) {
            return user.id == id;
        });
    };
    UserService.prototype.ifUserExist = function (username) {
        for (var i = 0; i < USERS.length; i++) {
            if (username == USERS[i].userName) {
                return true;
            }
        }
        return false;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
var USERS = [];
//# sourceMappingURL=user.service.js.map