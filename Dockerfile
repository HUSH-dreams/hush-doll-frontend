FROM mirror.gcr.io/library/node:18.16.0-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN NODE_ENV=development npm install

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ARG REACT_APP_FRONTEND_URL
ENV REACT_APP_FRONTEND_URL=$REACT_APP_FRONTEND_URL

COPY . .

RUN npm run build

FROM mirror.gcr.io/library/nginx:1.25.0-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]