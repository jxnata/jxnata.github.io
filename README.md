# Static Portfolio & Blog Website

## Overview

This project is a **static, responsive** portfolio and blog website built with **React**. It will be hosted on **GitHub Pages**, and all content will be dynamically loaded from **JSON files** (for projects) and the **Dev.to API** (for blog posts). The site must be **fast, lightweight, optimized for SEO**, and support **dark/light mode**.

## Features

-   **Static site**: No backend, all data is stored in the repository.
-   **Dark/Light mode toggle**.
-   **Projects** loaded dynamically from the `projects` folder in the repository via the GitHub API.
-   **Blog posts** fetched dynamically from the Dev.to API.
-   **SEO-optimized** with meta tags and structured data.
-   **Google Analytics** integration.
-   **Fully responsive design**, working seamlessly across devices.
-   **Social links** in the footer: GitHub, Twitter (X), Dev.to.

## Tech Stack

-   **React** for UI
-   **Tailwind CSS** for styling
-   **React Router** for navigation
-   **GitHub API** to fetch project data
-   **Dev.to API** to fetch blog posts
-   **Tanstack Query** for handling data fetching

## Data Structure

Projects will be stored in JSON files within the `projects` folder:

```ts
// Example project.json
{
    "name": "Project Name",
    "url": "https://project-url.com",
    "description": "Short project description.",
    "image": "https://image-url.com",
    "tags": ["React", "TypeScript", "Mobile"],
    "appstore": "https://appstore-link.com",
    "playstore": "https://playstore-link.com",
    "inactive": false
}
```

The slug must be the file name.

## API Integrations

-   **Dev.to API**: Fetches blog posts from the `jxnata` profile.

## Deployment

-   **GitHub Pages** for static hosting.

## Additional Notes

-   **Font:** Use **Inter** as the default font.
-   **Design:** Follow a clean and minimalistic.
-   **Future Enhancements:** Add filtering for projects by tags, improve animations, and optimize image loading.

This document serves as a guide for future updates and feature implementations.
