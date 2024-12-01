# Fake Food-Order website

A small website for showcasing styling and animations to a friend.

## Requirements

Generally required:

* Apache, with:
  * Modules mod_http2, mod_ssl, mod_rewrite
  * Able to execute PHP
* PHP, with:
  * Version 8.3
  * Extension mysqli

For local testing:
* Docker (see `compose.yaml`)

## How to Use

For local use, run at the project root: `docker compose up`

For online use, deploy project to a webserver,
with `/public` as the document root.
