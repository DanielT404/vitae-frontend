FROM cypress/included:10.2.0
WORKDIR /app

COPY cypress.config.js .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install
RUN npx cypress verify
