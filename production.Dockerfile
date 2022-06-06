FROM node:16.14.2

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

RUN npm run test || exit 1

COPY preact.config.js ./preact.config.js
COPY startContainer.sh ./startContainer.sh
COPY cspCompliance.sh ./cspCompliance.sh

RUN chmod +x ./startContainer.sh
RUN chmod +x ./cspCompliance.sh

RUN npm run build

CMD ["/bin/bash", "./startContainer.sh"]
