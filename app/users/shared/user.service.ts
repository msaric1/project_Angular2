import {Injectable, EventEmitter} from '@angular/core'
import {IUser} from './user.model'

@Injectable()

export class UserService{
    counterId : number = 1;
    getUsers():IUser[]{
        return USERS;
    }

    saveUser(user){
        var newUser : IUser = {
            userName: user.userName,
            id: this.counterId
        }
        USERS.push(newUser);
        this.counterId = this.counterId + 1 ;
    }
getUser(id:number){
    return USERS.find(function(user){
        return user.id == id;
    })

}
 ifUserExist(username){
        for (var i = 0; i < USERS.length; i++){
            if (username == USERS[i].userName){
                return true
            }

        }
        return false
        

    }
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



const USERS:IUser[]=[]