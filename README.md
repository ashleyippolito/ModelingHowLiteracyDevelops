# Modeling How Literacy Develops — Week 3 Dashboard

A single-page dashboard for the Week 3 session ("Modeling How Literacy Develops") of a
doctoral seminar, deployed as a static site on [Vercel](https://vercel.com).

The page covers the session's learning objectives, what to do, the video overview,
companion readings, optional deep-dive videos, and the week's activity ("Choosing
the Right Lens"), which ends in an embedded Google Form so classmates can submit
their answers directly from the page.

## Structure

```
.
├── index.html   # all page content and markup
├── styles.css   # all styling
├── script.js    # password-gate logic
├── assets/      # video and other media
└── README.md
```

Plain HTML/CSS/JS — no build step, no dependencies. Vercel deploys it as-is.

## Local preview

Open `index.html` directly in a browser, or serve it locally:

```
npx serve .
```

## Password gate

The page sits behind a simple password prompt (see `script.js`). This is a **soft
deterrent only** — because this repo is public, the password is visible in the
source. It keeps the page from showing up unannounced to search engines or casual
visitors; it is not real access control. Don't rely on it to protect anything
sensitive.

## Updating content

- **Video overview**: replace `assets/models-of-early-reading.mp4` (keep the same
  filename, or update the `<source>` path in `index.html`).
- **Deep-dive videos**: once links are ready, swap the "Coming Soon" tags in the
  "Optional Deep Dives" section for links to the videos.
- **Activity form**: the "Choosing the Right Lens" submission form is a Google Form
  embedded via an `<iframe>` in the `#activity` section — edit the form itself in
  Google Forms (responses collect there), or swap the `src` for a different form.
- **Password**: change the `PASSWORD` constant at the top of `script.js`.
- **Colors**: all five theme colors are defined as CSS custom properties at the top
  of `styles.css` (`--tan`, `--rust`, `--maroon`, `--slate`, `--teal`).

## Deployment

This repo is linked to a Vercel project. Pushing to `main` triggers a new
deployment automatically.
