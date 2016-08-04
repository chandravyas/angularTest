import {Injectable} from 'angular2/core'
import {ILogin} from './login'
import {Http,Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class LoginService{

    private _loginInfoUrl='../api/logins/logins.json';
    constructor(private _http:Http){}
    getLogins():Observable<ILogin[]>
    {
    return this._http.get(this._loginInfoUrl).map((response:Response)=><ILogin[]>response.json()).do(data => console.log("All:"+JSON.stringify(data)))
}
}