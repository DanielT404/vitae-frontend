FROM node:16.14.2-alpine
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

RUN apk update && apk add nano
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .
RUN npm install preact-cli@^3.0.0 -g
RUN npm install sirv-cli@1.0.3 -g
CMD ["sh", "-c", "npm run build && npm run start"]
