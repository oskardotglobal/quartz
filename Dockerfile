FROM caddy AS caddy


FROM node:20-slim as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json* .
RUN npm ci


FROM node:20-slim
WORKDIR /app
COPY --from=builder /app /app
COPY . . 

COPY --from=caddy /usr/bin/caddy /usr/bin

VOLUME ["/app/content"]
EXPOSE 8080

# In this form the command is executed by the shell
# See: https://docs.docker.com/engine/reference/builder/#cmd
CMD npx quartz build && caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
