#!/bin/bash
cd /front
source $NVM_DIR/nvm.sh
pm2 start node_modules/nuxt/bin/nuxt-start -i 2 --name=nuxt -l /tmp/nuxt.log
pm2 logs