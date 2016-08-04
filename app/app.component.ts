import {Component} from "angular2/core"
import {LoginComponent} from "./login/login.component"
import {SuccessComponent} from "./success/success.component"
import {LoginService} from './login/login.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS,RouteConfig,Router,RouterLink} from 'angular2/router'
import 'rxjs/Rx'

@Component({
    selector: 'main-app',
    template: `<router-outlet></router-outlet>`,
    directives:[LoginComponent,SuccessComponent],
    providers:[LoginService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})
@RouteConfig([{path:'/login',name:'Login',component:LoginComponent,useAsDefault:true},{path:'/success',name:'Success',component:SuccessComponent}])
export class AppComponent{

    constructor(router: Router){
        console.log('hello1');
     router.navigate(['Login']);
     console.log('hello2');
    }

pageTitle: string= 'Welcome to My APP';
}