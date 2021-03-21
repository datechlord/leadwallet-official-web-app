ARG NODE_VERSION=14-alpine
FROM node:${NODE_VERSION}
WORKDIR /app
COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
COPY . .
RUN npm run build
EXPOSE $PORT
ENTRYPOINT ["npm", "run", "start:server"]
