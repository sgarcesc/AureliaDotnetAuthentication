import { inject, Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { FetchConfig, AuthorizeStep } from 'aurelia-auth';

@inject(Router, FetchConfig)
export class App {
    router: Router;
    fetchConfig: FetchConfig;

    constructor(router: Router, fetchConfig: FetchConfig) {
        this.router = router;
        this.fetchConfig = fetchConfig;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
        config.map([{
            route: ['', 'home'],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: '../home/home',
            nav: true,
            title: 'Home',
            auth: true
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: '../counter/counter',
            nav: true,
            title: 'Counter',
            auth: true
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
        },
        ]);


    }

    activate() {
        this.fetchConfig.configure();
    }
}
