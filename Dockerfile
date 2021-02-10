FROM node:14.15-alpine

WORKDIR /react-app

ENV PATH /react-app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

CMD ["yarn", "start"]
