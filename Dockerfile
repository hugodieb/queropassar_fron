FROM ubuntu:16.04

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN echo "export LS_OPTIONS='--color=auto'" >>~/.bashrc
RUN echo "eval "\`dircolors\`"" >>~/.bashrc
RUN echo "alias ls='ls \$LS_OPTIONS'" >>~/.bashrc
RUN echo "alias ll='ls \$LS_OPTIONS -l'" >>~/.bashrc
RUN echo "alias l='ls \$LS_OPTIONS -lA'" >>~/.bashrc

RUN apt-get update
RUN apt-get install nano
RUN apt-get install wget -y

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 7.1.0
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default
RUN source $NVM_DIR/nvm.sh && npm install -g pm2
RUN source $NVM_DIR/nvm.sh && npm install -g yarn

ENV SHELL /bin/bash

WORKDIR /front
ENV HOST 0.0.0.0
ENV PORT 3000
ENV BASE_URL http://localhost:8000


COPY package.json package.json
# COPY yarn.lock yarn.lock
RUN source $NVM_DIR/nvm.sh && yarn install
COPY docker/bin/* /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh
COPY . /front
RUN source $NVM_DIR/nvm.sh && API_MOCK=1 npm run build
