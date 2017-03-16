export default {
    baseUrl: '/',
    loginRedirect: '#/',
    logoutRedirect: '#/',
    loginUrl: '/account/login',
    loginRoute: '/login',
    providers: {
        identSrv: {
            name: 'identSrv',
            url: '/api/account/login',
            authorizationEndpoint: '/api/account/authorize', //if this ends with slash --> game over
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'openid'],
            responseType: 'code',
            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            display: 'popup',
            type: '2.0',
            clientId: 'jsclient',
            popupOptions: { width: 452, height: 633 }
        },
    }
};