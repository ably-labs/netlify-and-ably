# Netlify and Ably

A GitHub template to quickly get started with Ably, hosted on Netlify, using TypeScript.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ably-labs/netlify-and-ably)

## What is this?

This is a GitHub template repository that will create you a pre-configured, v-latest experience on Netlify, along with a hot-reload enabled, local development experience. We've configured TypeScript, and a bunch of default build jobs so you can create a new repository and just get to work.

There's a built in hot-reloading dev experience powered by Vite.js.

It's built out-of-the-box to support Ably realtime, and has pre-build APIs for the Ably JavaScript SDK to handle authentication and messaging.

Bundled tools:

- Vite (vite.dev) - hot reload, bundleless dev server
- TypeScript - language, type checking
- Netlify Functions - bundled API / BFF support.
- Ably - realtime, auth, messaging

## Usage

- Create a repository based on this repository.
- Clone your new repository.
- Run `npm install` to install the dependencies.
- Run `npm run start` to start the local development server.
- Browse to `http://localhost:8888`

You'll see a white page load, which in turn will load the Ably JavaScript SDK, and use the included Netlify functions to handle API key management. When everything is running, you'll see Ably messages written to the page.

## Getting and Managing Ably API keys

In order to run this app, you will need an Ably API key. If you are not already signed up, you can [sign up now for a free Ably account](https://www.ably.com/signup). Once you have an Ably account:

1. Log into your app dashboard.
2. Under **“Your apps”**, click on **“Manage app”** for any app you wish to use for this tutorial, or create a new one with the “Create New App” button.
3. Click on the **“API Keys”** tab.
4. Copy the secret **“API Key”** value from your Root key, we will use this to configure our app.

This app is going to use [Ably Channels](https://www.ably.com/channels) and [Token Authentication](https://www.ably.com/documentation/rest/authentication/#token-authentication).

## Configuring your Ably API keys

### For local development

You need to create a `.env` file in the root with a variable defined called `ABLY_API_KEY` to store your secret.
You can do this from the command line if you like:

```bash
cd api
echo ABLY_API_KEY=YOUR-API-KEY-HERE > .env
```

**NB. You need to restart the dev server after you create this `.env` file.**

### Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ably-labs/netlify-and-ably)

We've bundled a `netlify.toml` file in the root of the repository, which will configure your build and deployment settings.
**You will need to add an environment configuration setting** using the netlify UI:

```bash
ABLY_API_KEY=your-ably-api-key
```

You can configure your secrets in `netlify` by going to your app dashboard and visiting:

Site Overview > Site Settings > Build and Deploy > Environment > Environment Variables

Click on **Edit Variables** to add the values for `ABLY_API_KEY`.

The rest of the Netlify build is configured via the `netlify.toml` file included in this repository.

# Dev Containers

This repository contains pre-configured `.devcontainer` support, so you can use it to spin up either VS Code devcontainers, or a GitHub Codespace for your application. It will just work!
