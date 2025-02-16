FROM alpine:latest
RUN apk add --no-cache nodejs npm
RUN mkdir -p /usr/my-code
COPY . /usr/my-code
WORKDIR /usr/my-code
RUN npm install
CMD [ "node", "consumer.js" ]
