# Scores Backend

## Endpoints

<p>
  <label style="margin-right: 33px">REST: </label>
  <a href="http://localhost:3000/" target="blank">http://localhost:3000/</a>
</p>

<p>
  <label style="margin-right: 10px">GraphQL: </label>
  <a href="http://localhost:3000/graphql" target="blank">http://localhost:3000/graphql</a>
</p>

## Installation

```bash
$ yarn

or

$ npm install
```

## Running the app locally

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Running the app with Docker

```bash
# add the '--build' flag to rebuild the container
$ docker compose up --build

# restart the containers
$ docker compose up --force-recreate

# remove the containers
$ docker compose down
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Notes

<p align="center">
  This project uses the following frameworks
</p>
<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" height="100" alt="Nest Logo" /></a>
  <a href="https://graphql.org/" target="blank">
    <img src="https://graphql.org/img/logo.svg" height="100" alt="GraphQL Logo" /></a>
  <a href="https://www.mongodb.com/" target="blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" height="100" alt="MongoDB Logo" /></a>
</p>

<p align="center"><a href="https://nestjs.com" target="_blank">Nest.js</a> is a progressive <a href="https://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications. Nest.js uses Typescript for building type safe node.js projects</p>

<p align="center"><a href="https://graphql.org" target="_blank">GraphQL</a> is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>

<p align="center"><a href="https://www.mongodb.com/" target="_blank">MongoDB</a> MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.</p>
