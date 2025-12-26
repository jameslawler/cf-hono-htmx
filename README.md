# cf-hono-htmx

> Demo - [https://cf-hono-htmx.services-15b.workers.dev/](https://cf-hono-htmx.services-15b.workers.dev/)

This is a simple project to demonstrate a clean structure for a new web application project that uses Cloudflare Workers + Hono + HTMX.

The Hono routes return HTML for pages and dynamic parts of a page. Navigating to a `web` route will return a full page. Calling a `api` route will return a partial page.

The pages and components are `tsx` based which make splitting of components easier to maintain.

## Installation

1. Install packages

`npm install`

2. Start the local instance

`npm run dev`

## Usage

Once running the local instance, navigate to `http://localhost:8787`.

Clicking the `ping` button uses HTMX to get the partial page from `/api/ping` and render the results into a div.

## Folder Structure

```
client -> holds tsx pages and components
-> components
-> pages
public -> static assets
server -> holds hono routes for server side actions (including rendering client tsx)
-> routes
```
