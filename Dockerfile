FROM node:10-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#WORKDIR /home/node/app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .  /app
USER node

# COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]