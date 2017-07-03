import { Injectable } from '@angular/core'
import { IUser } from './shared/user.model'

@Injectable()
export class AuthService {
    currentUser: IUser;
    counterId: number = 1;
    loginUser(userName: string) {

        this.currentUser = {
            userName: userName,
            id: this.counterId = this.counterId + 1
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

}