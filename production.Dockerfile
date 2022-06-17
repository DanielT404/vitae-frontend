FROM node:16.14.2

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

COPY preact.config.production.js ./preact.config.js

RUN chmod +x ./startContainer.sh
RUN chmod +x ./cspCompliance.sh

RUN npm run build

CMD ["/bin/bash", "./startContainer.sh"]
