FROM node:latest as develepment

LABEL author.lastname="OTUSZEWSKI" \
        author.firstname="Hugo" \
        author.mail="hugo.otuszewski@my-digital-school.org"

RUN echo "Europe/Paris" > /etc/timezone && \
    ln -fs /usr/share/zoneinfo/Europe/Paris /etc/localtime && \
    apt-get update && apt-get install -y tzdata && \
    dpkg-reconfigure --frontend noninteractive tzdata && \
    mkdir -p /home/app

WORKDIR /home/app
COPY ../../app /home/app/

ENV NODE_ENV=develepment

RUN npm install && \
    npm install -g nodemon

CMD ["npm", "run", "start"]
