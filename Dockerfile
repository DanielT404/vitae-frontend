FROM node:16.14.2

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

RUN cd e2e && npm install
COPY . .
RUN chmod +x ./startContainer.sh
RUN chmod +x ./cspCompliance.sh

RUN npm run build

CMD ["/bin/bash", "./startContainer.sh"]
