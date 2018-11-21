FROM node:10-alpine AS build-stage
WORKDIR /app

# Copy everything else and build
COPY . .
RUN npm install
RUN npm run build

# Build runtime image
FROM nginx:alpine
LABEL key="MicroMOOC"

# Copy website to default nginx public folder from 'build-stage'
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist .

# Copy the default nginx.conf
WORKDIR /etc/nginx/conf.d/
COPY --from=build-stage /app/nginx.conf default.conf
