module.exports = {
  apps: [
    {
      name: 'beIN SPORTS USA TV Guide & Schedule',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p ' + (process.env.NEXT_PUBLIC_PORT || 8080),
      watch: false,
      autorestart: true,
      env: {
        NEXT_PUBLIC_SITE_URL:
          'https://beingold-dev-main-website-app.azurewebsites.net/',
        NEXT_PUBLIC_KONTENT_ADAPTER_URL:
          'https://beingold-dev-kontent-adapter-app.azurewebsites.net/kp',
        REACT_APP_TEST:
          'https://beingold-dev-kontent-adapter-app.azurewebsites.net/kp',
        PARCHA_TEST:
          'https://beingold-dev-kontent-adapter-app.azurewebsites.net/kp',
        NEXT_PUBLIC_KONTENT_ADAPTER_TOKEN: 'qwerty'
      },
      env_staging: {
        NODE_ENV: 'staging',
        NEXT_PUBLIC_SITE_URL:
          'https://beingold-dev-main-website-app.azurewebsites.net/',
        NEXT_PUBLIC_KONTENT_ADAPTER_URL:
          'https://beingold-dev-kontent-adapter-app.azurewebsites.net/kp',
        NEXT_PUBLIC_KONTENT_ADAPTER_TOKEN: 'qwerty'
      },
      env_production: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_SITE_URL:
          'https://beingold-dev-main-website-app.azurewebsites.net/',
        NEXT_PUBLIC_KONTENT_ADAPTER_URL:
          'https://beingold-dev-kontent-adapter-app.azurewebsites.net/kp',
        NEXT_PUBLIC_KONTENT_ADAPTER_TOKEN: 'qwerty'
      }
    }
  ]
};
