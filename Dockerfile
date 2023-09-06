FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Copy src
COPY . .

VOLUME ["/app/content"]
ENTRYPOINT ["npx", "quartz", "build", "--serve"]
