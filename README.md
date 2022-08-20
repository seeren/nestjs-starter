## Description

[Nest](https://github.com/nestjs/nest) Starter project

* * *

## Installation

```bash
# clone repository
git clone https://github.com/seeren/nestjs-starter.git

# change directory
cd nestjs-starter

# install dependencies
npm install
```

## Developpement

### Server

```bash
# development
npm start

# debug mode
npm run start:debug
```

### ORM

`.env`, `.production.env` and `.test.env` describe database access. Drive is managed in `src/app/shared/config/database/database.config.ts`


 used in default MariaDB
```bash
# create entity
npm run entity:create <path-to-entity>

# create empty migration
npm run migration:create

# generate migration
npm run migration:generate

# execute migration
npm run migration:run

# cancel migration
npm run migration:revert
```


## License

This repo is MIT licensed.
