FROM node:16.14.2
WORKDIR /app

COPY [ "package.json", "package-lock.json*", "./" ]
RUN npm install
COPY . .

ARG PREACT_APP_MODE
ARG RUNNING_PORT
ENV PREACT_APP_MODE=$PREACT_APP_MODE
ENV RUNNING_PORT=$RUNNING_PORT

RUN echo "${RUNNING_PORT}"
RUN chmod +x /app/startContainer.sh

CMD ./startContainer.sh ${PREACT_APP_MODE} ${RUNNING_PORT}
