import { Component } from '@angular/core'
import { AuthService } from './../users/auth.service'
import { UserService } from './../users/shared/user.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
             .nav.navbar-nav {font-size:12px;font-weight:bold;  background-color: #fff;}
             .navbar .navbar-nav {display: inline-block;
                                 float: none;
                                 vertical-align: top;
                                 background-color: #fff;
                                 }
            .navbar .navbar-collapse {text-align: center;  background-color: #fff;}
            .navbar-brand {color:#31B0D5;font-size:20px;font-weight:bold;  background-color: #fff;}
            `]


})

export class NavBarComponent {
    constructor(private auth: AuthService, private userService: UserService) {

    }

 /* searchUsers(searchPattern: string){
    this.userService.searchUsers(searchPattern).subscribe(function(searchUsers){
        console.log ( "SearchUsers : ", searchUsers);
    })
    console.log ("Hello from here!")
    }
}*/
}