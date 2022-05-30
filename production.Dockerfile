FROM node:16.14.2-alpine
WORKDIR /app

RUN apk update && apk add --no-cache nano && apk add bash
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

COPY startContainer.sh /startContainer.sh
COPY cspCompliance.sh /cspCompliance.sh

ENTRYPOINT /startContainer.sh

