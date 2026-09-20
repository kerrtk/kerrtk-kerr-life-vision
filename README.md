# Kerr Life Vision

The personal hub of Todd Kerr — kerrlifevision.com

Next.js (App Router), deployed on Vercel from this repository. Pushes to `main`
deploy automatically. All site copy lives in `lib/content.ts`, so text changes
are a single-file edit.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Hub homepage |
| `/story` | The route, and what it started |
| `/dawson` | In memory of Dawson Lee Kerr (noindex) |
| `/aging-with-honor` | Routes to agingwithhonor.com |
| `/kerr-systems` | Routes to kerr.systems |
| `/marketplace-global` | MPG / VeraCell / PHIX |
| `/books` | Please Tell Me Why Father · Heaven's Blueprint · Unwhistled |
| `/contact` | One address |

## Brand

Ink & Wheat — Ink `#1A1815`, Wheat `#C9A227`, Paper `#FAF7F0`, Stone `#6B6660`.
Spectral for headings, Inter for body.

## The memorial page

`/dawson` is deliberately quiet: name, photo, a gold rule, nothing else. No form,
no links out, no call to action. It is `noindex` by choice — it exists for people
who are sent there, not for search engines.

The photo is controlled by `dawson.photo` in `lib/content.ts`. It stays `false`
until `public/dawson.jpg` exists, so the page degrades to name-only rather than
showing a broken image.

## Local

```
npm install
npm run dev
```

## Still to do

- Privacy policy and affiliate disclosure pages (required before DNS cutover)
- The three blog posts from the old WordPress site, kept at their current URLs
- Lead magnet, wired to Brevo (the `mailin` plugin on the old site is already Brevo)
- Redirect map for the nine indexed URLs, then point kerrlifevision.com here
