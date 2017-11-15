FROM node:latest
LABEL authors="Juan Sepulveda <jp103@tuta.io>"
WORKDIR /usr/src/screenify
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE  8080
CMD ["npm", "start"]
