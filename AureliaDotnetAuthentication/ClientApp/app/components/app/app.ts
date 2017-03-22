import { Aurelia, inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { AuthenticateStep, FetchConfig } from 'aurelia-authentication';
import { HttpClient } from 'aurelia-fetch-client';
import 'isomorphic-fetch';

@inject(FetchConfig)
export class App {
    router: Router;
    fetchConfig: FetchConfig;

    constructor(fetchConfig) {
        this.fetchConfig = fetchConfig;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.addPipelineStep('authorize', AuthenticateStep); // Add a route filter so only authenticated uses are authorized to access some routes
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: '../home/home',
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: '../counter/counter',
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: '../fetchdata/fetchdata',
            nav: true,
            title: 'Fetch data',
            auth: true
        }, {
            route: 'login',
            name: 'login',
            moduleId: '../account/login',
            nav: false,
            title: 'Login'
        }]);

        this.router = router;
    }

    activate() {
        // this will add the interceptor for the Authorization header to the HttpClient singleton
        this.fetchConfig.configure(new HttpClient());
    }

}
