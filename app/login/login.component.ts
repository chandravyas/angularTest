import {Component,Injectable,OnInit} from "angular2/core"
import {Router,ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {LoginService} from './login.service';
import {ILogin,Login} from './login'

@Component({
    selector: 'login-page',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
    directives:[ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

    public user = new Login('','');

logins:ILogin[];
    constructor(private _loginService:LoginService,private _router: Router){
        console.log('in login compoennt');

    }

    login():void {
        var authenticatedUser = this.logins.find(u => u.username === this.user.username);
    if (authenticatedUser && authenticatedUser.password === this.user.password){
      //this._router.navigate(['Success']);
      this._router.navigate(['Success']);      
    }
    else
   console.log('passowrd doesnt exist');
    }

    ngOnInit(): void{
        this._loginService.getLogins().subscribe(logins => this.logins=logins)
    }


}