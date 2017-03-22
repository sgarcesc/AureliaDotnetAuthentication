import { Aurelia } from 'aurelia-framework';
import authConfig from './app/components/account/authConfig';

declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        /* configure aurelia-authentication */
        .plugin('aurelia-authentication', baseConfig => {
            baseConfig.configure(authConfig);
        });


    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot('app/components/app/app'));
}
