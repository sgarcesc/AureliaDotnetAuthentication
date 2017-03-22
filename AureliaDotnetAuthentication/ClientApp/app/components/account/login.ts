import { AuthService } from 'aurelia-authentication';
import { inject, computedFrom } from 'aurelia-framework';

@inject(AuthService)
export class Login {
    authService: AuthService;
    constructor(authService) {
        this.authService = authService;
    };

    heading = 'Login';

    userName = '';
    password = '';

    login(): Promise<any> {
        return this.authService.login({
            username: this.userName,
            password: this.password,
            grant_type: "password",
            client_id: "client_id",
            client_secret: "client_secret"
        }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(response => {
                console.log("success logged " + response);
            }).catch(err => {
                console.log("login failure");
            });
    };
}