FROM node:20-slim as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json* .
RUN npm ci


FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app /app
COPY . .

COPY crontab /etc/crontabs/root

VOLUME ["/app/content"]
EXPOSE 8080

CMD ["crond", "-f", "-d", "8"]
