# Album Browser — Lab 6

An Angular 21 application for browsing albums and photos via the JSONPlaceholder REST API.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

Then open your browser at **http://localhost:4200**

---

## Features

| Route | Description |
|---|---|
| `/home` | Welcome page with "Browse Albums" button |
| `/about` | Static info page about the app |
| `/albums` | List of all albums with Delete button |
| `/albums/:id` | Album detail with editable title + Save |
| `/albums/:id/photos` | Photo grid with thumbnails |

---

## Project Structure

```
src/app/
├── models/
│   └── album.model.ts          # Album & Photo interfaces
├── services/
│   └── album.service.ts        # HTTP calls (getAlbums, getAlbum, getAlbumPhotos, updateAlbum, deleteAlbum)
├── components/
│   ├── home/                   # Welcome page
│   ├── about/                  # About page
│   ├── albums/                 # Albums list
│   ├── album-detail/           # Album detail + edit
│   └── album-photos/           # Photo grid
├── app.routes.ts               # Route definitions
├── app.config.ts               # App config (HttpClient, Router)
├── app.ts                      # Root component with navbar
└── app.html                    # Navbar + router-outlet
```

---

## API

All data is fetched from **https://jsonplaceholder.typicode.com**

- `GET /albums` — list all albums
- `GET /albums/:id` — single album
- `GET /albums/:id/photos` — photos for an album
- `PUT /albums/:id` — update album (simulated)
- `DELETE /albums/:id` — delete album (simulated)

---

## Build

```bash
ng build
```

Output is placed in `dist/album-browser/`.
