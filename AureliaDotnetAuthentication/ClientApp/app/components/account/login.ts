import { AuthService } from 'aurelia-auth';
import { inject } from 'aurelia-framework';

@inject(AuthService)
export class Login {
    authService: AuthService;
    email: string;
    password: string;

    constructor(authService: AuthService) {
        this.authService = authService;

    }

    login() {
        var creds = "grant_type=password&email=" + this.email + "&password=" + this.password;

        return this.authService.login(this.email, this.password)
            .then(response => {

                console.log("success logged " + response);

            })
            .catch(err => {
                err.json().then(function (e) {
                    console.log("login failure : " + e.message);
                });
            });
    };

    authenticate(name) {

        return this.authService.authenticate(name, false, null)

            .then((response) => {

            });
    }
}