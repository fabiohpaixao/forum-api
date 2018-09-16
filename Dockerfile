FROM node:latest


# ------------------------------------------
# install the adonis CLI
# ------------------------------------------
RUN npm i -g @adonisjs/cli

# ------------------------------------------
# copy our initilization file and set permissions
# ------------------------------------------
COPY init.sh /init.sh
RUN chmod 755 /init.sh

WORKDIR /usr/app

ADD .env /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD ["/init.sh"]