export default {
    loginUrl: '/api/token',
    logoutRedirect: '#/login',
    loginRedirect: '#/',
    loginOnSignup: false,
    storageChangedReload: true,    // ensure secondary tab reloading after auth status changes
    expiredRedirect: 1,            // redirect to logoutRedirect after token expiration
    useRefreshToken: true,         // Option to turn refresh tokens On/Off
    autoUpdateToken: true,         // The option to enable/disable the automatic refresh of Auth tokens using Refresh Tokens

};