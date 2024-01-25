# Config for initializing

## Install dependencies

```
npm install

```

## Run database with docker

```
docker compose up -d

```

## Run database from prisma

```
npx prisma init --datasource-provider postgresql

```

## Run database migration

```
npx prisma migrate dev --name init

```
