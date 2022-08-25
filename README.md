## Description

[Nest](https://github.com/nestjs/nest) Starter project with **environment config**, **typeorm** and **nestjs-i18n** integration

* * *

## Installation

```bash
git clone https://github.com/seeren/nestjs-starter.git
```

* * *

## Developpement

### Docker usage

_[Dockerfile](./Dockerfile) is adapted for arm arch adapt as needed_

```bash
# Build then run image
docker-compose up -d
```

Container is named `nestjs-starter` to execute commands

```bash
# Execute zsh
docker exec -it nestjs-starter zsh
```

### Basic usage

```bash
# install dependencies
npm install

# development
npm start
```

* * *

## Environment

_Docker and modules setup are stored in `.env`, `.production.env` and `.test.env`_

* * *

## ORM

_Typeorm use configuration files_

```bash
# execute orm
npm run typeorm

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

* * *

## Translations

_Translation fallback language is in configuration files_

```env
I18N_FALLBACK=en
```

* * *

## License

This repo is MIT licensed.
