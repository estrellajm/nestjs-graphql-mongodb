FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]





### A possible update ###

# FROM node:16 AS development

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm ci

# COPY . .

# EXPOSE 3000

# RUN npm run start:dev




# FROM node:16 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["npm", "run", "build:start"]


# more info here https://pallavbh23.medium.com/setting-up-docker-and-docker-compose-for-nest-js-and-mongodb-1cd972d97ef7