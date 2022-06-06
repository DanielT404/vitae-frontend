FROM node:16.14.2-alpine
ENV NODE_ENV development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
COPY . .

RUN npm run test || exit 1

CMD ["sh", "-c", "npm run dev"]

