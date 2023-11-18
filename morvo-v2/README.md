## Prerequisites

#### Node.js v18

You can install using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
# this is for installing v18.x.x
nvm install lts/hydrogen
# this is for telling it to use that specific version 
nvm use lts/hydrogen
# this is for making it default, so that the version will not be changed after re-login or reboot
nvm alias default lts/hydrogen
```

#### Project id from WalletConnect
Create an "app" project in WalletConnect, the ID will be used in next step.

#### .env.local
This file should include the WalletConnect project ID like:
`NEXT_PUBLIC_WC_ID=a83c3241b3fe`
