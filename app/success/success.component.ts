import {Component,OnInit} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
    selector: 'success-app',
    templateUrl:'app/success/success.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class SuccessComponent implements OnInit{
    temp: string='hello';

    ngOnInit(){
       console.log('Working fine');
    }

}