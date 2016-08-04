System.register(["angular2/core", 'angular2/router', './login.service', './login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_service_1, login_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this.user = new login_1.Login('', '');
                    console.log('in login compoennt');
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    var authenticatedUser = this.logins.find(function (u) { return u.username === _this.user.username; });
                    if (authenticatedUser && authenticatedUser.password === this.user.password) {
                        //this._router.navigate(['Success']);
                        this._router.navigate(['Success']);
                    }
                    else
                        console.log('passowrd doesnt exist');
                };
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._loginService.getLogins().subscribe(function (logins) { return _this.logins = logins; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        templateUrl: 'app/login/login.component.html',
                        styleUrls: ['app/login/login.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map