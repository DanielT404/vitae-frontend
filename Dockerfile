FROM node:16.17.1
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

RUN chmod +x ./startContainer.sh
RUN chmod +x ./cspCompliance.sh

RUN npm run build

CMD ["/bin/bash", "./startContainer.sh"]
