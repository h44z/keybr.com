FROM node:22-bookworm AS base

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:/usr/src/app/scripts/node_modules/.bin:$PATH

COPY . .
RUN rm -rf node_modules scripts/node_modules

RUN npm install
RUN npm run compile
RUN npm run build

RUN mkdir -p /etc/keybr
RUN cp /usr/src/app/.env.example /etc/keybr/env
RUN sed -i 's\PUBLIC_DIR=~/keybr.com/root/public\PUBLIC_DIR=/usr/src/app/root/public\g' /etc/keybr/env

ENV NODE_ENV production

RUN /usr/src/app/packages/devenv/lib/initdb.ts

EXPOSE 3000

ENTRYPOINT ["node", "--enable-source-maps", "/usr/src/app/root/index.js"]

# docker build -t your-image-name . --no-cache
# docker run --rm --name your-container-name -p 3000:3000 your-image-name
