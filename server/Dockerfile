FROM node:19-alpine3.16
ENV NODE_ENV production
LABEL version="1.0"
LABEL description="This is the base docker image for Humaine frontend react app."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]


RUN npm install --production

COPY --chown=node:node . .

USER node

EXPOSE 4000

CMD "npm" "start"