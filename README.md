This is a demo repo for my talk segment titled _Client-side data architecture with Apollo Client_ held on 10 Jan 2018 at TenX, Singapore.

- [Slides](https://docs.google.com/presentation/d/1HyV5coIZ1K7juUtXR2F_oN2z_xxSWuWmaX7e0kjdatM/edit?usp=sharing)
- [Meetup page](https://www.meetup.com/React-Singapore/events/256426835/)

## How to use

### Pre-requisites

- [Yarn](https://yarnpkg.com/) - this repo uses Yarn Workspaces
- [Docker Desktop](https://www.docker.com/)

### Installing dependencies

Install dependencies for all services/apps by running this from this repository's **root folder**:

```sh
yarn
```

### Spin up back-end service & populate with fake data

Only one of the back-end services should be running at any one time. The data in these backend services is only stored in-memory and will not be written to the disk.

The back-end services are accessible via port `3001`.

#### Option 1: REST-ful server powered by Loopback

```sh
yarn workspace backend-rest start
yarn workspace backend-rest seed # <- execute this in another console
```

Note: You can access the Swagger API explorer at [`http://localhost:3001/explorer`](http://localhost:3001/explorer)

#### Option 2: GraphQL server powered by Prisma (not implemented)

```sh
yarn workspace backend-graphql start
yarn workspace backend-graphql seed # <- execute this in another console
```

Notes: You can access the GraphQL explorer at [**_INSERT_HERE_**]()

### Spin up front-end app

Like the back-end services, only one of front-end apps should be running at any one time.

The front-end apps are accessible via port `3000`.

#### Option 1: Redux React app

```sh
yarn workspace frontend-redux start
```

#### Option 2: Apollo Client React app

```sh
yarn workspace frontend-apollo start
```
