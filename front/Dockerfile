FROM node:21-alpine as builder
LABEL stage="builder"
RUN npm install $$ npm install -g @angular/cli $$ npm run build
WORKDIR /app/
COPY .  /app/

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* 

COPY --from=builder /app/dist/vax-connect-angular-client /usr/share/nginx/html