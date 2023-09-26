FROM oven/bun:latest

# Create app directory
RUN mkdir -p /app
WORKDIR /app


# Install app dependencies
COPY package.json /app
COPY bun.lockb /app
RUN bun i --frozen-lockfile

# Copy src
COPY . .

VOLUME ["/app/content"]
EXPOSE 8080
ENTRYPOINT ["bun", "quartz/bootstrap-cli.mjs", "build", "--serve"]
