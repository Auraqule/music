# Full Stack Music with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Seerbit Payment System

This is a repository for a Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Seerbit

Key Features:

- Song upload
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Seerbit recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Auraqule/music.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_SUPABASE_URL =
NEXT_PUBLIC_SUPABASE_ANON_KEY =
SUPABASE_SERVICE_ROLE_KEY =
NEXT_PUBLIC_SEERBIT_API_KEY=
```

### Add SQL Tables

Use `database.sql` file, create songs and liked_songs table

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
