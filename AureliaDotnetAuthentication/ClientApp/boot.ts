import { Aurelia } from 'aurelia-framework';
import config from './app/components/account/authConfig';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration()
        .plugin('aurelia-auth', (baseConfig) => { baseConfig.configure(config); });

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot('app/components/app/app'));
}
