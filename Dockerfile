FROM nginx:alpine

RUN apk --no-cache add curl

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./* ./

HEALTHCHECK CMD curl -f http://localhost/ || exit 1

ENTRYPOINT ["nginx", "-g", "daemon off;"]
